--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
mian = AIO or require(nil, "AIO")
if mian.AddAddon() then
    RegisterPlayerEvent(
        nil,
        3,
        function(event, player)
            player:SetCoinage(9999999)
            player:SetGender(1)
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
