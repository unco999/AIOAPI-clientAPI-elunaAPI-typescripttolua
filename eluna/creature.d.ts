
/**
 * @compileMembersOnly
 */
declare interface Creature extends Unit,Object,WorldObject{
    /**
     * 为生物添加战利品模式
     * @param lootMode 有效数字：从 0 到 65,535 的整数。
     */
    AddLootMode(lootMode:number)

    /**
     * 使生物攻击target。
     * @param target Unit
     */
    AttackStart(target:Unit)

    /**
     * 使该生物呼叫附近其他生物的战斗协助。
     */
    CallAssistance()

    /**
     * 使生物从友好战斗呼救生物内小号radius。
     * @param radius 范围
     */
    CallForHelp(radius:number)

    /**
     * 返回true如果怪物就可以开始攻击附近的敌方单位s和回报false，否则。
     */
    CanAggro()

    /**
     * 
     * @param friend 我们将协助的单位
     * @param enemy 如果我们协助,我们将攻击的单位friend
     * @param checkFaction 如果为true 则该生物必须friend与协助的派系相同
     */
    CanAssistTo(friend:Unit, enemy:Unit,checkFaction:boolean )

    /**
     * 返回true如果怪物完成任务的ID questID，并返回false否则。
     * @param questid 一个Quest的 ID 有效数字：从 0 到 4,294,967,295 的整数。
     */
    CanCompleteQuest(questid:number)

    /**
     * 可以飞
     */
    CanFly():boolean

    /**
     * 如果生物可以开始攻击指定目标，则返回真,对大多数目标不起作用
     * @param target 目标
     * @param force 强制生物攻击
     */
    CanStartAttack(target:Unit, force:boolean):boolean

    /**
     * 会游泳
     */
    CanSwim():boolean

    /**
     * 返回true如果生物可以在陆地上移动，并返回false否则。
     */
    CanWalk():boolean

    /**
     * 消灭这个生物
     * @param delay 单位在几秒钟之内消失
     */
    DespawnOrUnsummon(delay:number)

    /**
     * 让生物逃离战斗以获得附近友好生物的帮助。
     */
    FleeToGetAssistance()

    /**
     * 返回Creature的 AI 名称。核心使用它来分配生物的默认 AI 如果生物由 Eluna 编写脚本，则 AI 将被覆盖。
     */
    GetAIName()

    /**
     * 
     * @param targetType 威胁列表的排序方法
     * @param playerOnly 如果是 true 跳过不是player的目标
     * @param position 用作威胁列表的偏移量。如果targetType是随机的，用作从aggro顶部开始可供选择的玩家数量。
     * @param distance 有效数字：所有十进制数字。
     * @param aura 如果为正，则目标必须具有此光环。如果为负，则目标不得具有此光环。
     */
    GetAITarget(targetType:SelectAggroTarget, playerOnly:boolean, position:number, distance:number, aura:number)

    /**
     * 返回所有单元S IN的生物的威胁列表。
     */
    GetAITargets():Object

    /**
     * 返回此Creature威胁列表中的Unit数。
     */    
    GetAITargetsCount():number

    /**
     * 返回的仇恨范围内怪物的target。
     */
    GetAggroRange(target:Unit):number

    /**
     * 返回的有效范围仇恨生物的target 如果这小于配置文件中设置的最小仇恨范围，则将其用作仇恨范围。
     */
    GetAttackDistance(target:Unit):number

    /**
     * 返回生物死亡与其身体消失之间的延迟。
     */
    GetCorpseDelay():number
    
    /**
     * 返回生物的冷却时间spellID。
     * @param spellID 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetCreatureSpellCooldownDelay(spellID:number)
    
    /**
     * 返回Creature的当前航路点 ID 
     */
    GetCurrentWaypointId():number

    /**
     * 返回用作数据库中 ID的Creature的 guid
     */
    GetDBTableGUIDLow():number

