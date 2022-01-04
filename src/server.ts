//服务端标识将使用模块导入方式编译
"server"
export{}
let PingPangFunction = (player:Player,msg:string) =>{
   const corpse = player.CreateCorpse()
   AIO.Msg().Add("PingPang").Send(player)
}; 
if(AIO.AddAddon()){

    AIO.RegisterEvent("PingPang",PingPangFunction)   
}