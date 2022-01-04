/**标识符 识别脚本是属于客户端还是服务端
   client/server  客户端请把生成的lualib_bundle 
   放置AIO核心文件夹旁 并添加TOC 核心标识 #core
   **/
"client"
if(!AIO.AddAddon()){
    AIO.RegisterEvent("PingPang",(player:Player,msg:string)=>{
        print(tostring(msg))
        print("收到消息")
    })
    AIO.Msg().Add("PingPang","GOTO").Send()
    print("client PingPang")
}