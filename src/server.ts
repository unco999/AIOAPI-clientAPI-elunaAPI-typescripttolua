//服务端标识将使用模块导入方式编译
"server"
import { INSERT, UPDATE } from "./mysql_tool/mysql_tool_main"

if(AIO.AddAddon()){
    class Server{
        constructor(){
            console.log("hellow Server")
        }
    }
    const _server = new Server()
}