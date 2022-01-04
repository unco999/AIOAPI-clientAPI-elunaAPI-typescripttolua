AIO = AIO or require('AIO') 
local ____exports = {}
local ____ = "client"
local function PingPangFunction(player, msg)
    print(tostring(msg))
    AIO.Msg():Add("PingPong", "Ping"):Send()end
if not AIO.AddAddon() then
AIO.RegisterEvent("PingPong", PingPangFunction)
    end
    return ____exports
