import fs from "fs"
import * as path from "path"

let table = ""
let data = fs.readdirSync('./eluna/enum')
console.log("开始")
fs.writeFileSync(path.resolve() + "/transfrom/enum.ts","")

function str() {
    return new Promise((res,rej)=>{
        for( const key in data){
            const filename = data[key]
            console.log(data[key])
            if(key == 0){
                fs.appendFileSync(path.resolve() + "/transfrom/enum.ts","export const tempEnum = {")
            }
              const _data = fs.readFileSync("eluna/enum/"+filename)
               let _string = _data.toString("utf8")
               let newString = _string
               let _d = newString.indexOf("d")
               let _left = newString.indexOf("{")
               let _right = newString.indexOf("}")
               newString = newString.substring(_left+1,_right)
               newString = newString.replace(new RegExp("=", 'g'),":")
               const idenfily = "/** No */"
               const top = newString.indexOf("@throwAway")
               const end = newString.indexOf("@end")
               if(top!= -1 && end != -1){
                   const text = newString.substring(top,end)
                   newString = newString.replace(text,"")
               }
               fs.appendFileSync(path.resolve() + "/transfrom/enum.ts",newString + "\n")
               if(key == data.length - 1){
                     fs.appendFileSync(path.resolve() + "/transfrom/enum.ts","}")
               }
        }
    })
}

str()