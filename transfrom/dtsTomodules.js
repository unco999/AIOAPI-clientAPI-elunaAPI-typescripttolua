import fs from "fs"

let table = ""
let data = fs.readdirSync('./eluna/enum')
fs.writeFileSync("./src/enum.ts","")
data.forEach(filename=>{
    fs.readFile("eluna/enum/"+filename,(e,data)=>{
       let _string = data.toString("utf8")
       let newString = _string.replace("declare","export")
       fs.appendFileSync("./src/enum.ts",newString + "\n")
    })
})
