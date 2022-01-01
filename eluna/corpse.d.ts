declare interface Corpse{
    /**
     * 返回玩家变成鬼魂并生成此尸体的时间。
     */
    GetGhostTime():number

    /**
     * 返回留下尸体的玩家的 GUID 。
     */
    GetOwnerGUID():Uint64

    /**
     * 返回尸体的 [CorpseType] 。
     */
    GetType():Corpse

    /**
     * 将“幽灵时间”设置为当前时间。
     */
    ResetGhostTime()

    /**
     * 将尸体保存到数据库中。
     */
    SaveToDB()
}