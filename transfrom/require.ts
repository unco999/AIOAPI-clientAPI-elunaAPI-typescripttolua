import * as tstl from "typescript-to-lua";
import * as ts from "typescript";
import * as lua from "typescript-to-lua";
import { SourceNode } from "source-map";
import { createBlock, createFile, createFunctionExpression, createStringLiteral, isAssignmentStatement, tstlHeader } from "typescript-to-lua";

function addGlobalExportTag(node: tstl.FunctionDefinition) {
  Object.assign(node, { __globalExport: true });
}

function hasGlobalExportTag(node: tstl.FunctionDefinition): boolean {
  /* eslint-disable @typescript-eslint/ban-ts-comment */
  // @ts-ignore
  return node.__globalExport === true;
}

interface PluginGlobals {
  functions: Array<string>
}

interface PluginOptions {
  name: string,
  match: string,
  globals: PluginGlobals
}

export default function(options: PluginOptions): tstl.Plugin {
  const fileMatcher = new RegExp(options.match ? options.match : ".*");
  const keyvalue:Record<string,string> = {}

  return {
    printer: (program, emitHost, fileName, file) => {
      class Printer extends tstl.LuaPrinter {
        
       
        override printFile(file: tstl.File): SourceNode {
            let header = file.trivia
            // if(!this.options.noHeader){
            //     header += tstlHeader 
            //      header += 'require("lualib_bundle");\n';
            // }
            // console.log(header)
            // const table = [tstl.createAssignmentStatement(tstl.createIdentifier("AIO"),tstl.createIdentifier("AIO or require('AIO')"))]
            // file.statements.splice(0,0,...table)
            return this.concatNodes(header, ...this.printStatementArray(file.statements));
        }
    
        override printIfStatement(statement: tstl.IfStatement, isElseIf?: boolean): SourceNode {
          const chunks = [];
          const prefix = isElseIf ? "elseif" : "if";
          chunks.push(this.indent(prefix + " "), this.printExpression(statement.condition), " then\n");
          const sourter = this.printExpression(statement.condition)
          const name = sourter.source
          const newName = name.replace("../src/","").replace(".ts","")
          if(statement.ifBlock){
             if(keyvalue[newName] === "server"){
                console.log("检测到服务端脚本,所有导入自动从AddAddon后开始...")
                chunks.push(this.indent("require('lualib_bundle')\n"));
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
        
        // public printVariableDeclarationStatement(statement: tstl.VariableDeclarationStatement): SourceNode {
        //     if(tstl.isVariableDeclarationStatement(statement)){
        //         if(statement.right){
        //            const sign =(statement.right[0] as tstl.StringLiteral).value
        //            if(sign === "AIO"){
        //                 const table = [tstl.createAssignmentStatement(tstl.createIdentifier("AIO"),tstl.createIdentifier("AIO or require('AIO')"))]
        //                 return super.printBlock(tstl.createBlock(table))
        //            }
        //         }
        //     }
        //     return super.printVariableDeclarationStatement(statement)
        // }
        
        // printIdentifier(expression: tstl.Identifier): SourceNode {
        //     console.log(expression.text)
        //     if(expression.text == 'require'){
        //         expression.text = ""
        //     }
        //     return super.printIdentifier(expression)
        // }
        


        // Hook the printing of the return to swap it with a block of exports for the API interface (only for matching script types)
      

      }

      return new Printer(emitHost, program, fileName).print(file);
    },

    visitors: {
      [ts.SyntaxKind.SourceFile]: (node, context) => {
        const [file] = context.superTransformNode(node) as [tstl.File]
        const statements = file.statements;
        const bool:boolean = false
        file.trivia += "AIO = AIO or require('AIO') \n"
        console.log(context.sourceFile.fileName + "自动添加AIO头文件!")
        for(const statement of statements){
            if(tstl.isVariableDeclarationStatement(statement)){
                //@ts-ignore
                if(statement.right[0].value == "client"){
                    keyvalue[context.sourceFile.fileName.replace("E:/wow_typescript_lua/src/","").replace(".ts","")] = "client"
                    return tstl.createFile( statements, file.luaLibFeatures, file.trivia);
                }
                //@ts-ignore
                if(statement.right[0].value == "server"){
                    keyvalue[context.sourceFile.fileName.replace("E:/wow_typescript_lua/src/","").replace(".ts","")] = "server"
                    return tstl.createFile( statements, file.luaLibFeatures, file.trivia);
                }
            }
        }
        return tstl.createFile( statements, file.luaLibFeatures, file.trivia);
      },
    },
  };
}