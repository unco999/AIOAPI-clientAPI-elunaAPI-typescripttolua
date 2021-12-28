declare interface Unit{
    /**
     * 将给定法术条目的光环添加到单位的给定目标上。
     * @param spell 法术的进入 有效数字：从 0 到 4,294,967,295 的整数。
     * @param target 光环将作用于目标。
     */
    AddAura(spell:number, target:Unit)

    /**
     * 
     * @param victim 造成威胁的单位。
     * @param threat 威胁量。有效数字：所有十进制数字。
     * @param schoolMask [enum SpellSchoolMask] 的威胁原因。
     * @param spell 用于威胁的拼写条目。有效数字：从 0 到 4,294,967,295 的整数
     */
    AddThreat(victim:Unit, threat:number, schoolMask?:SpellSchoolMask, spell?:number)

    /**
     * 为Unit添加给定的单元状态。
     * @param state enum UnitState
     */
    AddUnitState(state)

    /**
     * 该单位试图攻击给定的目标 didAttack : 如果单位没有攻击
     * @param who 攻击的单位。
     * @param meleeAttack  如果单位没有攻击 boolean
     * @return didAttack : 如果单位没有攻击
     */
    Attack(who:Unit,meleeAttack:boolean)

    /**
     * 该单位停止攻击其目标
     */
    AttackStop()

    /**
     * 使用自定义的基点或施法者对目标单位施放法术
     * @param target 目标
     * @param spell 有效数字：从 0 到 4,294,967,295 的整数。
     * @param triggered 如果为真，则该法术是即时的并且没有成本。
     * @param bp0 法术效果 1 的自定义基点。如果为零，则不进行任何更改。有效数字：从 -2,147,483,647 到 2,147,483,647 的整数。
     * @param bp1 法术效果 2 的自定义基点。如果为零，则不进行任何更改。有效数字：从 -2,147,483,647 到 2,147,483,647 的整数。
     * @param bp2 法术效果 3 的自定义基点。如果为零，则不进行任何更改。有效数字：从 -2,147,483,647 到 2,147,483,647 的整数。
     * @param castItem 释放物品
     * @param originalCaster 看详细说明
     */
    CastCustomSpell(target:Unit, spell:number, triggered:boolean, bp0:number, bp1:number, bp2:number, castItem:Item, originalCaster:Uint64)
    
    /**
     * 使单位对目标施放法术。
     * @param target 目标
     * @param spell 有效数字：从 0 到 4,294,967,295 的整数。
     * @param triggered 如果为真，则该法术是即时的并且没有成本。
     */
    CastSpell(target:Unit, spell:number, triggered:boolean)

    /**
     * 
     * @param x 有效数字：所有十进制数字。
     * @param y 有效数字：所有十进制数字。
     * @param z 有效数字：所有十进制数字。
     * @param spell 法术的进入。有效数字：从 0 到 4,294,967,295 的整数。
     * @param triggered 如果为真，则该法术是即时的并且没有成本。
     */
    CastSpellAoF( x:number, y:number, z:number, spell:number, triggered:boolean )

    /**
     * 清除单位的战斗
     */
    ClearInCombat()

    /**
     * 清除单位的威胁列表
     */
    ClearThreatList()

    /**
     * 从Unit 中删除给定的单元状态。
     */
    ClearUnitState()

    /**
     * 从 Health 返回计算的百分比
     * @returns percentage 有效数字：从 -2,147,483,647 到 2,147,483,647 的整数。
     */
    CountPctFromCurHealth():number

    /**
     * 从 Max Health 返回计算出的百分比
     * @returns percentage 有效数字：从 -2,147,483,647 到 2,147,483,647 的整数
     */
    CountPctFromMaxHealth():number

    /**
     * 将Unit设置的显示 ID 恢复为原生显示 ID。
     */
    DeMorph()

    /**
     * 
     * @param target 损坏的单位。
     * @param damage 达到伤害的程度。有效数字：从 0 到 4,294,967,295 的整数。
     * @param durabilityloss 如果为假，则损坏不会造成耐久损坏。
     * @param school School 损坏是在 MAX_SPELL_SCHOOL 中造成的，直接损坏 enum SpellSchools
     * @param spell 造成伤害的法术。
     */
    DealDamage(target:Unit, damage:number, durabilityloss:boolean, school:SpellSchools, spell:number)
    
    /**
     * 使得单位医治目标单位给定的法术
     * @param target 单位治愈。
     * @param spell 导致治疗的法术。
     * @param amount 治疗量
     * @param critical 如果为 true，则治愈记录为严重。
     */
    DealHeal(target:Unit, spell:number, amount:number, critical:boolean)

    /**
     * 删除单位还是下马
     */
    Dismount()

    /**
     * 使单位执行给定的表情。
     * @param emoteID 有效数字：从 0 到 4,294,967,295 的整数。 
     */
    Emote(emoteID:number)

    /**
     * 使单位连续执行给定的表情。
     * @param emoteID 有效数字：从 0 到 4,294,967,295 的整数。
     */
    EmoteState(emoteID:number)

    /**
     * 返回单位上给定法术条目的光环或为零。
     * @param spellID 光环法术的进入。
     */
    GetAura(spellID):Aura

    /**
     * 返回单位的基础法术强度
     * @spellSchool 有效数字：从 0 到 4,294,967,295 的整数。
     * @returns 法术强度
     */
    GetBaseSpellPower(spellSchool:number):number

    /**
     * 返回Unit的Charmer实体的 GUID 。
     */
    GetCharmGUID():Uint64

    /**
     * 返回Unit的Charmer的 GUID。
     */
    GetCharmerGUID():Uint64

    /**
     * 返回Unit的类 ID。
     */
    GetClass():Classes

    /**
     *  以给定或默认语言环境或 nil返回Unit的类名称。
     * @param locale enum LocaleConstant
     */
    GetClassAsString(locale:LocaleConstant):string

    /**
     * 返回类掩码
     */
    GetClassMask()

    /**
     * 返回单位的战斗计时器
     */
    GetCombatTime():number

    /**
     * 返回Unit的魅力者或所有者的 GUID 。
     */
    GetControllerGUID():Uint64

    /**
     * 返回Unit的魅力者或所有者的 GUID 或其自己的 GUID。
     */
    GetControllerGUIDS():Uint64

    /**
     * 返回Unit创建者的 GUID。
     */    
    GetCreatorGUID():Uint64

    /**
     * 返回Unit的生物类型 ID，如 wolf 或 humanoid。
     */
    GetCreatureType():number

    /**
     * 返回小动物指南
     */
    GetCritterGUID():Uint64

    /**
     * 返回当前施放的给定类型的Spell或 nil。
     * 
     */
    GetCurrentSpell(spellType:CurrentSpellTypes):Spell
    
    /**
     * 返回Unit的当前显示 ID。
     */
    GetDisplayId():number

    /**
     * 返回Unit的派系 ID。
     */
    GetFaction():number

    /**
     * 返回包含友好的表格单元的中的给定范围内单位。
     * @param range 默认533 range
     * @returns friendyUnits
     */
    GetFriendlyUnitsInRange(range:number):Object

    /**
     * 返回Unit的性别。
     * @returns number 0 代表男性，1 代表女性，2 代表没有。
     */
    GetGender():number

    /**
     * 返回Unit的生命值。
     * @returns healthAmount 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetHealth():number

    /**
     * 返回Unit的健康百分比。
     * @returns 有效数字：所有十进制数字。
     */
    GetHealthPct():number

    /**
     * 返回Unit的级别。
     * @returns level
     */
    GetLevel():number

    /**
     * 返回Unit的最大生命值。
     * maxHealth 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetMaxHealth():number

    /**
     * 返回给定功率类型的Unit的最大功率量。
     * @param type 有效数字：从 -2,147,483,647 到 2,147,483,647 的整数。
     */
    GetMaxPower(type:number):number

    /**
     * 返回Unit的 mount 的 modelID。
     */
    GetMountId():number

    /**
     * 返回此Unit的当前移动类型。
     */
    GetMovementType():MovementGeneratorType

    /**
     * 返回Unit的原生/原始显示 ID。
     */
    GetNativeDisplayId():number

    /**
     * 返回Unit的所有者。
     */
    GetOwner():Unit

    /**
     * 返回Unit所有者的 GUID。
     */
    GetOwnerGUID():Uint64

    /**
     * 返回Unit宠物的 GUID 。
     */
    GetPetGUID():Uint64
    
    /**
     * 返回给定功率类型的Unit功率量。
     * @param type Powers
     */
    GetPower(type:number):number

    /**
     * 返回给定功率类型的Unit功率百分比。
     * @param type Powers
     */
    GetPowerPct(type:number):number

    /**
     * 返回Unit当前的电源类型。
     * power
     */
    GetPowerType():number

    /**
     * 返回Unit的种族 ID。
     */
    GetRace():number

    /**
     * 在给定或默认语言环境或 nil 中返回Unit的种族名称。
     * LocaleConstant
     */    
    GetRaceAsString(locale:LocaleConstant):string

    /**
     * 返回比赛掩码
     */
    GetRaceMask():number

    /**
     * 返回给定 [UnitMoveType]的Unit速度。
     */
    GetSpeed(type:UnitMoveType):number

    /**
     * 返回Unit当前的立场状态。
     */
    GetStandState():number

    /**
     * 返回Unit的指定统计信息
     * @param statType number
     */
    GetStat(statType:number):number

    /**
     * 返回包含不友好的表格单元的所述的给定范围内单位。
     * @param range 默认533 范围
     */
    GetUnfriendlyUnitsInRange(range:number):Object

    /**
     * 返回Unit的Vehicle方法
     */
    GetVehicle():Vehicle

    /**
     * 返回Unit的Vehicle方法
     */
    GetVehicleKit():Vehicle

    /**
     * 返回Unit的当前受害者目标或 nil。
     */
    GetVictim():Unit

    /**
     * 如果单位具有来自给定法术条目的光环，则返回真。
     */
    HasAura(spell:number):boolean

    /**
     * 如果Unit具有给定的单元状态，则返回 true 。
     */
    HasUnitState(type:UnitState):boolean

    /**
     * 如果Unit的健康高于给定的百分比，则返回 true 。
     * @param healthpct 百分比数
     */
    HealthAbovePct(healthpct:number):boolean

    /**
     * 如果Unit的健康状况低于给定的百分比，则返回 true 。
     * @param 百分比数
     */    
    HealthBelowPct(healthpct:number):boolean

    /**
     * 中断Unit的法术状态、施法等。如果法术不可中断，它将返回
     * @param spellType 要打断的法术类型。有效数字：从 -2,147,483,647 到 2,147,483,647 的整数。
     * @param delayed 如果法术延迟则跳过。
     */
    InterruptSpell(spellType:number, delayed:number)

    /**
     * 如果Unit还活着，则返回 true 
     */
    IsAlive():boolean

    /**
     * 如果单位是装甲师并且可以修理设备，则返回真。
     */
    IsArmorer():boolean

    /**
     * 如果单位正在攻击玩家，则返回真。
     */
    IsAttackingPlayer():boolean

    /**
     * 如果Unit是拍卖师，则返回 true 。
     */
    IsAuctioneer():boolean

    /**
     * 如果单位是银行家的，则返回真。
     */
    IsBanker():boolean

    /**
     * 如果单位是战斗大师，则返回真。
     */
    IsBattleMaster():boolean

    /**
     * 如果单位正在施法，则返回真
     */
    IsCasting():boolean

    /**
     * 如果单位是被魅惑的，则返回真。
     */
    IsCharmed():boolean

    /**
     * 如果单位死亡了,则返回真。
     */
    IsDead():boolean

    /**
     * 如果单位正在死亡，则返回真
     */
    IsDying():boolean

    /**
     * 如果单位具有完全健康，则返回真。
     */
    IsFullHealth():boolean

    /**
     * 如果Unit能够显示八卦窗口，则返回 true 。
     */
    IsGossip():boolean

    /**
     * 如果Unit是公会会长，则返回 true 。
     */
    IsGuildMaster():boolean

    /**
     * 如果Unit位于给定Creature的可访问位置，则返回 true 。
     * @param obj worldobject
     * @param radius 范围
     */
    IsInAccessiblePlaceFor(obj:WorldObject,radius:number):boolean
    
    /**
     * 如果单位在战斗中返回真。
     */
    IsInCombat():boolean

    /**
     * 如何单位在水中
     */
    IsInWater():boolean

    /**
     * 如果Unit是旅店老板，则返回 true 。
     */
    IsInnkeeper():boolean

    /**
     * 如果单元已安装，则返回 true 。
     */
    IsMounted():boolean

    /**
     * 如果Unit在Vehicle上，则返回 true 。
     */
    IsOnVehicle():boolean

    /**
     * 如果单位标记为 PvP，则返回 true 。
     */
    IsPvPFlagged():boolean

    /**
     * 如果单位是任务给予者，则返回 true 。
     */
    IsQuestGiver():boolean

    /**
     * 如果单位有根，则返回 true 。
     */
    IsRooted():boolean

    /**
     * 如果单位提供供应商、培训和拍卖等服务，则返回 true 。
     */
    IsServiceProvider():boolean

    /**
     * 如果单位是精神向导，则返回 true 。
     */
    IsSpiritGuide():boolean

    /**
     * 如果单位是精神治疗师，则返回真。
     */
    IsSpiritHealer():boolean

    /**
     * 如果单位是精神向导或精神治疗师，则返回真。
     */
    IsSpiritService():boolean

    /**
     * 如果单位站立，则返回真。
     */
    IsStandState():boolean

    /**
     * 如果Unit没有移动，则返回 true 。
     */
    IsStopped():boolean

    /**
     * 如果单位是战袍设计者，则返回真。
     */
    IsTabardDesigner():boolean

    /**
     * 如果Unit是出租车司机，则返回 true 。
     */
    IsTaxi():boolean

    /**
     * 如果Unit是训练师，则返回 true 。
     */
    IsTrainer():boolean

    /**
     * 如果单位在水下，则返回真。
     */
    IsUnderWater():boolean

    /**
     * 如果Unit是供应商，则返回 true 。
     */
    IsVendor():boolean

    /**
     * 使单位杀死目标单位
     * @param target 目标实体
     * @param durLoss 当为真时，目标的物品会损失耐久度。
     */
    Kill(target:Unit, durLoss:boolean)

    /**
     * 修改给定功率类型的Unit功率量。
     * @param amount 数值
     * @param type 类型
     */
    ModifyPower(amount:number, type:Powers)
    
    /**
     * 在给定的 displayID/modelID 上安装单元。
     */
    Mount(displayid:number)

    /**
     * 该单位将追逐目标
     * @param unit 追逐的目标 。
     * @param dist 距离开始追逐。 
     * @param angle 角度
     */
    MoveChase(unit:Unit,dist?:number,angle?:number)

    /**
     * 清除单位的移动
     * @param reset 干净的清除
     */    
    MoveClear(reset:boolean)

    /**
     * 该单位将移动困惑
     */
    MoveConfused()

    /**
     * 该单位的运动过期和清除运动
     * @param reset 清洁运动。
     */
    MoveExpire(reset:boolean)

    /**
     * 该单位会逃离
     * @param target 目标
     * @param time 时间
     */
    MoveFleeing(target:Unit, time?:number)

    /**
     * 该单位将跟随目标
     * @param target 目标
     * @param dist 距离
     * @param angle 角度
     */
    MoveFollow(target:Unit,dist:number,angle:number)

    /**
     * 该单位将移动到其设定的家庭位置
     */
    MoveHome()

    /**
     * 该单位将闲置
     */
    MoveIdle()

    /**
     * 使单位跳转到坐标
     * @param x number 
     * @param y number
     * @param z number
     * @param zSpeed 速度
     * @param maxHeight 最高点
     * @param id 唯一运动 ID。
     */

    MoveJump(x:number, y:number, z:number, zSpeed:number, maxHeight:number, id?:number)

    /**
     * 该单位将随机移动
     */
    MoveRandom(radius:number)

    /**
     * 停止单位的移动
     */
    MoveStop()

    /**
     * 该单位将移动到坐标
     * @param id 唯一航路点 ID。
     * @param x 坐标
     * @param y 坐标
     * @param z 坐标
     * @param genPath 如果为 true，则生成路径。 
     */
    MoveTo(id:number, x:number, y:number, z:number, genPath:boolean)

    /**
     * 使单位传送到同一地图内的给定坐标。
     * @param o 方向
     */
    NearTeleport( x:number, y:number, z:number, o:number)

    /**
     * 从单位中移除所有光环。
     */
    RemoveAllAuras()

    /**
     * 从单位中移除给定法术条目的光环。
     * @param spell 法术
     */
    RemoveAura(spell:number)

    /**
     * 向玩家发送聊天消息
     * @param type 聊天、窃窃私语等。
     * @param lang 语言
     * @param msg string信息
     * @param target 玩家
     */
    SendChatMessageToPlayer(type:number, lang:number, msg:string, target:Player)

    /**
     * 该单位将表达该消息
     * @param msg 消息为单位来表情。
     * @param receiver 接收消息的特定单位。
     * @param bossEmote 是boss表情。
     */    
    SendUnitEmote(msg:string, receiver:Unit, bossEmote:boolean)

    /**
     * 该单位会说消息
     * @param msg 消息
     * @param language 语言
     */
    SendUnitSay(msg:string, language:number)

    /**
     * 该单位将向玩家耳语消息
     * @param msg 消息为单位来表情。
     * @param lang 语言为单位说话。
     * @param receiver 接收消息的特定单位。
     * @param bossWhisper 是老板耳语。
     */
    SendUnitWhisper(msg:string, lang:number, receiver:Player, bossWhisper:boolean)

    /**
     * 该单位将大喊该消息
     * @param msg 信息
     * @param lang 语言
     */
    SendUnitYell(msg:string,lang:number)

    /**
     * 设置魅力 GUID
     * @param guid 魅力
     */
    SetCharmerGUID(guid:Uint64)

    /**
     * 混淆的单位，如果“假”规定，单位不再迷茫。
     */
    SetConfused(apply:boolean)

    /**
     * 设置创建者 GUID
     */
    SetCreatorGUID(guid:Uint64)

    /**
     * 设置Unit的 modelID。
     * @param displayId modelID。
     */
    SetDisplayId(displayId:number)

    /**
     * 套单位开或关的FFA标志。
     */
    SetFFA(apply:boolean)

    /**
     * 设置Unit的朝向/方向。
     * @param orientation 朝向数值
     */
    SetFacing(orientation:number)

    /**
     * 将Unit设置为面向给定WorldObject的方向。
     */
    SetFacingToObject(target:WorldObject)

    /**
     * 设置Unit的派系。
     */
    SetFaction(faction:number)

    /**
     * Fears the Unit，如果指定为“false”，则不再害怕该单位。
     */
    SetFeared(apply:boolean)

    /**
     * 设置Unit的健康状况。
     */
    SetHealth(health:number)

    /**
     * 设置Unit的健康状况。
     */
    SetLevel(health:number)

    /**
     * 设置Unit的最大生命值。
     */
    SetMaxHealth(maxHealth:number)
    /**
     * 为给定的功率类型设置Unit的最大功率量。
     * @param type power
     * @param maxPower Maxpower number
     */
    SetMaxPower(type:Powers, maxPower:number)
    /**
     * 在内部设置Unit的名称。
     */
    SetName(SetName:string)
    /**
     * 设置Unit的本机/默认 modelID。
     */
    SetNativeDisplayId(displayId:number)
    /**
     * 将Unit的所有者 GUID 设置为给定的 GUID。
     */
    SetOwnerGUID(guid:Uint64)
    /**
     * 设置宠物 GUID
     */
    SetPetGUID(guid:Uint64)
    /**
     * 为给定的功率类型设置Unit的功率量。
     * @param type powers
     * @param amount 数量
     */
    SetPower(amount:number, type:Powers)
    /**
     * 设置Unit的电源类型。
     * @param type 能量类型
     */
    SetPowerType(type:Powers)
    /**
     * 套单位的PvP的开启或关闭。
     * @param 套单位的PvP的开启或关闭。
     */
    SetPvP(apply:boolean)
    /**
     * 将Unit扎根到地面，如果指定了“false”，则取消Unit 的根。
     * @param apply 开关
     */
    SetRooted(apply:boolean)

    /**
     * 套单位开或关的避难所标志。
     * @param apply 开关
     */
    SetSanctuary(apply:boolean)
    /**
     * 设置Unit的鞘状态。
     * @param sheathState 状态
     */
    SetSheath(sheathState:SheathState)

    /**
     * 将给定 [UnitMoveType]的Unit速度设置为给定速率。如果强制，发送到客户端的数据包会强制进行视觉更改。
     * @param type 移动类型
     * @param rate 速率
     * @param forced boolean
     */
    SetSpeed(type:UnitMoveType,rate:boolean,forced:boolean)

    /**
     * 设置单元的站立状态
     * @param state number
     */
    SetStandState(state:number)

    /**
     * 切换 (Sets) Unit的水上行走
     * @param enable boolean
     */
    SetWaterWalk(enable:boolean)

    /**
     * 停止单位当前施法
     * @param spell 法术的进入。
     */
    StopSpellCast(spell:number)
    
}