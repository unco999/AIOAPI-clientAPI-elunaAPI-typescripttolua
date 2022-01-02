import * as tstl from "typescript-to-lua";
import * as ts from "typescript";
import * as lua from "typescript-to-lua";
import { SourceNode } from "source-map";
import { createAssignmentStatement, createBlock, createFile, createFunctionExpression, createIdentifier, createStringLiteral, isAssignmentStatement, LuaLibImportKind, tstlHeader } from "typescript-to-lua";
import { peekScope } from "typescript-to-lua/dist/transformation/utils/scope";
import {
  AnnotationKind,
  getSymbolAnnotations,
  getTypeAnnotations
} from "typescript-to-lua/dist/transformation/utils/annotations";
import {createSafeName} from "typescript-to-lua/dist/transformation/utils/safe-names";
import {createDefaultExportStringLiteral} from "typescript-to-lua/dist/transformation/utils/export";
import * as path from "path";
import {
  CallExpression,
  createBooleanLiteral,
  createCallExpression,
  createExpressionStatement,
  createMethodCallExpression,
  createTableIndexExpression,
  createVariableDeclarationStatement, Expression, Identifier, Statement, VariableDeclarationStatement,
} from "typescript-to-lua";
import {transformIdentifier} from "typescript-to-lua/dist/transformation/visitors/identifier";
import {transformPropertyName} from "typescript-to-lua/dist/transformation/visitors/literal";
import unresolvableRequirePath from "typescript-to-lua/dist/transformation/utils/diagnostics"
//@ts-ignore
import {tempEnum} from './enum'


function transformImportSpecifier(
  context: tstl.TransformationContext,
  importSpecifier: ts.ImportSpecifier,
  moduleTableName: Identifier
): VariableDeclarationStatement {
  const leftIdentifier = transformIdentifier(context, importSpecifier.name);
  const propertyName = transformPropertyName(
      context,
      importSpecifier.propertyName ? importSpecifier.propertyName : importSpecifier.name
  );

  return createVariableDeclarationStatement(
      leftIdentifier,
      createTableIndexExpression(moduleTableName, propertyName),
      importSpecifier
  );
}

function addGlobalExportTag(node: tstl.FunctionDefinition) {
  Object.assign(node, { __globalExport: true });
}

function hasGlobalExportTag(node: tstl.FunctionDefinition): boolean {
  /* eslint-disable @typescript-eslint/ban-ts-comment */
  // @ts-ignore
  return node.__globalExport === true;
}

const getAbsoluteImportPath = (relativePath: string, directoryPath: string, options: ts.CompilerOptions) =>
    !relativePath.startsWith(".") && options.baseUrl
        ? path.resolve(options.baseUrl, relativePath)
        : path.resolve(directoryPath, relativePath);

        



function getImportPath(context: tstl.TransformationContext, relativePath: string, node: ts.Node): string {
  const { options, sourceFile } = context;
  const { fileName } = sourceFile;
  let rootDir = options.rootDir ? path.resolve(options.rootDir) : path.resolve(".");
  rootDir = path.join(rootDir, 'ext');

  const absoluteImportPath = path.format(
      path.parse(getAbsoluteImportPath(relativePath, path.dirname(fileName), options))
  );

  const baseDirectory = path.dirname(fileName).substring(rootDir.length + 1);
  const importBaseDirectory = path.dirname(absoluteImportPath).substring(rootDir.length + 1);
  if ((baseDirectory === 'server' || baseDirectory === 'client') && baseDirectory === importBaseDirectory) {
      rootDir = path.join(rootDir, baseDirectory);
  }

  const absoluteRootDirPath = path.format(path.parse(rootDir));

  if (absoluteImportPath.includes(absoluteRootDirPath)) {
      const importPaths = absoluteImportPath.replace(absoluteRootDirPath, "").slice(1);
      if (importPaths.startsWith('shared\\')) {
          return formatPathToLuaPath('__' + importPaths);
      }
      return formatPathToLuaPath(importPaths);
  } else {
      return relativePath;
  }
}

