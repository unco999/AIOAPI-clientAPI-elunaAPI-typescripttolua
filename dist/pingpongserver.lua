AIO = AIO or require('AIO') 
local ____ = "server"
if AIO.AddAddon() then
require('lualib_bundle')
    AIO.RegisterEvent(
        "PingPang",
        function(player, msg)
            player:SendBroadcastMessage(tostring(msg))            AIO.Msg():Add("PingPang", "pong"):Send(player)            print("server 023232323232323")
            print(tostring(msg))
            player:Teleport(
                42,
                555,
                555,
                1,
                23
            )        end
    )
    print("server overe")
        end