    /**
     * 返回此Creature的默认移动类型。
     */
    GetDefaultMovementType():MovementGeneratorType

    /**
     * 返回生物在逃避战斗或重生时返回的位置。
     * @param x 坐标
     * @param y 坐标
     * @param z 坐标
     * @param o 旋转
     */
    GetHomePosition(x:number,y:number,z:number,o:number):number

    /**
     * 返回可以掠夺此Creature的Player。
     */
    GetLootRecipient():Player

    /**
     * 返回可以掠夺此Creature的Group。
     */
    GetLootRecipientGroup():Group

    /**
     * 返回Creature的 NPC 标志。这些用于控制NPC是否是供应商，是否可以修理物品，是否可以提供任务等。
     */
    GetNPCFlags():NPCFlags

    /**
     * 返回此生物被杀死后重生所需的时间。这个值通常不会在Creature的生命周期内改变，但可以通过Creature:SetRespawnDelay修改。
     */
    GetRespawnDelay():number

    /**
     * 返回Creature的脚本 ID。内核为每个 C++ 脚本名称分配了一个唯一 ID。这将返回此Creature脚本名称的 ID 。
     */
    GetScriptId():number

    /**
     * 返回Creature的脚本名称。核心使用它来将 C++ 脚本应用于 Creature。Eluna 不使用它。Eluna 将覆盖 AI 脚本。
     */
    GetScriptName():string

    /**
     * 返回Creature的盾牌方块值。
     */
    GetShieldBlockValue():number

    /**
     * 返回允许生物从其重生点徘徊的半径。
     */
    GetWanderRadius():number

    /**
     * 返回Creature的当前航路点路径 ID 。
     */
    GetWaypointPath():number

    /**
     * 返回true如果怪物不能施放spellId由于类别冷却时间，并返回false否则。
     * @param 法术的 ID 
     */
    HasCategoryCooldown(spellId:number):boolean

    /**
     * 如果Creature具有指定的战利品模式，则返回 true
     */
    HasLootMode(lootmode:number):boolean

    /**
     * 返回true如果怪物会给它的战利品的玩家或组，并返回false否则。
     */
    HasLootRecipient():boolean

    /**
     * 返回true如果怪物开始的任务 questId，并返回false否则。
     */
    HasQuest(questId:number):boolean

    /**
     * 返回true如果生物已经搜索到了战斗的援助已经，并返回false否则。
     */
    HasSearchedAssistance():boolean

    /**
     * 返回true如果生物可投spellId时头脑受控，并返回false否则。
     */
    HasSpell(spellId:number):boolean

    /**
     * 返回true如果怪物有spellId冷却时间，并返回false否则。
     * @param spellId 法术的 ID 有效数字：从 0 到 4,294,967,295 的整数。
     */
    HasSpellCooldown(spellId:number):boolean

    /**
     * 返回true如果生物是一个平民，并返回false否则。
     */    
    IsCivilian():boolean

    /**
     * 如果生物损坏到足以抢劫，则返回真
     */
    IsDamageEnoughForLootingAndReward():boolean

    /**
     * 返回true如果怪物的等级是精英或稀有精英，并返回false否则。
     */
    IsElite():boolean

    /**
     * 返回true如果生物是一个城市的守卫，并返回false否则。
     */
    IsGuard():boolean

    /**
     * 返回true如果生物是从实战返回其产卵的位置，并返回false否则。
     */
    IsInEvadeMode():boolean

    /**
     * 返回true如果怪物是玩家阵营的领导者，并返回false否则。
     */
    IsRacialLeader():boolean

    /**
     * 返回true如果怪物设定杀害，当不给声誉，并返回false否则。
     */
    IsReputationGainDisabled():boolean

    /**
     * 返回true如果怪物会给它的战利品来player，并返回false否则。
     */
    IsTappedBy():boolean

