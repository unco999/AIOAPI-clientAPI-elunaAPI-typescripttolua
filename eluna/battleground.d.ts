declare interface BattleGround{
    /**
     * 根据团队 ID返回战场中的存活玩家数量。
     */
    GetAlivePlayersCountByTeam(team:Team)

    /**
     * 返回特定战场中的击杀数量给予的奖励荣誉。
     * @param kills 击杀数量。
     */
    GetBonusHonorFromKillCount(kills:number):number

    /**
     * 返回特定BattleGround的括号 ID 。
     */
    GetBracketId():BattlegroundBracketId

    /**
     * 返回战场的结束时间。
     */
    GetEndTime():number

    /**
     * 回特定战场中所选团队的空闲插槽数量。
     */    
    GetFreeSlotsForTeam():number

    /**
     * 返回BattleGround的实例 ID 。
     */
    GetInstanceId():number

    /**
     * 返回地图中的战场。
     */
    GetMap():Map

    /**
     * 返回BattleGround的地图 ID 。
     */
    GetMapId():number

    /**
     * 返回特定战场的最大允许玩家等级。
     */
    GetMaxLevel():number

    /**
     * 返回特定战场的最大允许玩家数量。
     */
    GetMaxPlayers():number

    /**
     * 返回特定战场的每个团队允许的最大玩家数量。
     */
    GetMaxPlayersPerTeam():number

    /**
     * 返回特定战场的最低允许玩家等级。
     */
    GetMinLevel():number

    /**
     * 返回特定战场的最小允许玩家数量。
     */
    GetMinPlayers():number

    /**
     * 返回特定战场的每个团队允许的最小玩家数量。
     */
    GetMinPlayersPerTeam():number

    /**
     * 返回战场的名称。
     */
    GetName():string

    /**
     * 返回特定战场的状态。
     */    
    GetStatus():BattlegroundStatus

    /**
     * 返回BattleGround的类型 ID 。
     */
    GetTypeId():BattlegroundTypeId

    /**
     * 返回特定战场的获胜团队。
     */
    GetWinner():Team
}