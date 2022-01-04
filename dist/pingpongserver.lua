AIO = AIO or require('AIO') 
local ____ = "server"
if AIO.AddAddon() then
require('lualib_bundle')
    AIO.RegisterEvent(
        "PingPang",
        function(player, msg)
            player:SendBroadcastMessage(tostring(msg))            AIO.Msg():Add("PingPang", "pong"):Send(player)            print("server 0")
            print(tostring(msg))
        end
    )
    print("server overe")
        end
