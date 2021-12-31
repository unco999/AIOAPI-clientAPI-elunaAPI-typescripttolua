/**标识符 识别脚本是属于客户端还是服务端
   client/server  客户端请把生成的lualib_bundle 
   放置AIO核心文件夹旁 并添加TOC 核心标识 #core
   **/
"client"
if(!AIO.AddAddon()){
    class Client{
        constructor(){
            console.log("hellow client")
        }
    }
    const _server = new Client()
}