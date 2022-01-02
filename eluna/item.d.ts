/**
 * @compileMembersOnly
 */
declare interface Item{
    /**
     * 如果项目可以交易，则返回“真”，否则返回“假”
     */
    CanBeTraded():boolean

    /**
     * 从指定槽位的物品上移除附魔
     * 要移除附魔的插槽 有效数字：从 0 到 4,294,967,295 的整数。
     */    
    ClearEnchantment(enchantSlot:number)

    /**
     * 返回允许使用此项目的Player类
     */
    GetAllowableClass():number

    /**
     * 返回允许使用该物品的玩家种族
     */    
    GetAllowableRace():number

    /**
     * 返回此Item的包大小，如果Item不是包，则返回0
     */
    GetBagSize():number

    /**
     * 返回Item的当前包槽
     */
    GetBagSlot():number

    /**
     * 返回的默认购买数项
     */
    GetBuyCount():number

    /**
     * 返回物品的购买价格
     */
    GetBuyPrice():number

    /**
     * 返回物品的类
     */
    GetClass():number

    /**
     * 返回Item的堆栈计数
     * 
     */
    GetCount():number

    /**
     * 返回Item的显示 ID
     */
    GetDisplayId():number

    /**
     * 通过指定的附魔槽返回物品的附魔ID
     */
    GetEnchantmentId():number

    /**
     * 返回物品的库存类型
     */
    GetInventoryType():number

    /**
     * 返回Item的级别
     */
    GetItemLevel():number

    /**
     * 返回物品的聊天链接
     * @param localeConstant 返回Item名称的区域设置。
     */
    GetItemLink(localeConstant:LocaleConstant):string

    /**
     * 返回此的物品组ID项目
     */
    GetItemSet():number

    /**
     * 返回Item的最大堆栈数
     */
    GetMaxStackCount():number

    /**
     * 返回项目的名称
     */
    GetName():string

    /**
     * 返回当前拥有该物品的玩家
     */
    GetOwner():Player

    /**
     * 返回物品的质量
     */
    GetQuality():number

    /**
     * 返回此Item的随机属性 ID
     */
    GetRandomProperty():number

    /**
     * 禁止使用
     */
    GetRandomSuffix()

    /**
     * 返回使用此项目所需的最低级别
     */
    GetRequiredLevel():number

    /**
     * 返回物品的售价
     */
    GetSellPrice():number

    /**
     * 返回Item的当前槽
     */
    GetSlot():number

    /**
     * 通过法术索引返回与物品关联的法术 ID
     */    
    GetSpellId():number

    /**
     * 返回按法术索引绑定到项目的法术触发器
     * @param spellIndex 指定的拼写索引。
     * @returns 指定索引的拼写触发器。
     */
    GetSpellTrigger(spellIndex:number):number

    /**
     * 禁止使用
     */
    GetStatsCount()

    /**
     * 返回Item 的子类
     */
    GetSubClass():number

    /**
     * 如果Item指定了与之相关的Quest，则返回“true”，否则返回“ false”
     * @param questId 要检查的任务ID。
     */
    HasQuest(questId:number)
    
    /**
     * 如果物品是盔甲牛皮纸，则返回“真”，否则返回“假”
     */
    IsArmorVellum():boolean

    /**
     * 如果Item是包，则返回“true”，否则返回“ false”
     */
    IsBag():boolean

    /**
     * 如果Item是帐户绑定的，则返回“true”，否则返回“ false”
     */
    IsBoundAccountWide()

    /**
     * 如果物品被附魔绑定到玩家，则返回“true”，否则返回“ false”
     */    
    IsBoundByEnchant():boolean

    /**
     * 如果项目损坏，则返回“真” ，否则返回“假”
     */    
    IsBroken():boolean

    /**
     * 如果Item是魔法消耗品，则返回“true”，否则返回“ false”
     */
    IsConjuredConsumable():boolean

    /**
     * 如果Item是货币标记，则返回“true”，否则返回“ false”
     */
    IsCurrencyToken():boolean

    /**
     * 如果该物品当前已装备，则返回“真”，否则返回“假”
     */
    IsEquipped():boolean

    /**
     * 如果Item当前在包中，则返回“true”，否则返回“ false”
     */
    IsInBag():boolean

    /**
     * 如果项目当前在交易窗口中，则返回“真”，否则返回“假”
     */
    IsInTrade():boolean

    /**
     * 如果Item被锁定，则返回“true” ，否则返回“ false”
     */    
    IsLocked():boolean

    /**
     * 如果项目未绑定到指定的player，则返回“真”，否则返回“假”
     */
    IsNotBoundToPlayer():boolean

    /**
     * 如果Item不是空包，则返回“true”，否则返回“ false”
     */
    IsNotEmptyBag():boolean

    /**
     * 如果Item是药水，则返回“true”，否则返回“ false”
     */
    IsPotion():boolean

    /**
     * 如果Item是灵魂绑定的，则返回“true” ，否则返回“ false”
     */
    IsSoulBound()

    /**
     * 如果物品是武器牛皮纸，则返回“真”，否则返回“假”
     */
    IsWeaponVellum():boolean

    /**
     * 将物品保存到数据库
     */
    SaveToDB()

    /**
     * 将Item的绑定设置为“true”或“false”
     */
    SetBinding(setBinding:boolean)

    /**
     * 设置的堆栈数项
     * @param count 数量
     */
    SetCount(count:number)

    /**
     * 将物品的指定附魔设置到指定槽位
     */
    SetEnchantment(enchantId:number, enchantSlot:number)

    /**
     * 设置指定为项目所有者的玩家
     */    
    SetOwner(player:Player)
}

declare enum EquipmentSlots{
    EQUIPMENT_SLOT_START        = 0,
    EQUIPMENT_SLOT_HEAD         = 0,
    EQUIPMENT_SLOT_NECK         = 1,
    EQUIPMENT_SLOT_SHOULDERS    = 2,
    EQUIPMENT_SLOT_BODY         = 3,
    EQUIPMENT_SLOT_CHEST        = 4,
    EQUIPMENT_SLOT_WAIST        = 5,
    EQUIPMENT_SLOT_LEGS         = 6,
    EQUIPMENT_SLOT_FEET         = 7,
    EQUIPMENT_SLOT_WRISTS       = 8,
    EQUIPMENT_SLOT_HANDS        = 9,
    EQUIPMENT_SLOT_FINGER1      = 10,
    EQUIPMENT_SLOT_FINGER2      = 11,
    EQUIPMENT_SLOT_TRINKET1     = 12,
    EQUIPMENT_SLOT_TRINKET2     = 13,
    EQUIPMENT_SLOT_BACK         = 14,
    EQUIPMENT_SLOT_MAINHAND     = 15,
    EQUIPMENT_SLOT_OFFHAND      = 16,
    EQUIPMENT_SLOT_RANGED       = 17,
    EQUIPMENT_SLOT_TABARD       = 18,
    EQUIPMENT_SLOT_END          = 19
}

declare enum InventorySlots {
    INVENTORY_SLOT_BAG_START    = 19,
    INVENTORY_SLOT_BAG_END      = 23
}