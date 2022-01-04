AIO = AIO or require('AIO') 
local ____ = "client"
if not AIO.AddAddon() then
local button
AIO.RegisterEvent(
    "PingPang",
    function(player, msg)
        print(tostring(msg))
        print("收到消息123123213213123")
        button:SetText(tostring(msg))    end
)
print("client PingPang")
local frame = CreateFrame("Frame", "frameAttributesTitleBar", UIParent, nil)
frame:SetSize(500, 500)frame:SetPoint("CENTER")frame:SetBackdrop({bgFile = "Interface/AchievementFrame/UI-Achievement-Parchment-Horizontal", edgeFile = "Interface/DialogFrame/UI-DialogBox-Border", edgeSize = 20, insets = {left = 5, right = 5, top = 55, bottom = 5}})frame:EnableMouse(true)frame:RegisterForDrag("LeftButton")frame:SetMovable(true)frame:SetScript(
    "OnDragStart",
    function() return frame:StartMoving() end
)frame:SetScript(
    "OnDragStop",
    function() return frame:StopMovingOrSizing() end
)button = CreateFrame("Button", "framebutton", frame, "UIPanelButtonTemplate")
button:SetText("我草你妈")button:EnableKeyboard(true)button:SetSize(100, 27)button:SetPoint("CENTER")button:EnableMouse(true)button:RegisterEvent("UNIT_HEALTH")button:SetMovable(true)button:SetScript(
    "OnClick",
    function(player, ss, w)
        AIO.Msg():Add("PingPang", "GOTO"):Send()        print("收到消息123123213213123")
    end
)frame:Show()AIO.Msg():Add("PingPang", "GOTO"):Send()    end
