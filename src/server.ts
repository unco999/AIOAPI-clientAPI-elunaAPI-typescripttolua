//服务端标识将使用模块导入方式编译
"server"
import { INSERT, UPDATE } from "./mysql_tool/mysql_tool_main"

const e = {c:{a:()=>{}}}

if(AIO.AddAddon()){
    class Server{
        constructor(){
            console.log("hellow Server")
        }
    }
    const asdhjk = CreatureEvents.CREATURE_EVENT_ON_DIALOG_STATUS
    const _server = new Server()
}