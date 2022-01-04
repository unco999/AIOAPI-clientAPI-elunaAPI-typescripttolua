AIO = AIO or require('AIO') 
local ____ = "client"
if not AIO.AddAddon() then
AIO.RegisterEvent(
    "PingPang",
    function(player, msg)
        print(tostring(msg))
        print("收到消息")
    end
)
AIO.Msg():Add("PingPang", "GOTO"):Send()print("client PingPang")
    end
