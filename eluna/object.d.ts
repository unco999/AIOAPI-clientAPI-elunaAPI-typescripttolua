/**
 * @compileMembersOnly
 */
declare enum TypeID
{
    TYPEID_OBJECT        = 0,
    TYPEID_ITEM          = 1,
    TYPEID_CONTAINER     = 2,
    TYPEID_UNIT          = 3,
    TYPEID_PLAYER        = 4,
    TYPEID_GAMEOBJECT    = 5,
    TYPEID_DYNAMICOBJECT = 6,
    TYPEID_CORPSE        = 7
};


declare interface Object{
    /**
     * 返回指定索引和偏移量处的数据，转换为无符号 8 位整数。例如，如果您想要索引 10 处的第二个字节，您可以传入 1 作为偏移量。
     * @param index 有效数字：从 0 到 65,535 的整数。
     * @param offset 应为 0、1、2 或 3。 有效数字：从 0 到 255 的整数。
     */
    GetByteValue( index:number, offset:number):number

    /**
     * 返回Object的条目。玩家没有“条目”。
     */
    GetEntry():number

    /**
     * 返回指定索引处的数据，转换为单精度浮点值
     */
    GetFloatValue(index:number):number

    /**
     * 返回对象的 GUID 。GUID 是对象的唯一标识符。
     * 然而，在 MaNGOS 和 cMangos 上，不同地图中的生物和游戏对象可以共享相同的 GUID，但不能在同一地图上。
     * 在 TrinityCore 上，此值在所有地图中都是唯一的
     */
    GetGUID()

    /**
     * 在 TrinityCore 上，所有相同类型的对象的所有低 GUID 都不同。例如，在创建地图时，实例中的生物会被分配新的 GUID。
     * 在 MaNGOS 和 cMaNGOS 上，低 GUID 仅在同一地图上是唯一的。例如，实例中的生物使用数据库中为该生成物分配的相同低 GUID。这就是为什么要识别生物您必须知道 instanceId 和低 GUID。见[地图：GetIntstanceId]
     */
    GetGUIDLow()

    /**
     * 返回指定索引处的数据，转换为有符号的 32 位整数。
     */
    GetInt32Value(index:number):number

    /**
     * 返回Object的比例/大小。这会影响游戏中WorldObject的大小，但Item没有“比例”。
     */
    GetScale():number

    /**
     * 返回Object的 TypeId 。
     */
    GetTypeId():TypeID

    /**
     * 返回指定索引和偏移量处的数据，转换为有符号的 16 位整数。例如，如果您想要索引 10 处的第二个半字，您可以传入 1 作为偏移量。
     */
    GetUInt16Value(index:number, offset:number):number

    /**
     * 返回指定索引处的数据，转换为无符号 32 位整数。
     */
    GetUInt32Value(index:number):number

    /**
     * 返回指定索引处的数据，转换为无符号 64 位整数。
     */
    GetUInt64Value(index:number):Uint64

    /**
     * true如果设置了指定的标志，则返回，否则返回false。
     * @param index Object 中标志数据的索引,有效数字：从 0 到 65,535 的整数。
     * @param flag 要在标志数据中检查的标志,有效数字：从 0 到 4,294,967,295 的整数。
     */
    HasFlag(index:number, flag:number):boolean

    /**
     * true如果Object已添加到其Map，则返回，否则返回false。
     */
    IsInWorld():boolean

    /**
     * 从指定索引处的值中删除标志。
     * @param index 有效数字：从 0 到 65,535 的整数。
     * @param flag 有效数字：从 0 到 4,294,967,295 的整数。
     */
    RemoveFlag(index:number, flag:number)

    /**
     * 将指定索引处的数据和偏移量设置为给定值，转换为无符号 8 位整数。
     * @param index 有效数字：从 0 到 65,535 的整数。
     * @param offset 应为 0、1、2 或 3。有效数字：从 0 到 255 的整数。
     * @param value 有效数字：从 0 到 255 的整数。
     */
    SetByteValue(index:number, offset:number, value:number)

    /**
     * 在指定索引处的数据值中设置指定标志。
     * 如果该标志已经设置，则它保持设置。
     * 要删除标志，请使用Object:RemoveFlag。
     * @param index 有效数字：从 0 到 65,535 的整数。
     * @param value 有效数字：从 0 到 4,294,967,295 的整数。
     */    
    SetFlag(index:number,value:number)

    /**
     * 将指定索引处的数据设置为给定值，转换为单精度浮点值。
     * @param index  有效数字：从 0 到 65,535 的整数。
     * @param value 有效数字：所有十进制数字。
     */    
    SetFloatValue(index:number,value:number)

    /**
     * 将指定索引处的数据设置为给定值，转换为有符号的 16 位整数。
     * @param index 有效数字：从 0 到 65,535 的整数。
     * @param index 应该是 0 或 1。有效数字：从 0 到 255 的整数。
     * @param index 有效数字：从 -32,767 到 32,767 的整数。
     */
    SetInt16Value(index:number, offset:number, value:number)

    /**
     * 将指定索引处的数据设置为给定值，转换为有符号的 32 位整数。
     * @param index 有效数字：从 0 到 65,535 的整数。
     * @param value 有效数字：从 -2,147,483,647 到 2,147,483,647 的整数。
     */
    SetInt32Value()

    /**
     * 将Object的比例/大小设置为给定值。
     */
    SetScale(scale:number)

    /**
     * 将指定索引处的数据设置为给定值，转换为无符号 16 位整数。
     * @param index 有效数字：从 0 到 65,535 的整数。
     * @param offset 应该是 0 或 1。 有效数字：从 0 到 255 的整数。
     * @param value 有效数字：从 0 到 65,535 的整数。
     */
    SetUInt16Value(index:number, offset:number, value:number)

    /**
     * 将指定索引处的数据设置为给定值，转换为无符号 32 位整数。
     * @param index 有效数字：从 0 到 65,535 的整数。
     * @param value 有效数字：从 0 到 4,294,967,295 的整数。
     */
    SetUInt32Value(index:number,value:number)

    /**
     * 将指定索引处的数据设置为给定值，转换为无符号 64 位整数。
     * @param index 有效数字：从 0 到 65,535 的整数。
     * @param value 见方法说明。
     */
    SetUInt64Value(index:number, value:Uint64)

    /**
     * 尝试将Object转换为Corpse。如果Object不是尸体，则返回nil。
     */    
    ToCorpse():Corpse|null

    /**
     * 尝试将Object转换为Creature。如果Object不是Creature，则返回nil。
     */
    ToCreature():Creature

    /**
     * 尝试将Object转换为GameObject。如果Object不是GameObject，则返回nil。
     */
    ToGameObject():GameObject

    /**
     * 尝试将Object转换为Player。如果Object不是Player，则返回nil。
     */
    ToPlayer():Player

    /**
     * 尝试将Object转换为Unit。如果Object不是Unit，则返回nil。
     */    
    ToUnit():Unit

    /**
     * 将指定索引处的数据设置为给定值，转换为无符号 32 位整数。
     * @param index 有效数字：从 0 到 65,535 的整数。
     * @param value 有效数字：从 0 到 4,294,967,295 的整数。
     */
    UpdateUInt32Value(index:number, value:number )
}