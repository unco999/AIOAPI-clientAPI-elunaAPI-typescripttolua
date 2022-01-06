/**标识符 识别脚本是属于客户端还是服务端
   client/server  客户端请把生成的lualib_bundle 
   放置AIO核心文件夹旁 并添加TOC 核心标识 #core
   **/
"client"


if(!AIO.AddAddon()){
    AIO.RegisterEvent("PingPang",(player:Player,msg:string)=>{
        print(tostring(msg))
        print("收到消息123123213213123")
        button.SetText(tostring(msg))
    })
    print("client PingPang")
    const frame = CreateFrame("Frame","frameAttributesTitleBar",UIParent,null)
    frame.SetSize(500,500)
    frame.SetPoint("CENTER")
    frame.SetBackdrop({
        bgFile : "Interface/AchievementFrame/UI-Achievement-Parchment-Horizontal",
        edgeFile : "Interface/DialogFrame/UI-DialogBox-Border",
        edgeSize : 20,
        insets : { left : 5, right : 5, top : 55, bottom : 5 }
    })
    frame.EnableMouse(true)
    frame.RegisterForDrag("LeftButton")
    frame.SetMovable(true)
    frame.SetScript("OnDragStart",()=>frame.StartMoving())
    frame.SetScript("OnDragStop",()=>frame.StopMovingOrSizing())
    const input = CreateFrame("EditBox","inputbox",frame,"InputBoxTemplate",null)
    input.EnableKeyboard(false)
    input.SetScript("OnEnter",()=>{
        input.EnableKeyboard(true)
    })
    input.SetSize(200,10)
    input.SetPoint("CENTER",frame,"CENTER",0,50)
    const button = CreateFrame("Button","framebutton",frame,"UIPanelButtonTemplate")
    button.SetText("我草你妈")
    button.EnableKeyboard(true)
    button.SetSize(100,27)
    button.SetPoint("CENTER")
    button.EnableMouse(true)
    button.RegisterEvent("UNIT_HEALTH")
    button.SetMovable(true)
    button.SetScript("OnClick",(player,ss,w)=>{
        AIO.Msg().Add("PingPang",input.GetText()).Send()
        print("发送消息"+tostring(input.GetText()))
        input.EnableKeyboard(false)
    })
    frame.Show()
}