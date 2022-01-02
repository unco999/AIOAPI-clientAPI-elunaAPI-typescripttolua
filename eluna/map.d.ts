/**
 * @compileMembersOnly
 */
declare interface Map{
    /**
     * 返回地图在指定 X、Y 和 Z 坐标处的区域 ID 。
     * @param x 有效数字：所有十进制数字。
     * @param y 有效数字：所有十进制数字。
     * @param z 有效数字：所有十进制数字。
     */
   GetAreaId(x:number, y:number, z:number)

   /**
    * 返回Map的难度。如果扩展是 TBC 之前的，则始终返回 0。
    */
   GetDifficulty():number

   /**
    * 返回地图在给定 X 和 Y 坐标处的高度。如果没有找到高度，则返回 nil
    */
   GetHeight(x:number,y:number):number

   /**
    * 获取Map的实例数据表（如果存在）。实例必须使用 Eluna 编写脚本才能成功。如果实例是用 C++ 编写的，这将返回nil.
    */
   GetInstanceData():Object

   /**
    * 返回Map的实例 ID 。
    */
   GetInstanceId():number

   /**
    * 返回Map的 ID 。
    */
   GetMapId():number

   /**
    * 返回地图的名字
    */
   GetName():string

   /**
    * 返回当前地图上的玩家数量（不包括 GM）。
    */
   GetPlayerCount():number

   /**
    * 返回一个包含地图中所有当前Player的表格
    */
   GetPlayers(team:TeamId):Object

   /**
    * 如果WorldObject被生成，则根据其 GUID 从地图中返回一个WorldObject。
    */
   GetWorldObject(guid:Uint64):WorldObject

   /**
    * true如果Map是 arena BattleGround，false则返回，否则返回。
    */
   IsArena():boolean

   /**
    * 返回true如果地图是一个非竞技场战场，false否则。
    */
   IsBattleground():boolean

    /**
     * true如果地图是地牢，false则返回，否则返回。
     */
   IsDungeon():boolean

   /**
    * true如果Map没有Player则返回，false否则返回。
    */
   IsEmpty():boolean

   /**
    * true如果Map是英雄则返回，false否则返回。
    */
   IsHeroic():boolean

   /**
    * true如果地图是突袭，false则返回，否则返回。
    */
   IsRaid():boolean

   /**
    * 将Map的实例数据保存到数据库。
    */
   SaveInstanceData()

   /**
    * 根据提供的 [WeatherType] 和等级设置 [Weather] 类型。
    * @param zone 要为其设置天气的区域的 ID。
    * @param type [WeatherType]，见上面可用的天气类型。
    * @param grade [天气] 的强度/等级，范围从 0 到 1。
    */
   SetWeather(zone:number, type:WeatherType, grade:number)
}

declare enum WeatherType
{
    WEATHER_TYPE_FINE       = 0,
    WEATHER_TYPE_RAIN       = 1,
    WEATHER_TYPE_SNOW       = 2,
    WEATHER_TYPE_STORM      = 3,
    WEATHER_TYPE_THUNDERS   = 86,
    WEATHER_TYPE_BLACKRAIN  = 90
};