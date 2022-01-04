/**
 * @compileMembersOnly
 */
declare interface Group{
    /**
     * 向群组添加新成员
     * @param player 对象玩家
     */
    AddMember(player:Player):boolean

    /**
     * 将此组转换为突袭组
     */
    ConvertToRaid()

    /**
     * 解散这个群
     */
    Disband()

    /**
     * 返回组的 GUID
     */
    GetGUID():number

    /**
     * 返回组组长GUID
     */
    GetLeaderGUID():Uint64

    /**
     * 按名称返回组成员的 GUID
     * @param name 该队员名字
     */
    GetMemberGUID(name:string):Uint64

    /**
     * 返回此Group的Player的子组 ID
     */
    GetMemberGroup(guid:Uint64):number

    /**
     * 返回一个包含该组中Player的表
     */
    GetMembers():Object

    /**
     * 返回该组的成员数
     */
    GetMembersCount():number

    /**
     * 如果子组在此组中有空闲插槽，则返回“true”
     */
    HasFreeSlotSubGroup():boolean

    /**
     * 如果玩家是该组的助手，则返回“true”
     */
    IsAssistant(guid:Uint64):boolean

    /**
     * 如果组是战场组，则返回“true”
     */
    IsBGGroup():boolean

    /**
     * 如果组已满，则返回“true”
     */
    IsFull():boolean

    /**
     * 返回“真”，如果玩家是集团领导
     */    
    IsLeader():boolean

    /**
     * 如果玩家是该组的成员，则返回“true”
     * @param guid 一个玩家的guid
     */
    IsMember(guid:Uint64)

    /**
     * 如果组是突袭组，则返回“true”
     */
    IsRaidGroup():boolean

    /**
     * 从该组中删除一个玩家，如果成功则返回“true”
     */
    RemoveMember(guid:Uint64,method:RemoveMethod):boolean

    /**
     * 如果Player s 在此组中的同一子组中，则返回“true”
     */
    SameSubGroup(player1:Player,player2:Player):boolean
    
    /**
     * 向该组发送指定的WorldPacket
     * @param packet 要发送的WorldPacket。
     * @param ignorePlayersInBg 忽略战场中的Player s。
     * @param ignore 忽略玩家的 GUID。
     */
    SendPacket(packet:WorldPacket, ignorePlayersInBg:boolean, ignore:Uint64)

    /**
     * 设置该组的组长
     * @param guid 设置的领导者
     */
    SetLeader(guid:Uint64)

    /**
     * 设置成员的子组
     */
    SetMembersGroup(guid:Uint64, groupID:number)

    /**
     * 设置为对象的目标图标集团
     * @param icon 图标（Skull、Square 等）。
     * @param target 图标目标的GUID，0为清除图标。
     * @param setter 图标设置器的 GUID。
     */
    SetTargetIcon(icon:number, target:Uint64, setter:Uint64)
}
