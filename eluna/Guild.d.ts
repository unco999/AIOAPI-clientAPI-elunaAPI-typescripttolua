declare interface Guild{
    /**
     * 将指定的玩家添加到指定等级的公会。如果未指定排名，则默认为无。
     * @param player 要加入公会的玩家
     * @param rankId 等级 ID。有效数字：从 0 到 255 的整数。
     */
    AddMember(player, rankId)

    /**
     * 从Guild 中移除指定的Player。
     * @param player 要从公会中移除的玩家。
     * @param isDisbanding  默认'false'，只有在公会被触发解散时才应该设置为'true'。
     */
    DeleteMember(player, isDisbanding)

    /**
     * 解散公会
     */
    Disband()

    /**
     * 返回公会的条目 ID
     * 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetId():number

    /**
     * 返回公会的当前信息
     */
    GetInfo():string

    /**
     * 如果已登录，则通过 GUID查找并返回Guild领导者
     */
    GetLeader():Player

    /**
     * 返回公会领袖 GUID
     */    
    GetLeaderGUID():Uint64

    /**
     * 返回公会的当前消息
     */    
    GetMOTD():string

    /**
     * 返回此公会的成员数
     */
    GetMemberCount():number

    /**
     * 返回一个包含此公会中Player的表只有在线和在某些地图上的玩家。
     */
    GetMembers():Object

    /**
     * 返回公会名称
     */
    GetName():string

    /**
     * 向公会中的所有玩家发送一个WorldPacket
     */
    SendPacket(packet:WorldPacket)

    /**
     * 向公会中指定等级的所有玩家发送WorldPacket
     * @param packet 数据包worldPacket
     * @param rankId 等级
     */
    SendPacketToRanked(packet:WorldPacket, rankId:number)

    /**
     * 设置指定银行标签的信息
     * @param tabId 指定的选项卡的 ID。有效数字：从 0 到 255 的整数。
     * @param info 要设置到银行选项卡的信息。
     */
    SetBankTabText(tabId:number, info:string)

    /**
     * 设置这个公会的领导者
     * @param leader 设置的玩家为领导者
     */
    SetLeader(leader:Player)

    /**
     * 
     * @param player 要降级/升级的玩家
     * @param rankId 等级 ID 有效数字：从 0 到 255 的整数。
     */
    SetMemberRank(player:Player, rankId:number)
}