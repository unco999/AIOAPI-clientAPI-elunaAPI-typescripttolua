AIO = AIO or require('AIO') 
local ____ = "client"
if not AIO.AddAddon() then
local Client = __TS__Class()
Client.name = "Client"
function Client.prototype.____constructor(self)
    print("hellow client")
end
local _server = __TS__New(Client)
end
