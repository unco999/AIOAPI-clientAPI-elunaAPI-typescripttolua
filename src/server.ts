//服务端标识将使用模块导入方式编译
"server"
if(AIO.AddAddon()){
    class Server{
        constructor(){
            console.log("hellow Server")
        }
    }
    const _server = new Server()
}