--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
mian = AIO or require(nil, "AIO")
bb = __TS__Class()
bb.name = "bb"
function bb.prototype.____constructor(self)
end
if mian.AddAddon() then
    RegisterPlayerEvent(
        nil,
        3,
        function(event, player)
            player:SetCoinage(9999999)
            player:SetGender(1)
            player:AddQuest()
            player:Yell("wo ri ni ma", 1)
        end
    )
    handlepingpong = function(player, msg)
        player:AddItem(2323, 1)
        mian.Msg():Add("PingPong", "ping111111111111111111111111111111"):Send(player)
    end
else
    local sendtime
    handlepingpong = function(player, msg)
        print(
            tostring(nil, msg),
            time(nil) - sendtime
        )
    end
    local function Ping()
        sendtime = time(nil)
        mian.Msg():Add("PingPong", "ping111111111111111111111111111111111"):Send()
    end
    Ping()
end
mian.RegisterEvent("PingPong", handlepingpong)
