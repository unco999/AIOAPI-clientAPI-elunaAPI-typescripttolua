declare interface Player extends Object,WorldObject,Unit{
    /**
     * 将组合点添加到玩家
     * @param target Unit实例
     * @param count 数量
     */
    AddComboPoints(target:Unit, count:number)

    /**
     * 将给定数量的指定项目条目添加到播放器。
     * @param entry 要添加的项目的条目 有效数字：从 0 到 4,294,967,295 的整数。
     * @param itemCount 要添加的项目数量 有效数字：从 0 到 4,294,967,295 的整数。
     */
    AddItem(entry:number, itemCount?:number)
    
    AddLifetimeKills(entry:number)
    /**
     * 尝试为Player添加给定的任务条目。
     * @param entry 任务入口 有效数字：从 0 到 4,294,967,295 的整数。
     */
    AddQuest(entry:number)
    /**
     * 将玩家的所有技能提升到指定的数量
     * @param skillStep 有效数字：从 0 到 4,294,967,295 的整数。
     */
    AdvanceAllSkills(skillStep:number)
    /**
     * 将玩家的特定技能提升到指定的数量
     * @param skillId 有效数字：从 0 到 4,294,967,295 的整数。
     * @param skillStep 有效数字：从 0 到 4,294,967,295 的整数。
     */
    AdvanceSkill(skillId:number, skillStep:number)

    /**
     * 将玩家的所有武器技能提升到最大可用数量
     */
    AdvanceSkillsToMax()

    /**
     * 完成任务，如果一个任务区域进行了探讨，或者完成任务
     * @param quest 进入一个任务 有效数字：从 0 到 4,294,967,295 的整数。
     */
    AreaExploredOrEventHappens(quest:number)

    /**
     * 如果玩家可以阻止传入的攻击，则返回“true”，否则返回“ false”。
     */
    CanBlock():boolean

    /**
     * 如果玩家满足完成任务条目的所有要求，则返回“true” 。
     * @param entry 有效数字：从 0 到 4,294,967,295 的整数。
     */
    CanCompleteQuest(entry:number):boolean

    /**
     * 如果玩家可以将给定的物品或物品条目装备到给定的插槽，则返回 true，否则返回false。
     * @param item 物品实例
     * @param slot 要测试的设备插槽。
     */
    CanEquipItem(item:Item, slot:number):boolean
    /**
     * 如果玩家可以将给定的物品或物品条目装备到给定的插槽，则返回 true，否则返回false。
     * @param entry 物品入口
     * @param slot 要测试的设备插槽。
     */
    CanEquipItem(entry:number, slot:number):boolean

    /**
     * 如果玩家可以飞行，则返回“真”，否则返回“假”。
     */
    CanFly():boolean

    /**
     * 如果玩家可以招架传入的攻击，则返回“true”，否则返回“ false”。
     */
    CanParry():boolean

    /**
     * 如果玩家可以共享ID 指定的任务，则返回“true”，否则返回“ false”。
     * @param entryId 有效数字：从 0 到 4,294,967,295 的整数。
     */
    CanShareQuest(entryId:number)

    /**
     * 如果玩家当前可以通过聊天进行交流，则返回“true”，否则返回“ false”。
     */
    CanSpeak():boolean

    /**
     * 如果玩家可以使用 Titan Grip，则返回“true”，否则返回“ false”。
     */
    CanTitanGrip():boolean

    /**
     * 如果玩家有权从当前组中取消邀请其他人，则返回“true”，否则返回“ false”。
     */
    CanUninviteFromGroup():boolean

    /**
     * 如果玩家可以使用指定的项目或项目条目，则返回“true”，否则返回“ false”。
     * @param item 物品实例
     */
    CanUseItem(item:Item)

    /**
     * 如果玩家可以使用指定的项目或项目条目，则返回“true”，否则返回“ false”。
     * @param entry 物品入口
     */
    CanUseItem(entry:number)

    /**
     * 清除玩家的连击点数
     */
    ClearComboPoints()

    /**
     * 清除所有玩家的每周荣誉状态
     */
    ClearHonorInfo()

    /**
     * 为玩家完成给定的任务条目并尝试满足所有任务要求。玩家应该有完成它的任务。
     * @param entry 任务入口 有效数字：从 0 到 4,294,967,295 的整数。
     */
    CompleteQuest(entry:number)
    /**
     * 创建玩家的尸体
     */
    CreateCorpse()
    /**
     * 损坏物品耐久度
     * @param item 物品实例
     * @param percent 有效数字：所有十进制数字
     */
    DurabilityLoss(item:Item, percent:number)

    /**
     * 损坏所有装备的物品。如果库存为真，则损坏Item s in bag
     * @param percent 有效数字：所有十进制数字
     */
    DurabilityLossAll(percent:number)
    /**
     * 损坏所有装备的物品。如果库存为真，则损坏Item s in bag
     * @param percent 有效数字：所有十进制数字
     * @param inventory boolean
     */
    DurabilityLossAll(percent:number,inventory:boolean)

    /**
     * 为指定槽位中的项目设置耐久性损失  
     * @param slot 有效数字：从 -2,147,483,647 到 2,147,483,647 的整数。
     */
    DurabilityPointLossForEquipSlot(slot:number)
    /**
     * 设置指定物品的耐久性损失
     * @param item 物品实例
     * @param points 有效数字：从 -2,147,483,647 到 2,147,483,647 的整数。
     */
    DurabilityPointsLoss(item:Item, points:number)

    /**
     * 所有集耐用性亏损项目搭载 如果库存为真，则为Item s in bag设置耐久性损失
     * @param points 有效数字：从 -2,147,483,647 到 2,147,483,647 的整数。
     */
    DurabilityPointsLossAll(points:number)

    /**
    * 所有集耐用性亏损项目搭载 如果库存为真，则为Item s in bag设置耐久性损失
    * @param points 有效数字：从 -2,147,483,647 到 2,147,483,647 的整数。
    * @param inventory boolean 
    */
    DurabilityPointsLossAll(points:number,inventory:boolean)
    /**
     * 在指定位置修理物品。退货总维修费用
     * @param position 有效数字：从 0 到 65,535 的整数。
     * @param cost 费用开关
     * @param discountMod 所有十进制数值
     * @param guildBank 见说明
     */
    DurabilityRepair(position:number, cost:boolean, discountMod:number, guildBank:boolean)
    
    /**
     * 修复所有Item s。退货总维修费用
     * @param cost 费用开关
     */
    DurabilityRepairAll(cost:boolean)
        
    /**
     * 修复所有Item s。退货总维修费用
     * @param cost 费用开关
     * @param discountMod 所有十进制数值
     */
    DurabilityRepairAll(cosT:boolean,discountMod:number)
        
    /**
     * 修复所有Item s。退货总维修费用
     * @param cost 费用开关
     * @param discountMod 所有十进制数值
     * @param guildBank 见说明
     */
    DurabilityRepairAll(cosT:boolean,discountMod:number,guildBank:boolean)

    /**
     * 将给定的物品或物品条目装备到给定的插槽。返回已装备的物品或为零。
     * @param item 要装备的物品。
     * @param slot 装备物品的装备槽位可以是[EquipmentSlots]或[InventorySlots]
     */
    EquipItem(item:Item,slot:EquipmentSlots | InventorySlots)
    
    /**
     * 将给定的物品或物品条目装备到给定的插槽。返回已装备的物品或为零。
     * @param entry 有效数字：从 0 到 4,294,967,295 的整数。
     * @param slot 装备物品的装备槽位可以是[EquipmentSlots]或[InventorySlots]
     */
    EquipItem(entry:number,slot:EquipmentSlots | InventorySlots)

    /**
     * 为Player设置给定的Quest条目失败。
     * @param entry 进入一个任务 有效数字：从 0 到 4,294,967,295 的整数。
     */

    FailQuest(entry:number)

    /**
     * 返回玩家的账户 ID
     */
    GetAccountId():number

    /**
     * 返回玩家的账户名
     */
    GetAccountName():string

    /**
     * 返回玩家的活动规范 ID
     */
    GetActiveSpec():number

    /**
     * 返回玩家当前的竞技场点数
     */
    GetArenaPoints():number

    /**
     * 返回基础技能值
     * @param skill 技能 效数字：从 0 到 4,294,967,295 的整数。
     */
    GetBaseSkillValue(skill:number):number

    /**
     * 返回玩家当前的战场ID
     */
    GetBattlegroundId():number

    /**
     * 返回玩家当前的战场类型 ID
     */
    GetBattlegroundTypeId():number

    /**
     * 返回玩家当前被标记为冠军的派系 ID
     * @returns championingFaction
     */
    GetChampioningFaction():number

    /**
     * 返回活动的 GM 聊天标签
     * @returns tag 
    */
    GetChatTag():number

    /**
     * 返回玩家的铜币数量
     * @returns coinage 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetCoinage():number

    /**
     * 返回Player的连击点数
     * @returns comboPoints 有效数字：从 0 到 255 的整数。
     */
    GetComboPoints():number 

    /**
     * 返回单位目标组合点数已开启
     * @returns 目标单位实体
     */
    GetComboTarget():Unit

    /**
     * 返回玩家的尸体对象
     * @returns 尸体实体
     */
    GetCorpse():Corpse

    /**
     * 返回Player的数据库区域设置索引
     * @returns localeIndex 有效数字：从 -2,147,483,647 到 2,147,483,647 的整数。
     */
    GetDbLocaleIndex():number

    /**
     * 返回玩家的游戏客户端语言环境
     * @returns locale
     */
    GetDbcLocale():LocaleConstant

    /**
     * 返回突袭或地牢难度
     * @param isRaid 参数仅是 TrinityCore。
     * @returns difficulty 从-2,147,483,647 到 2,147,483,647 的整数。
     */
    GetDifficulty(isRaid:boolean):number

    /**
     * 返回玩家当前的中毒程度
     * @returns drunkValue 有效数字：从 0 到 65,535 的整数。
     */
    GetDrunkValue():number

    /**
     * 通过指定的齿轮槽返回玩家的物品对象
     * @param slot 物品槽ID
     * @returns 物品实体
     */
    GetEquippedItemBySlot(slot:number):Item
    
    /**
     * 返回玩家的免费天赋点数
     * @returns freeTalentPointAmt 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetFreeTalentPoints():number

    /**
     * 返回玩家的GM等级
     * @returns gmRank
     */
    GetGMRank():AccountTypes

    /**
     * 返回的数据库文本ID WorldObject为的八卦标题文本播放器
     * @returns textId
     */
    GetGossipTextId():number

    /**
     * 返回Player的Group对象
     * @returns group对象
     */
    GetGroup():Group

    /**
     * 组邀请
     * @returns group对象
     */
    GetGroupInvite():Group

    /**
     * 返回公会
     * @returns 公会实体
     */
    GetGuild():Guild
    
    /**
     * 返回玩家当前的公会ID
     * @returns guildId 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetGuildId():number

    /**
     * 返回玩家当前公会的名称
     * @returns guildName
     */
    GetGuildName():string

    /**
     * 返回玩家的公会等级
     * @returns guildRank 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetGuildRank():number

    /**
     * 从体力中返回健康加成
     * @returns bonus 有效数字：所有十进制数字。
     */
    GetHealthBonusFromStamina():number

    /**
     * 返回上周荣誉
     * @returns standingPos 有效数字：从 -2,147,483,647 到 2,147,483,647 的整数。
     */
    GetHonorLastWeekStandingPos():number

    /**
     * 返回玩家当前的荣誉点数
     * @returns honorPoints 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetHonorPoints():number

    /**
     * 返回玩家击杀
     * @param honorable 如果受害者是光荣的。
     * @returns kills 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetHonorStoredKills(honorable:boolean):number
    /**
     * 返回玩家在游戏中花费的时间
     * @returns inGameTime 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetInGameTime():number

    /**
     * 通过输入从播放器返回一个项目,该物品可以装在袋子里或银行里。
     * @param entryid 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetItemByEntry(entryid:number):Item

    /**
     * 通过 guid 从玩家返回一个Item。
     * 该物品可以装在袋子里或银行里。
     * @param guid 一个物品指南。
     */
    GetItemByGUID(guid:Uint64):Item

    /**
     * 返回给定插槽上给定包中的项目。
     * 可能和最常用的组合：
     * 袋 = 255 插槽 0-18 设备插槽 19-22 装备袋插槽 插槽 23-38 背包
     * 插槽 39-66 组主插槽 插槽 67-74 个银行包插槽 插槽 86-117 钥匙圈
     * 袋 = 19-22 装备包的插槽 0-35 袋 = 67-74 0-35 槽用于存放银行袋
     * @param bag 物品所在的袋子，您可以使用Item:GetBagSlot获得它。从 0 到 255 的整数。
     * @param slot 物品在包内的插槽，您可以使用Item:GetSlot获得它。有效数字：从 0 到 255 的整数。
     */
    GetItemByPos(bag:number,slot:number):Item

    /**
     * 返回玩家拥有的指定项目的数量。
     * @param entry 条目的条目 有效数字：从 0 到 4,294,967,295 的整数。
     * @returns itemamount 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetItemCount(entry:number):number

    /**
     * 
     * @param entry 条目的条目 有效数字：从 0 到 4,294,967,295 的整数。
     * @param checkinBank boolean 如果为真，还计算玩家银行中的项目。
     * @returns itemamount 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetItemCount(entry:number,checkinBank:boolean):number

    /**
     * 以 MS 为单位返回播放器的当前延迟
     * @returns latency 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetLatency():number

    /**
     * 返回玩家在当前等级玩的时间
     * @returns currLevelPlayTime 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetLevelPlayedTime():number

    /**
     * 返回玩家一生的荣誉击杀
     * @returns lifeTimeKils 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetLifetimeKills():number

    /**
     * 从智力数量返回法力奖励
     * @returns bonus 有效数字：所有十进制数字。
     */
    GetManaBonusFromIntellect():number

    /**
     * 返回指定技能的最大值
     * @returns val 有效数字：从 0 到 65,535 的整数。
     */
    GetMaxSkillValue():number

    /**
     * 返回一个随机团队成员玩家的指定半径内的对象玩家
     * @param radius radius 有效数字：所有十进制数字
     */
    GetNextRandomRaidMember(radius:number):Player

    /**
     * 返回Player的原始Group对象
     * @returns group 实例
     */
    GetOriginalGroup():Group

    /**
     * 返回Player的原始子组
     * @return subGroup 有效数字：从 0 到 255 的整数。
     */
    GetOriginalSubGroup():number

    /**
     * 返回玩家的正常阶段而不是可能包含 GM 阶段的实际阶段
     * @returns phasemask 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetPhaseMaskForSpawn():number

    /**
     * 返回玩家的 IP 地址
     * @returns IP地址 string
     */
    GetPlayerIP():string

    /**
     * 返回没有加成的指定技能的最大值'
     * @param skill 有效数字：从 0 到 4,294,967,295 的整数。
     * @returns  pureVal 有效数字：从 0 到 65,535 的整数。
     */
    GetPureMaxSkillValue(skill:number):number
    
    /**
     * 
     * @param skill 有效数字：从 0 到 4,294,967,295 的整数。
     * @returns pureVal 有效数字：从 0 到 65,535 的整数。
     */
    GetPureSkillValue(skill:number):number

    /**
     * 返回的任务等级玩家小号任务指定的对象
     * @param questId 有效数字：从 0 到 4,294,967,295 的整数。
     * @returns questRewardStatus 任务状态
     */
    GetQuestLevel(questId:number):QuestStatus

    /**
     * 返回“真”，如果玩家小号任务指定的条目ID已经被奖励，“假”，否则。
     * @param questId 有效数字：从 0 到 4,294,967,295 的整数。
     * @returns questRewardStatus 任务已奖励boolean
     */
    GetQuestRewardStatus(questId:number):boolean

    /**
     * 返回的状态玩家小号任务指定的条目号
     * @param questId 有效数字：从 0 到 4,294,967,295 的整数。
     * @returns questStatus 任务状态
     */
    GetQuestStatus(questId:number):QuestStatus

    /**
     * 返回排名积分
     * @returns rankPoints 有效数字：所有十进制数字。
     */
    GetRankPoints():number

    /**
     * 返回玩家在指定派系中的声望值
     * @param faction 有效数字：从 0 到 4,294,967,295 的整数。
     * @returns reputationAmt 有效数字：从 -2,147,483,647 到 2,147,483,647 的整数。
     */
    GetReputation(faction:number):number

    /**
     * 返回玩家指定派系的声望等级
     * @param faction 有效数字：从 0 到 4,294,967,295 的整数。
     * @returns rank enum
     */
    GetReputationRank(faction:number):ReputationRank

    /**
     * 返回任务所需的生物或游戏对象计数
     * @param quest 进入一个任务 有效数字：从 0 到 4,294,967,295 的整数。
     * @param entry 输入所需的生物。 有效数字：从 -2,147,483,647 到 2,147,483,647 的整数。
     * @returns count 有效数字：从 0 到 65,535 的整数。
     */
    GetReqKillOrCastCurrentCount(quest:number,entry:number):number

    /**
     * 返回玩家当前的休息奖金
     * @returns restBonus 有效数字：所有十进制数字。
     */
    GetRestBonus():number

    /**
     * 返回Player当前选中的Unit对象
     * @returns unit实体
     */
    GetSelection():Unit

    /**
     * 返回玩家当前的盾牌方块值
     * @returns blockValue 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetShieldBlockValue():number

    /**
     * 返回技能永久加成值
     * @param skill 有效数字：从 0 到 4,294,967,295 的整数。
     * @param bonusVal 有效数字：从 -32,767 到 32,767 的整数。
     */
    GetSkillPermBonusValue(skill:number, bonusVal:number):void

    /**
     * 返回技能临时加成值
     * @param skill 有效数字：从 0 到 4,294,967,295 的整数。
     * @param bonusVal 有效数字：从 -32,767 到 32,767 的整数。
     */
    GetSkillTempBonusValue(skill:number, bonusVal:number):void

    /**
     * 返回技能值
     * @param skill 有效数字：从 0 到 4,294,967,295 的整数。
     * @returns val 有效数字：从 0 到 65,535 的整数
     */
    GetSkillValue(skill:number):number

    /**
     * 返回玩家当前拥有的可用规格数量
     * @returns specCount 有效数字：从 0 到 255 的整数。
     */
    GetSpecsCount():number

    /**
     * 通过指定的法术ID返回玩家的冷却延迟
     * @param spellId:有效数字：从 0 到 4,294,967,295 的整数。
     * @returns spellCooldownDelay 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetSpellCooldownDelay(spellId:number):number

    /**
     * 返回Player的当前子组
     * @returns subGroup 有效数字：从 0 到 255 的整数。
     */
    GetSubGroup():number

    /**
     * 返回玩家的团队
     * @returns team enum
     */
    GetTeam():TeamId

    /**
     * 返回玩家的总游玩时间
     * @returns totalPlayTime 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetTotalPlayedTime():number

    /**
     * 返回休息经验奖励
     * @param 有效数字：从 0 到 4,294,967,295 的整数。
     * @returns xpBonus 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetXPRestBonus(xp:number):number

    /**
     * 给玩家经验
     */
    GiveXP(xp:number)

    /**
    * 给玩家经验
    * @param xp 经验值
    * @param victim 单位
    */
    GiveXP(xp:number,victim:Unit)

    /**
     * 将菜单项目添加到Player的Gossip菜单中，用于给定WorldObject可以提供给玩家的任务。
     * @param source 一个有任务的任务给予者。
     */
    GossipAddQuests(source:WorldObject)

    /**
     * 清除玩家当前的 Gossip菜单项目列表
     * 注意:这是需要的，当你显示一个菜单没有使用 Gossip菜单hello或选择钩子自动这样做。  
     * 通常这是需要当使用player是一个Gossip菜单的发送者。  
     */
    GossipClearMenu()

    /**
     * 关闭玩家当前打开的Gossip菜单。
     */
    GossipComplete()

    /**
     * 增加显示的八卦菜单的新项目播放器到下一次调用播放器：GossipSendMenu。
     * sender 和 intid 是直接传递给八卦选择处理程序的数字。在内部，它们部分用于数据库八卦处理。
     * 代码指定是否显示要插入文本的框。玩家插入的文本被传递到八卦选择处理程序。
     * money 指定玩家点击该选项所需的金额。如果玩家没有足够的钱，则会显示错误消息。
     * 请注意，金额仅在客户端检查，也不会从播放器中删除。在采取行动之前，您需要再次检查您的代码。
     * @param icon 指定使用过的图标的数字 有效数字：从 0 到 4,294,967,295 的整数。
     * @param msg Gossip项目上的标签。
     * @param sender 传递给Gossip处理程序的数字。
     * @param intid 传递给Gossip处理程序的数字。
     */
    GossipMenuAddItem(icon:number, msg:string, sender:number, intid:number)
     /**
     * 增加显示的八卦菜单的新项目播放器到下一次调用播放器：GossipSendMenu。
     * sender 和 intid 是直接传递给八卦选择处理程序的数字。在内部，它们部分用于数据库八卦处理。
     * 代码指定是否显示要插入文本的框。玩家插入的文本被传递到八卦选择处理程序。
     * money 指定玩家点击该选项所需的金额。如果玩家没有足够的钱，则会显示错误消息。
     * 请注意，金额仅在客户端检查，也不会从播放器中删除。在采取行动之前，您需要再次检查您的代码。
     * @param icon 指定使用过的图标的数字 有效数字：从 0 到 4,294,967,295 的整数。
     * @param msg Gossip项目上的标签。
     * @param sender 传递给Gossip处理程序的数字。
     * @param intid 传递给Gossip处理程序的数字。
     * @param code 如果为 true，则在单击时显示文本输入。
     */
    GossipMenuAddItem(icon:number, msg:string, sender:number, intid:number, code:boolean)
     /**
     * 增加显示的八卦菜单的新项目播放器到下一次调用播放器：GossipSendMenu。
     * sender 和 intid 是直接传递给八卦选择处理程序的数字。在内部，它们部分用于数据库八卦处理。
     * 代码指定是否显示要插入文本的框。玩家插入的文本被传递到八卦选择处理程序。
     * money 指定玩家点击该选项所需的金额。如果玩家没有足够的钱，则会显示错误消息。
     * 请注意，金额仅在客户端检查，也不会从播放器中删除。在采取行动之前，您需要再次检查您的代码。
     * @param icon 指定使用过的图标的数字 有效数字：从 0 到 4,294,967,295 的整数。
     * @param msg Gossip项目上的标签。
     * @param sender 传递给Gossip处理程序的数字。
     * @param intid 传递给Gossip处理程序的数字。
     * @param code 如果为 true，则在单击时显示文本输入。
     * @param popup 如果非空字符串，则在单击时显示具有给定文本的弹出窗口。
     */
    GossipMenuAddItem(icon:number, msg:string, sender:number, intid:number, code:boolean, popup:string)
     /**
     * 增加显示的八卦菜单的新项目播放器到下一次调用播放器：GossipSendMenu。
     * sender 和 intid 是直接传递给八卦选择处理程序的数字。在内部，它们部分用于数据库八卦处理。
     * 代码指定是否显示要插入文本的框。玩家插入的文本被传递到八卦选择处理程序。
     * money 指定玩家点击该选项所需的金额。如果玩家没有足够的钱，则会显示错误消息。
     * 请注意，金额仅在客户端检查，也不会从播放器中删除。在采取行动之前，您需要再次检查您的代码。
     * @param icon 指定使用过的图标的数字 有效数字：从 0 到 4,294,967,295 的整数。
     * @param msg Gossip项目上的标签。
     * @param sender 传递给Gossip处理程序的数字。
     * @param intid 传递给Gossip处理程序的数字。
     * @param code 如果为 true，则在单击时显示文本输入。
     * @param popup 如果非空字符串，则在单击时显示具有给定文本的弹出窗口。
     * @param money 需要铜钱 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GossipMenuAddItem(icon:number, msg:string, sender:number, intid:number, code:boolean, popup:string, money:number)


    /**
     * 将玩家的当前八卦项目作为八卦菜单发送给他，标题文本来自给定的 textId。
     * 如果发件人是播放器，则 menu_id 是必需的，否则它不用于任何事情。menu_id 是用于触发为玩家注册的 OnGossipSelect 的 ID。见全局：RegisterPlayerGossipEvent
     * 另见：Player:GossipMenuAddItem、Player:GossipAddQuests、Player:GossipComplete、Player:GossipClearMenu
     * @param npc_text npc_text 数据库表中标题文本的条目 ID，常用默认值为 100。有效数字：从 0 到 4,294,967,295 的整数。
     * @param sender 作为发送八卦菜单来源的对象。
     */
    GossipSendMenu(npc_text:number, sender:Object)

    /**
     * 将玩家的当前八卦项目作为八卦菜单发送给他，标题文本来自给定的 textId。
     * 如果发件人是播放器，则 menu_id 是必需的，否则它不用于任何事情。menu_id 是用于触发为玩家注册的 OnGossipSelect 的 ID。见全局：RegisterPlayerGossipEvent
     * 另见：Player:GossipMenuAddItem、Player:GossipAddQuests、Player:GossipComplete、Player:GossipClearMenu
     * @param npc_text npc_text 数据库表中标题文本的条目 ID，常用默认值为 100。有效数字：从 0 到 4,294,967,295 的整数。
     * @param sender 作为发送八卦菜单来源的对象。
     * @param menu_id 如果发件人是播放器，则 menu_id 是必需的 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GossipSendMenu(npc_text:number, sender:Object,menu_id:number)

    /**
     * 将 POI 发送到您地图上的位置
     * @param x 有效数字：所有十进制数字。
     * @param y 有效数字：所有十进制数字。
     * @param icon 要显示的地图图标。有效数字：从 0 到 4,294,967,295 的整数。
     * @param flags 有效数字：从 0 到 4,294,967,295 的整数。
     * @param data 有效数字：从 0 到 4,294,967,295 的整数。
     * @param iconText 见方法说明。
     */
    GossipSendPOI(x:number, y:number, icon:number, flags:number, data:number, iconText:string)

    /**
     * 创建一个以创建者Player作为领导者的新组。
     * 
     */
    GroupCreate():Group

    /**
     * 如果在一个小组中完成一个任务
     * @param quest 进入一个任务 有效数字：从 0 到 4,294,967,295 的整数。
     * @param obj WorldObject obj
     */
    GroupEventHappens(quest:number,obj:WorldObject)

    /**
     * 返回组邀请
     * @returns group实例
     */
    GroupInvite():Group

    /**
     * 如果玩家完成了指定的成就，则返回“true”，否则返回“ false”。
     * @param achievementId 有效数字：从 0 到 4,294,967,295 的整数。
     */
    HasAchieved(achievementId:number):boolean

    /**
     * 如果Player已指定登录标志，则返回 true
     * @param flag 从 0 到 4,294,967,295 的整数。
     */
    HasAtLoginFlag(flag:number)

    /**
     * 
     * @param itemId 条目的id 有效数字：从 0 到 4,294,967,295 的整数。
     */
    HasItem(itemId:number):boolean
    /**
     * 
     * @param itemId 条目的id 有效数字：从 0 到 4,294,967,295 的整数。
     * @param count 玩家需要的物品数量。有效数字：从 0 到 4,294,967,295 的整数。
     */
    HasItem(itemId:number,count:number):boolean
    /**
     * 
     * @param itemId 条目的id 有效数字：从 0 到 4,294,967,295 的整数。
     * @param count 玩家需要的物品数量。有效数字：从 0 到 4,294,967,295 的整数。
     * @param check_bank check_bank (false) 确定物品是否可以在玩家库中。
     */
    HasItem(itemId:number,count:number,check_bank:number):boolean

    /**
     * 如果玩家有特定 ID的活动任务，则返回“true”，否则返回“ false”。
     * @param questId questId 有效数字：从 0 到 4,294,967,295 的整数。
     */
    HasQuest(questId:number):boolean

    /**
     * 如果玩家有寻找游戏对象的任务，则返回真
     * @param entry 一个GameObject 的入口 有效数字：从 -2,147,483,647 到 2,147,483,647 的整数。
     */
    HasQuestForGO(entry:number):boolean

    /**
     * 如果玩家对指定的项目条目有要求，则返回“true”，否则返回“ false”。
     * @param entry 条目的条目 有效数字：从 0 到 4,294,967,295 的整数。
     */
    HasQuestForItem(entry:number):boolean

    /**
     * 如果玩家拥有特定 ID 的技能，则返回“true”，否则返回“ false”。
     * @param skill 有效数字：从 0 到 4,294,967,295 的整数。
     */    
    HasSkill(skill:number):boolean

    /**
     * 如果玩家具有特定 ID的法术，则返回“真”，否则返回“假”。
     * @param spellId spellId 有效数字：从 0 到 4,294,967,295 的整数。
     */
    HasSpell(spellId:number):boolean

    /**
     * 如果ID 指定的法术当前处于Player 的冷却时间，则返回 '​​true'，否则返回 ' false'。
     * @param spellId 有效数字：从 0 到 4,294,967,295 的整数。
     */
    HasSpellCooldown(spellId:number):boolean

    /**
     * 如果玩家在指定的天赋树中拥有 ID 的天赋，则返回“true”，否则返回“ false”。
     * @param talentId 要检查的人才 ID有效数字：从 0 到 4,294,967,295 的整数。
     * @param spec 指定天赋树 有效数字：从 0 到 255 的整数。
     */
    HasTalent(talentId:number, spec:number):boolean

    /**
     * 如果玩家具有特定 ID 的标题，则返回“真”，否则返回“假”。
     * @param talentId titleID 有效数字：从 0 到 4,294,967,295 的整数。
     */
    HasTitle(talentId:number):boolean

    /**
     * 如果玩家当前在竞技场中，则返回“true”，否则返回“ false”。
     */
    InArena():boolean

    /**
     * 如果玩家当前在BattleGround 中，则返回 'true'，否则返回 ' false'。
     */
    InBattleground():boolean

    /**
     * 如果玩家当前在战场队列中，则返回“true”，否则返回“ false”。
     */
    InBattlegroundQueue()

    /**
     * 为Player设置不完整的给定任务条目。
     * @param entry 任务入口 有效数字：从 0 到 4,294,967,295 的整数。
     */
    IncompleteQuest(entry:number)

    /**
     * 如果玩家被标记为“远离键盘”，则返回“真”，否则返回“假”。
     * 
     */
    IsAFK():boolean

    /**
     * 如果玩家正在接受悄悄话，则返回“true”，否则返回“ false”。
     */
    IsAcceptingWhispers():boolean

    /**
     * 如果玩家是联盟派系的一部分，则返回“真”，否则返回“假”。
     */
    IsAlliance():boolean

    /**
     * 如果玩家被标记为“请勿打扰”，则返回“真”，否则返回“假”。
     */
    IsDND():boolean

    /**
     * 如果玩家当前正在下降，则返回“true”，否则返回“ false”。
     */
    IsFalling():boolean

    /**
     * 如果玩家当前正在飞行，则返回“真”，否则返回“假”。
     */
    IsFlying():boolean

    /**
     * 如果玩家是游戏大师，则返回“真”，否则返回“假”。
     * 注意：这仅在激活 GM 标签时才适用！有关替代方案，请参阅Player:GetGMRank
     */
    IsGM():boolean

    IsGMChat()
    /**
     * 如果玩家有资格通过指定的单位获得荣誉或 XP，则返回“真”，否则返回“假”。
     * @param unit 单位实例
     */
    IsHonorOrXPTarget(unit:Unit):boolean

    /**
     * 如果玩家是部落派系的一部分，则返回“真”，否则返回“假”。
     */
    IsHorde():boolean

    /**
     * 如果玩家对一切都免疫，则返回“true” 。
     */
    IsImmuneToDamage():boolean

    /**
     * 如果玩家在类型指定的竞技场团队中，则返回“true”，否则返回“ false”。
     * @param type 有效数字：从 0 到 4,294,967,295 的整数。
     */
    IsInArenaTeam(type:number):boolean

    /**
     * 如果玩家在Group 中，则返回 'true'，否则返回 ' false'。
     * @returns isInGroup boolean
     */
    IsInGroup():boolean

    /**
     * 如果玩家在Guild 中，则返回 'true'，否则返回 ' false'。
     * @returns isInGuild boolean
     */
    IsInGuild()

    /**
     * 如果Player当前与另一个Player by object位于同一组中，则返回“true”，否则返回“ false”。
     * @param player 另一个玩家
     */
    IsInSameGroupWith(player:Player):boolean

    /**
     * 如果玩家当前与另一个玩家在同一个团队中，则返回“true”，否则返回“ false”。
     * @param player 另一个玩家
     */
    IsInSameRaidWith(player:Player):boolean

    /**
     * 如果玩家当前在水中，则返回“真”，否则返回“假”。
     */
    IsInWater():boolean

    /**
     * 如果玩家当前正在移动，则返回“true”，否则返回“ false”。
     */
    IsMoving():boolean

    /**
     * 如果玩家当前处于休息状态，则返回“真”，否则返回“假”。
     */
    IsRested():boolean

    /**
     * 如果玩家激活了出租车作弊，则返回“true”，否则返回“ false”。
     */
    IsTaxiCheater():boolean

    /**
     * 如果玩家可以看到对象指定的另一个玩家，则返回“true”，否则返回“ false”。
     * @param player 另一个玩家
     */
    IsVisibleForPlayer(player:Player)

    /**
     * 从服务器踢出玩家
     */
    KickPlayer()

    /**
     * 杀死玩家
     */
    KillPlayer()

    /**
     * 给予任务怪物杀死信用
     * @param entry 一个生物的进入 有效数字：从 0 到 4,294,967,295 的整数。
     */
    KilledMonsterCredit(entry:number)

    /**
     * 向玩家传授条目 ID 指定的法术
     * @param spellId 有效数字：从 0 到 4,294,967,295 的整数。
     */
    LearnSpell(spellId:number)

    /**
     * 学习Player由 Talent_id 和 TalentRank 指定的天赋
     * @param talent_id 有效数字：从 0 到 4,294,967,295 的整数。
     * @param talentRank 有效数字：从 0 到 4,294,967,295 的整数。
     */
    LearnTalent( talent_id:number, talentRank:number)

    /**
     * 强制玩家离开战场
     * @param teleToEntry boolean
     */
    LeaveBattleground(teleToEntry:boolean)

    /**
     * 强制玩家退出
     * @param saveToDb 是否保存db
     */
    LogoutPlayer(saveToDb:boolean)

    /**
     * 增加或减少玩家当前的竞技场点数
     * @param amount 有效数字：从 -2,147,483,647 到 2,147,483,647 的整数。
     */
    ModifyArenaPoints(amount:number)

    /**
     * 增加或减少玩家当前的荣誉点数
     * @param amount 有效数字：从 -2,147,483,647 到 2,147,483,647 的整数。
     */
    ModifyHonorPoints(amount:number)

    /**
     * 从玩家的铜钱中增加或减少
     * @param copperAmt 负删除，正添加。
     */
    ModifyMoney(copperAmt:number)

    /**
     * 将播放器沉默指定的秒数
     * @param muteTime 有效数字：从 0 到 4,294,967,295 的整数。
     */
    Mute(muteTime:number)

    /**
     * 强行将玩家从战场突袭组中移除
     */
    RemoveFromBattlegroundRaid()

    /**
     * 强制玩家离开组
     */
    RemoveFromGroup()

    /**
     * 从玩家中移除指定数量的指定物品。
     * @param item 物品实例
     * @param itemCount 数量
     */
    RemoveItem(item:Item, itemCount:number)

    /**
     * 从玩家中移除指定数量的指定物品。
     * @param item 物品实例
     * @param itemCount 数量
     */
    RemoveItem(entry:number, itemCount:number)

    /**
     * 删除指定数量的终身杀戮
     * @param val 杀死删除 有效数字：从 0 到 4,294,967,295 的整数。
     */
    RemoveLifetimeKills(val:number)

    /**
     * 从Player 中删除给定的任务条目。
     * @param 任务入口。有效数字：从 0 到 4,294,967,295 的整数。
     */
    RemoveQuest(entry:number)

    /**
     * 从玩家身上移除法术
     * @param entry 进入法术 有效数字：从 0 到 4,294,967,295 的整数。
     */
    RemoveSpell(entry:number)

    /**
    * 从玩家身上移除法术
    * @param entry 进入法术 有效数字：从 0 到 4,294,967,295 的整数。
    * @param disabled false
    */
    RemoveSpell(entry:number, disabled:boolean)

    /**
     * 从玩家身上移除法术
    * @param entry 进入法术 有效数字：从 0 到 4,294,967,295 的整数。
    * @param disabled false
     * @param learnLowRank rank 
     */
    RemoveSpell(entry:number, disabled:boolean, learnLowRank:boolean)

    /**
     * 掠夺玩家的骨头作为徽章
     * @param player 另一个玩家
     */
    RemovedInsignia(player:Player)

    /**
     * 重置玩家已完成的成就
     */
    ResetAchievements()

    /**
     * 重置玩家的所有冷却时间
     */
    ResetAllCooldowns()

    /**
     * 重置玩家的每周荣誉状态
     */
    ResetHonor()

    /**
     * 重置玩家的宠物天赋点
     */
    ResetPetTalents()

    /**
     * 重置指定法术的冷却时间
     * @param spellId 有效数字：从 0 到 4,294,967,295 的整数。
     */
    ResetSpellCooldown(spellId:number)

    /**
     * 重置指定法术的冷却时间
     * @param spellId 有效数字：从 0 到 4,294,967,295 的整数。
     * @param update true
     */
    ResetSpellCooldown(spellId:number, update:boolean)

    /**
     * 重置玩家的天赋
     * @param noCost 无消耗 true
     */
    ResetTalents(noCost:boolean)

    /**
     * 返回玩家累积的天赋重置成本
     * @returns resetCost number
     */
    ResetTalentsCost():number

    /**
     * 重置指定类别的冷却时间
     * @param category 有效数字：从 0 到 4,294,967,295 的整数。
     */
    ResetTypeCooldowns(category:number)

    /**
     * 重置指定类别的冷却时间
     * @param category 有效数字：从 0 到 4,294,967,295 的整数。
     * @param update boolean
     */
    ResetTypeCooldowns(category:number,update:boolean)

    /**
     * 复活玩家。
     * @param healthPercent 默认100 0~100数值
     * @param ressSickness boolean
     */
    ResurrectPlayer(healthPercent:number,ressSickness?:boolean)

    /**
     * 如果玩家完成了给定的任务条目，则奖励给定的任务条目。
     * @param entry 任务入口 有效数字：从 0 到 4,294,967,295 的整数。
     */
    RewardQuest(entry:number)

    /**
     * 将玩家保存到数据库
     */
    SaveToDB()

    /**
     * 从玩家发送说文本
     * @param text 供玩家说的文本。
     * @param lang 玩家会说的语言。有效数字：从 0 到 4,294,967,295 的整数。
     */
    Say(text:string, lang:number)

    /**
     * 向播放器接收器发送插件消息
     * @param prefix 见方法说明
     * @param message 见方法说明
     * @param channel 有效数字：从 0 到 255 的整数。
     * @param receiver 见方法说明。
     * @param fullMsg 见方法说明。
     */
    SendAddonMessage(prefix:string, message:string, channel:number, receiver:Player, fullMsg:string)

    /**
     * 向玩家发送区域触发消息
     * @param message 信息
     */
    SendAreaTriggerMessage(message:string)

    /**
     * 从指定的单位向玩家发送拍卖行窗口
     * @param sender 指定的单位
     */
    SendAuctionMenu(sender:Unit)

    /**
     * 向玩家发送广播消息
     * @param message 
     */
    SendBroadcastMessage(message:string)

    /**
     * 开始玩家的过场动画
     * @param CinematicSequenceId 电影入场ID
     */
    SendCinematicStart(CinematicSequenceId:number)

    /**
     * 并将从公会邀请玩家小号公会的玩家指定的对象
     * @param invitee 指定对象
     */
    SendGuildInvite(invitee:Player)
    
    /**
     * 从指定的WorldObject向播放器发送供应商窗口。
     * @param sender 指定对象OBJ
     */
    SendListInventory(sender:WorldObject)

    /**
     * 为播放器开始电影
     * @param MovieId 一部电影的入场 有效数字：从 0 到 4,294,967,295 的整数。
     */
    SendMovieStart(MovieId:number)

    /**
     * 向玩家发送通知
     * @param message 通知内容
     */    
    SendNotification(message:string)

    /**
     * 
     * @param packet 数据包
     * @param selfOnly 
     */
    SendPacket(packet:WorldPacket, selfOnly?:boolean = true)


    /**
     * 向玩家显示给定任务的任务接受窗口。
     * @param questId 进入一个任务 有效数字：从 0 到 4,294,967,295 的整数。
     */
    SendQuestTemplate(questId:number)

    /**
    * 向玩家显示给定任务的任务接受窗口。
    * @param questId 进入一个任务 有效数字：从 0 到 4,294,967,295 的整数。
    * @param activateAccept 自动完成任务。
    */
    SendQuestTemplate(questId:number,activateAccept?:boolean=true)
    
    /**
     * 从指定的WorldObject向Player发送一个银行窗口。
     * @param sender 一个worldobj的实例
     */
    SendShowBank(sender:WorldObject)

    /**
     * 从指定的 guid 向玩家显示邮箱窗口。
     * @param guid playerguid
     */
    SendShowMailBox(guid:Uint64)

    /**
     * 向玩家发送灵魂复活请求
     */
    SendSpiritResurrect()

    /**
     * 从指定的WorldObject向Player发送一个 tabard vendor 窗口
     * @param sender 一个worldobj的实例
     */
    SendTabardVendorActivate(sender:WorldObject)

    /**
     * 从指定的生物向玩家发送一个飞行管理员窗口
     * @param sender 生物实体
     */
    SendTaxiMenu(sender:Creature)

    /**
     * 从指定的WorldObject向Player发送一个训练器窗口
     * @param sender  一个worldobj的实例
     */
    SendTrainerList(sender:WorldObject)

    /**
     * 切换玩家是否接受耳语
     * @param acceptWhispers acceptWhispers boolean
     */
    SetAcceptWhispers(acceptWhispers:boolean)

    /**
     * 将玩家的竞技场点数设置为指定的数量
     * @param arenaPoints 有效数字：从 0 到 4,294,967,295 的整数。
     */
    SetArenaPoints(arenaPoints:number)

    /**
     * 将玩家的登录标志设置为指定的标志
     * @param flag 登陆标志
     */
    SetAtLoginFlag(flag:number)

    /**
     * 将玩家的家位置设置为指定的位置
     * @param x X 坐标。
     * @param y Y 坐标。
     * @param z Z 坐标。
     * @param mapId 地图 ID。
     * @param areaId 区域标识。
     */
    SetBindPoint(x:number, y:number, z:number, mapId:number, areaId:number)

    /**
     * 将玩家的金额设置为指定的铜
     * @param copperAmt 指定的铜币
     */
    SetCoinage(copperAmt:number)

    /**
     * 将玩家的醉酒值设置到指定的数值
     * @param drunkValue 醉酒值
     */
    SetDrunkValue(drunkValue:number)

    /**
     * 切换玩家的 FFA 标志
     * @param applyFFA 开关
     */
    SetFFA(applyFFA:boolean)

    /**
     * 将玩家的派系设置为指定种族的派系
     * @param raceId 有效数字：从 0 到 255 的整数。
     */
    SetFactionForRace(raceId:number)

    /**
     * 将玩家的免费天赋点设置为为当前规格指定的数量
     * @param talentPointAmt 有效数字：从 0 到 4,294,967,295 的整数。
     */
    SetFreeTalentPoints(talentPointAmt:number)

    /**
     * 切换暴雪 (GM) 标签
     * @param on boolean
     */
    SetGMChat(on:boolean)

    /**
     * 切换玩家是否开启或关闭 GM 可见性
     * @param gmVisible 开关
     */
    SetGMVisible(gmVisible:boolean)

    /**
     * 打开或关闭玩家的 GM 模式
     * @param setGmMode 开关
     */
    SetGameMaster(setGmMode:boolean)

    /**
     * 将玩家的性别设置为指定的性别
     * @param gender 0 = 男 1 = 女
     */
    SetGender(gender:number)

    /**
     * 将玩家的公会等级设置为指定的等级
     * @param rank 公会等级数值
     */
    SetGuildRank(rank:number)

    /**
     * 设置上周的荣誉站位
     * @param standingPos 有效数字：从 -2,147,483,647 到 2,147,483,647 的整数。
     */
    SetHonorLastWeekStandingPos(standingPos:number)

    /**
     * 将玩家的荣誉点数设置为指定的数量
     * @param honorPoints 有效数字：从 0 到 4,294,967,295 的整数。
     */
    SetHonorPoints(honorPoints:number)

    /**
     * 设置杀戮
     * @param kills 有效数字：从 0 到 4,294,967,295 的整数。
     * @param honorable 如果受害者是光荣的。
     */
    SetHonorStoredKills(kills:number,honorable?:boolean = true)

    /**
     * 将指定的标题添加到Player的已知标题列表中
     * @param titleId 有效数字：从 0 到 4,294,967,295 的整数。
     */
    SetKnownTitle(titleId:number)

    /**
     * 将玩家的终身荣誉击杀数量设置为指定值
     * @param honorableKills 有效数字：从 0 到 4,294,967,295 的整数
     */
    SetLifetimeKills(honorableKills:number)
    
    /**
     * 锁定玩家控制并禁止所有移动和施法。
     * @param apply 如果为真则锁定，如果为假则解锁。
     */
    SetPlayerLock(apply:boolean = true)

    /**
     * 切换 PvP 死亡
     * @param on true
     */
    SetPvPDeath(on:true)

    /**
     * 设置任务状态
     * @param entry 进入一个任务 有效数字：从 0 到 4,294,967,295 的整数。
     * @param status 有效数字：从 0 到 4,294,967,295 的整数。
     */
    SetQuestStatus(entry:number, status:number)
    
    /**
     * 设置等级点
     * @param rankPoints 所有十进制点数
     */
    SetRankPoints(rankPoints:number)

    /**
     * 为指定的派系设置玩家的声望值
     * @param factionId 有效数字：从 0 到 4,294,967,295 的整数。
     * @param reputationValue 有效数字：从 -2,147,483,647 到 2,147,483,647 的整数。
     */
    SetReputation(factionId:number, reputationValue:number)

    /**
     * 将玩家的休息奖金设置为指定的金额
     * @param restBonus 有效数字：所有十进制数字。
     */
    SetRestBonus(restBonus:number)

    /**
     * 将玩家的鞘状态设置为指定的状态
     * @param sheatheState 有效数字：从 0 到 4,294,967,295 的整数。
     */
    SetSheath(sheatheState:number)

    /**
     * 设置（增加）玩家的技能
     * @param id 从 0 到 65,535 的整数。
     * @param step 从 0 到 65,535 的整数。
     * @param currVal 从 0 到 65,535 的整数。
     * @param maxVal 从 0 到 65,535 的整数。
     */
    SetSkill(id:number, step:number, currVal:number, maxVal:number)

    /**
     * 切换玩家是否启用出租车作弊
     * @param taxiCheat 
     */
    SetTaxiCheat(taxiCheat:boolean)

    /**
     * 将玩家的尸体转化为骨头
     */
    SpawnBones()

    /**
     * 尝试启动出租车/飞往给定的 pathID
     * @param pathID 来自 DBC 或Global:AddTaxiPath 的 PathId。
     */
    StartTaxi(pathID:number)

    /**
     * 从给定的召唤者向玩家发送召唤请求
     * @param summoner 召唤者 
     */
    SummonPlayer(summoner:Unit)

    /**
     * 给予Quest怪物以信任
     * @param entry 一个生物的进入。有效数字：从 0 到 4,294,967,295 的整数。
     * @param creature 生物实体
     */
    TalkedToCreature(entry:number, creature:Creature)
    
    /**
     * 将玩家传送到指定位置
     * @param mappId 有效数字：从 0 到 4,294,967,295 的整数。
     * @param xCoord 有效数字：所有十进制数字。
     * @param yCoord 有效数字：所有十进制数字。
     * @param zCoord 有效数字：所有十进制数字。
     * @param orientation 有效数字：所有十进制数字。
     */
    Teleport(mappId:number, xCoord:number, yCoord:number, zCoord:number, orientation:number)

    /**
     * 从玩家发送文本表情
     * @param emoteText emoteText
     */
    TextEmote(emoteText:string)

    /**
     * 切换玩家的“远离键盘”标志
     */
    ToggleAFK()

    /**
     * 切换玩家的“请勿打扰”标志
     */
    ToggleDND()

    /**
     * 解除玩家与他的实例的绑定，除了他当前所在的实例。
     */    
    UnbindAllInstances()

    /**
     * 解除玩家与他的实例的绑定，除了他当前所在的实例。
     * 经典上不使用难度。
     * @param map 有效数字：从 0 到 4,294,967,295 的整数。
     * @param difficulty 有效数字：从 0 到 4,294,967,295 的整数。
     */
    UnbindInstance(map:number, difficulty?:number)

    /**
     * 从玩家的已知标题列表中按 ID 删除标题
     * @param titleId titleId 有效数字：从 0 到 4,294,967,295 的整数。
     */
    UnsetKnownTitle(titleId:number)
    /**
     * 更新玩家的每周荣誉状态
     */
    UpdateHonor()
    /**
     * 从玩家发送悄悄话文本
     * @param text 见方法说明。
     * @param lang 玩家会说的语言。
     * @param receiver 是将接收耳语的玩家，如果是 TrinityCore。
     * @param guid 是接收耳语的玩家的 GUID ，而不是 TrinityCore。
     */
    Whisper(text:string, lang:number, receiver?:Player, guid?:Uint64 )
    /**
     * 从播放器发送喊叫文本
     * @param text 让玩家大喊大叫的语言
     * @param lang 语言
     */
    Yell(text:string,lang:number);
}