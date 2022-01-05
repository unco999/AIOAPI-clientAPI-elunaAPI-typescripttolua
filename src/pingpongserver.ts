//服务端标识将使用模块导入方式编译
"server"
if(AIO.AddAddon()){
    const tab = {a:{b:{c:{}}}}
    AIO.RegisterEvent("PingPang",(player:Player,msg:string)=>{
        player.SendBroadcastMessage(tostring(msg))
        print("server 023232323232323")
        print(tostring(msg))
        player.SpawnCreature(tonumber(msg),player.GetX() + 0.05,player.GetY()+0.5,player.GetZ(),0,TempSummonType.TEMPSUMMON_CORPSE_DESPAWN,0)
    })   
    print(tab.a.b.c)
    print("server overe")
}