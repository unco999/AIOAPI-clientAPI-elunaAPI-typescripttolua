AIO = AIO or require('AIO') 
local ____ = "server"
if AIO.AddAddon() then
require('lualib_bundle')
    local Server = __TS__Class()
    Server.name = "Server"
    function Server.prototype.____constructor(self)
        print("hellow Server")
    end
    local _server = __TS__New(Server)
    end
