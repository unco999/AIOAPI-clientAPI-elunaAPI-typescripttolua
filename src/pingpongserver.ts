//服务端标识将使用模块导入方式编译
"server"
if(AIO.AddAddon()){
    AIO.RegisterEvent("PingPang",(player:Player,msg:string)=>{
        player.SendBroadcastMessage(tostring(msg))
        AIO.Msg().Add("PingPang","pong").Send(player)
        print("server 0")
        print(tostring(msg))
    })   
    print("server overe")
}