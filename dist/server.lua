AIO = AIO or require('AIO') 
local ____exports = {}
local ____ = "server"
if AIO.AddAddon() then
require('lualib_bundle')
require("mysql_tool.mysql_tool_main")    local Server = __TS__Class()
    Server.name = "Server"
    function Server.prototype.____constructor(self)
        print("hellow Server")
    end
    local _server = __TS__New(Server)
    end
    return ____exports
