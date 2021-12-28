

/**@noSelfInFile */
const mian = AIO ?? require("AIO")



let handlepingpong;
//

if (mian.AddAddon()){
        RegisterPlayerEvent(3,(event:any,player:Player)=>{
        player.SetCoinage(9999999)
        player.SetGender(1)
        player.Yell("wo ri ni ma",1)
    })
    handlepingpong = (player:Player,msg:string) =>{
        player.AddItem(2323,1)
        mian.Msg().Add("PingPong","ping111111111111111111111111111111").Send(player)
    }
}else{
    let sendtime:number;

    handlepingpong = (player:Player,msg:string) =>{
        print(tostring(msg),time() - sendtime)
    }

    const Ping = () =>{
        sendtime = time()
        mian.Msg().Add("PingPong","ping111111111111111111111111111111111").Send()
    }
    Ping()
}

mian.RegisterEvent("PingPong",handlepingpong)