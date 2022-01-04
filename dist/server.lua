AIO = AIO or require('AIO') 
local ____ = "server"
if AIO.AddAddon() then
require('lualib_bundle')
    print("server overe")
    s = function(player, msg)
        local corpse = player:CreateCorpse()
        player:SendBroadcastMessage("你好 你的信息是这样的")        AIO.Msg():Add("PingPang", "pong"):Send(player)        print("server 0")
        print(tostring(msg))
    end
        else
            s = function(player, msg)
                print(tostring(msg))
                print("收到消息")
            end
            AIO.Msg():Add("PingPang", "GOTO"):Send()            print("client PingPang")
        end
        AIO.RegisterEvent("PingPang", s)