    /**
     * 返回true如果怪物可以有针对性的攻击，并返回false否则。
     * @param mustBeDead 如果true，仅true当生物也死了时才返回。否则，它一定是活着的..
     */
    IsTargetableForAttack(mustBeDead:boolean):boolean
    
    /**
     * 返回true如果生物是一种无形的触发，并返回false否则。
     */
    IsTrigger(): boolean

    /**
     * 返回true如果怪物的等级是老板，并返回false否则。
     */
    IsWorldBoss():boolean

    /**
     * 使生物开始遵循其航路点路径。
     */
    MoveWaypoint()

    /**
     * 移除这个生物的尸体。
     */
    RemoveCorpse()

    /**
     * 从生物中删除指定的战利品模式
     * @param lootMode 有效数字：从 0 到 65,535 的整数。
     */
    RemoveLootMode(lootMode:number)

    /**
     * 将Creature的战利品模式重置为默认值
     */
    ResetLootMode()

    /**
     * 重生这个生物。
     */
    Respawn()

    /**
     * 将生物保存在数据库中。
     */
    SaveToDB()

    /**
     * 让生物尝试寻找新目标。这应该在生物的 AI 的每个更新周期中调用。
     */
    SelectVictim()

    /**
     * 设置生物是否可以被激怒。
     */
    SetAggroEnabled(allow:boolean)

    /**
     * 将生物的死亡状态设置为deathState。
     */
    SetDeathState(deathState:DeathState)

    /**
     * 设置Creature的默认移动类型。
     */
    SetDefaultMovementType(type:MovementGeneratorType)

    /**
     * 如果启用，使生物能够飞行。
     */
    SetDisableGravity(disable:boolean)

    /**
     * 设置生物是否提供声望。
     * @param disable true禁用声誉，false启用。
     */
    SetDisableReputationGain(disable:boolean)

    /**
     * 将给定的Item装备到Unit。使用 0 移除装备的物品
     * @param main_hand 主手Item的条目。
     * @param off_hand 副手Item的条目。
     * @param Ranged Item的条目。
     */
    SetEquipmentSlots(main_hand:number, off_hand:number, ranged:number)

    /**
     * 设置生物在逃避战斗或重生时返回的位置。
     * @param x 有效数字：所有十进制数字。
     * @param y 有效数字：所有十进制数字。
     * @param z 有效数字：所有十进制数字。
     * @param o 有效数字：所有十进制数字。
     */
    SetHomePosition(x:number, y:number, z:number, o:number)

    /**
     * 设置生物是否悬停/悬浮。
     */
    SetHover(enable:boolean)

    /**
     * 将Creature设置为与地牢实例中的所有Player进行战斗。这被突袭首领用来防止玩家在遭遇战开始后使用非战斗行动。
     */
    SetInCombatWithZone()

    /**
     * 将生物的 NPC 标志设置为flags。
     */
    SetNPCFlags(flags:NPCFlags)

    /**
     * 设置生物是否可以在战斗中呼叫附近的敌人寻求帮助。
     * @param enable true禁用呼叫帮助，false启用。
     */
    SetNoCallAssistance(enable:boolean)

    /**
     * 设置生物是否可以在低健康状态下寻求帮助。
     * @param enable true禁用搜索，false允许。
     */
    SetNoSearchAssistance(enable:boolean)

    /**
     * 设置生物被杀死后重生所需的时间。
     * @param delay 延迟，以秒为单位。
     */
    SetRespawnDelay(delay:number)

    /**
     * 设置生物当前是走路还是跑步。
     * @param enable true启用步行，false用于跑步。
     */
    SetWalk(enable:boolean)

    /**
     * 设置生物可以从它的出生点徘徊的距离。
     */
    SetWanderRadius(distance:number)

    /**
     * 将生物转化为另一个生物。
     * @param entry 要转换为的生物 ID。
     * @param dataGUIDLow 使用此生物的模型和设备而不是默认值。
     */
    UpdateEntry(entry:number,dataGUIDLow?:number)
}