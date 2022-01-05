AIO = AIO or require('AIO') 
local ____ = "server"
if AIO.AddAddon() then
require('lualib_bundle')
    local tab = {a = {b = {c = {}}}}
    AIO.RegisterEvent(
        "PingPang",
        function(player, msg)
            player:SendBroadcastMessage(tostring(msg))            print("server 023232323232323")
            print(tostring(msg))
            player:SpawnCreature(
                tonumber(msg),
                player:GetX() + 0.05,
                player:GetY() + 0.5,
                player:GetZ(),
                0,
                5,
                0
            )        end
    )
    print(tab.a.b.c)
    print("server overe")
        end
