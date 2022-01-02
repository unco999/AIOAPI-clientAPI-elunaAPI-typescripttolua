/**
 * @compileMembersOnly
 */
declare interface GameObject extends Object extends WorldObject{
    /**
     * 消失一个游戏对象  游戏对象可能会被核心自动重生
     */
    Despawn()

    /**
     * 返回用作数据库中 ID的GameObject的 guid
     */    
    GetDBTableGUIDLow():number

    /**
     * 返回游戏对象的显示 ID
     */
    GetDisplayId():number

    /**
     * 返回游戏对象的状态 下面是 3.3.5a 的客户端 [GOState]
     */
    GetGoState():GOState

    /**
     * 返回可以掠夺游戏对象的玩家
     */
    GetLootRecipient():Player

    /**
     * 返回集团可以掠夺游戏对象
     */
    GetLootRecipientGroup():Group

    /**
     * 返回游戏 对象的 [LootState] 下面是 3.3.5a 中的 [LootState]
    */
    GetLootState():LootState

    /**
     * 如果GameObject可以提供指定的任务，则返回“true”
     */
    HasQuest():number

    /**
     * 如果GameObject处于活动状态，则返回“true”
     */
    IsActive():boolean

    /**
     * 如果生成了GameObject，则返回“true”
     */
    IsSpawned():boolean

    /**
     * 如果GameObject是传输，则返回“true”
     */
    IsTransport():boolean

    /**
     * 从世界中移除游戏对象 在此之后该对象不再可访问，并且不会重新生成。
     */
    RemoveFromWorld():boolean

    /**
     * 重生一个游戏对象
     */
    Respawn()

    /**
     * 将游戏对象保存到数据库
     */
    SaveToDB()

    /**
     * 设置游戏对象的状态
     */
    SetGoState(state:GOState)

    /**
     * 设置游戏 对象的 [LootState] 下面是 3.3.5a 的 [LootState]
     */
    SetLootState(state:LootState)

    /**
     * 设置游戏对象的重生或消失时间。根据游戏对象设置，重生时间也用作消失时间
     */    
    SetRespawnTime(delay:number)

    /**
     * 激活一扇门或一个按钮/杠杆
     */
    UseDoorOrButton(delay:number)
}

declare enum GOState
{
    GO_STATE_ACTIVE             = 0,                        // show in world as used and not reset (closed door open)
    GO_STATE_READY              = 1,                        // show in world as ready (closed door close)
    GO_STATE_ACTIVE_ALTERNATIVE = 2                         // show in world as used in alt way and not reset (closed door open by cannon fire)
};

declare enum LootState
{
    GO_NOT_READY = 0,
    GO_READY,                                               // can be ready but despawned, and then not possible activate until spawn
    GO_ACTIVATED,
    GO_JUST_DEACTIVATED
};