export function formatPathToLuaPath(filePath: string): string {
  filePath = filePath.replace(/\.json$/, "");
  // @ts-ignore
  if (process.platform === "win32") {
      // Windows can use backslashes
      filePath = filePath.replace(/\.\\/g, "").replace(/\\/g, "/");
  }
  return filePath.replace(/\.\//g, "").replace(/\//g, "/");
}


function shouldBeImported(context: tstl.TransformationContext, importNode: ts.ImportClause | ts.ImportSpecifier): boolean {
  const annotations = getTypeAnnotations(context.checker.getTypeAtLocation(importNode));

  return (
      context.resolver.isReferencedAliasDeclaration(importNode) &&
      !annotations.has(AnnotationKind.Extension) &&
      !annotations.has(AnnotationKind.MetaExtension)
  );
}

function shouldResolveModulePath(context: tstl.TransformationContext, moduleSpecifier: ts.Expression): boolean {
  const moduleOwnerSymbol = context.checker.getSymbolAtLocation(moduleSpecifier);
  if (!moduleOwnerSymbol) return true;

  const annotations = getSymbolAnnotations(moduleOwnerSymbol);
  return !annotations.has(AnnotationKind.NoResolution);
}


export function createModuleRequire(
  context: tstl.TransformationContext,
  moduleSpecifier: ts.Expression,
  tsOriginal: ts.Node = moduleSpecifier
): tstl.CallExpression {
  const params: tstl.Expression[] = [];
  if (ts.isStringLiteral(moduleSpecifier)) {
      const modulePath = shouldResolveModulePath(context, moduleSpecifier)
          ? getImportPath(context, moduleSpecifier.text.replace(/"/g, ""), moduleSpecifier)
          : moduleSpecifier.text;

      params.push(createStringLiteral(modulePath as string));
  }

  return tstl.createCallExpression(createIdentifier("require"), params, tsOriginal);
}

interface PluginGlobals {
  functions: Array<string>
}



interface PluginOptions {
  name: string,
  match: string,
  globals: PluginGlobals
}

export default function (options: PluginOptions): tstl.Plugin {
  const fileMatcher = new RegExp(options.match ? options.match : ".*");
  const keyvalue: Record<string, string> = {}
  const _require: Record<string,CallExpression[]> = {} 

  return {
    printer: (program, emitHost, fileName, file) => {
      class Printer extends tstl.LuaPrinter {

        override printFile(file: tstl.File): SourceNode {
          return this.concatNodes(file.trivia, ...this.printStatementArray(file.statements));
        }

        printVariableAssignmentStatement(statement: tstl.AssignmentStatement): SourceNode {
            if(statement.right){
                //@ts-ignore
              if(statement?.left[0]?.text && tempEnum[statement?.right[0]?.index?.value]){
                //@ts-ignore
                 return  super.printVariableAssignmentStatement(createAssignmentStatement( [createIdentifier(statement?.left[0]?.text)],[createIdentifier(tempEnum[statement?.right[0]?.index?.value].toString())]))
              }
            }
            return super.printVariableAssignmentStatement(statement)
        }

        override printIfStatement(statement: tstl.IfStatement, isElseIf?: boolean): SourceNode {
          const chunks = [];
          const prefix = isElseIf ? "elseif" : "if";
          chunks.push(this.indent(prefix + " "), this.printExpression(statement.condition), " then\n");
          const sourter = this.printExpression(statement.condition)
          const name = sourter.source
          const newName = name.replace("../src/", "").replace(".ts", "")
          if (statement.ifBlock) {
            if (keyvalue[newName] === "server") {
              console.log("检测到服务端脚本,所有导入自动从AddAddon后开始...")
              chunks.push(this.indent("require('lualib_bundle')\n"));
              _require[newName].forEach(__require=>{
                 chunks.push(this.printCallExpression(__require))
              })
              this.pushIndent();
            }
            chunks.push(this.printBlock(statement.ifBlock))
          }

          if (statement.elseBlock) {
            if (lua.isIfStatement(statement.elseBlock)) {
              chunks.push(this.printIfStatement(statement.elseBlock, true));
            } else {
              chunks.push(this.indent("else\n"));
              this.pushIndent();
              chunks.push(this.printBlock(statement.elseBlock));
              this.popIndent();
              chunks.push(this.indent("end"));
            }
          } else {
            chunks.push(this.indent("end"));
          }

          return this.concatNodes(...chunks);
        }

      }

      return new Printer(emitHost, program, fileName).print(file);
    },

    visitors: {
      [ts.SyntaxKind.SourceFile]: (node, context) => {
        const [file] = context.superTransformNode(node) as [tstl.File]
        const statements = file.statements;
        for (const statement of statements) {
          if (tstl.isVariableDeclarationStatement(statement)) {
            //@ts-ignore
            if (statement.right[0].value == "client") {
              console.log(context.sourceFile.fileName + "自动添加AIO头文件!")
              file.trivia += "AIO = AIO or require('AIO') \n"
              keyvalue[context.sourceFile.fileName.replace("E:/wow_typescript_lua/src/", "").replace(".ts", "")] = "client"
              return tstl.createFile(statements, file.luaLibFeatures, file.trivia);
            }
            //@ts-ignore
            if (statement.right[0].value == "server") {
              console.log(context.sourceFile.fileName + "server addon模块添加头文件")
              file.trivia += "AIO = AIO or require('AIO') \n"
              keyvalue[context.sourceFile.fileName.replace("E:/wow_typescript_lua/src/", "").replace(".ts", "")] = "server"
              return tstl.createFile(statements, file.luaLibFeatures, file.trivia);
            }
            //@ts-ignore
            if (statement.right[0].value == 'pure') {
              console.log(context.sourceFile.fileName + "纯服务端文件  不用加AIO头文件!")
              file.trivia += "require('lualib_bundle')\n"
              return tstl.createFile(statements, file.luaLibFeatures, file.trivia);
            }
          }
        }
        return tstl.createFile(statements, file.luaLibFeatures, file.trivia);
      },
      [ts.SyntaxKind.ImportDeclaration]: (statement: ts.ImportDeclaration, context) => {
        const text = statement.parent.getText()
        const identifier = text.substring(0,text.indexOf("\n"))
        
        let scope: any = peekScope(context)
        if (!scope) {
          scope = [];
        }
        const result: tstl.Statement[] = [];
        const requireCall = createModuleRequire(context, statement.moduleSpecifier);
        if(identifier.indexOf('server') > -1){
          if(_require[context.sourceFile.fileName.replace("E:/wow_typescript_lua/src/", "").replace(".ts", "")] == null){
            _require[context.sourceFile.fileName.replace("E:/wow_typescript_lua/src/", "").replace(".ts", "")] = []
          }  
          _require[context.sourceFile.fileName.replace("E:/wow_typescript_lua/src/", "").replace(".ts", "")].push(requireCall)
          return []
        }
        // require("module")
        if (statement.importClause === undefined) {
          result.push(tstl.createExpressionStatement(requireCall));

          if (scope.importStatements) {
            scope.importStatements.push(...result);
            return undefined;
          } else {
            return result;
          }
        }

        const importPath = ts.isStringLiteral(statement.moduleSpecifier)
          ? statement.moduleSpecifier.text.replace(/"/g, "")
          : "module";

        // Create the require statement to extract values.
        // local ____module = require("module")
        const importUniqueName = createIdentifier(createSafeName(path.basename(importPath)));

        let usingRequireStatement = false;

        // import defaultValue from "./module";
        // local defaultValue = __module.default
        if (statement.importClause.name) {
          if (shouldBeImported(context, statement.importClause)) {
            const propertyName = createDefaultExportStringLiteral(statement.importClause.name);
            const defaultImportAssignmentStatement = createVariableDeclarationStatement(
              transformIdentifier(context, statement.importClause.name),
              createTableIndexExpression(importUniqueName, propertyName),
              statement.importClause.name
            );

            result.push(defaultImportAssignmentStatement);
            usingRequireStatement = true;
          }
        }

        // import * as module from "./module";
        // local module = require("module")
        if (statement.importClause.namedBindings && ts.isNamespaceImport(statement.importClause.namedBindings)) {
          if (context.resolver.isReferencedAliasDeclaration(statement.importClause.namedBindings)) {
            const requireStatement = createVariableDeclarationStatement(
              transformIdentifier(context, statement.importClause.namedBindings.name),
              requireCall,
              statement
            );

            result.push(requireStatement);
          }
        }

        // import { a, b, c } from "./module";
        // local a = __module.a
        // local b = __module.b
        // local c = __module.c
        if (statement.importClause.namedBindings && ts.isNamedImports(statement.importClause.namedBindings)) {
          const assignmentStatements = statement.importClause.namedBindings.elements
            .filter(importSpecifier => shouldBeImported(context, importSpecifier))
            .map(importSpecifier => transformImportSpecifier(context, importSpecifier, importUniqueName));

          if (assignmentStatements.length > 0) {
            usingRequireStatement = true;
          }

          result.push(...assignmentStatements);
        }

        if (result.length === 0) {
          return undefined;
        }

        if (usingRequireStatement) {
          result.unshift(createVariableDeclarationStatement(importUniqueName, requireCall, statement));
        }

        if (scope.importStatements) {
          scope.importStatements.push(...result);
          return undefined;
        } else {
          return result;
        }
      },
      // [ts.SyntaxKind.Identifier]:(Identifier,context)=>{
      //   let _Identifier = context.superTransformExpression(Identifier)
      //     //@ts-ignore
      //     if(Identifier?.parent?.name?.escapedText){
      //                //@ts-ignore
      //         if(tempEnum[Identifier.parent.name.escapedText]){
      //           //@ts-ignore
                  
                
      //         }
      //     }
      //     return _Identifier
      // }
    },
  };
}

