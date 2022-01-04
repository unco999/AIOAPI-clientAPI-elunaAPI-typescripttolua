declare interface WorldObject{
    /**
     * 向WorldObject注册一个定时事件 当传递的函
     * 数被调用时，参数(eventId, delay, repeats, worldobj
     * ect)被传递给它。如果事件不会无限重复，则每次调用的重复
     * 次数将减少
     * 请注意，对于Creature和GameObject，定时事件计时器仅在
     * 该生物出现在某人的视线内时才计时。对于所有WorldObject
     * ，当对象被销毁时，定时事件将被删除。这意味着例如Player
     * 的事件在注销时被删除。
     * @param func 当时间过去时触发的函数。
     * @param delay 设置事件触发的时间（以毫秒为单位）。
     */
    RegisterEvent(func:Function, delay:number):void
        /**
     * 向WorldObject注册一个定时事件 当传递的函
     * 数被调用时，参数(eventId, delay, repeats, worldobj
     * ect)被传递给它。如果事件不会无限重复，则每次调用的重复
     * 次数将减少
     * 请注意，对于Creature和GameObject，定时事件计时器仅在
     * 该生物出现在某人的视线内时才计时。对于所有WorldObject
     * ，当对象被销毁时，定时事件将被删除。这意味着例如Player
     * 的事件在注销时被删除。
     * @param func 当时间过去时触发的函数。
     * @param delay 设置事件触发的时间（以毫秒为单位）。
     * @param delaytable {min, max}包含最小和最大延迟时间的表格。
     */
    RegisterEvent(func:Function, delaytable:Object):void
    /**
     * 向WorldObject注册一个定时事件 当传递的函
     * 数被调用时，参数(eventId, delay, repeats, worldobj
     * ect)被传递给它。如果事件不会无限重复，则每次调用的重复
     * 次数将减少
     * 请注意，对于Creature和GameObject，定时事件计时器仅在
     * 该生物出现在某人的视线内时才计时。对于所有WorldObject
     * ，当对象被销毁时，定时事件将被删除。这意味着例如Player
     * 的事件在注销时被删除。
     * @param func 当时间过去时触发的函数。
     * @param delay 设置事件触发的时间（以毫秒为单位）。
     * @param repeats 事件重复多少次，0为无限。
     */
    RegisterEvent(func:Function, delay:number,repeats:number):void
            /**
     * 向WorldObject注册一个定时事件 当传递的函
     * 数被调用时，参数(eventId, delay, repeats, worldobj
     * ect)被传递给它。如果事件不会无限重复，则每次调用的重复
     * 次数将减少
     * 请注意，对于Creature和GameObject，定时事件计时器仅在
     * 该生物出现在某人的视线内时才计时。对于所有WorldObject
     * ，当对象被销毁时，定时事件将被删除。这意味着例如Player
     * 的事件在注销时被删除。
     * @param func 当时间过去时触发的函数。
     * @param repeats 事件重复多少次，0为无限。
     * @param delaytable {min, max}包含最小和最大延迟时间的表格。
     */
    RegisterEvent(func:Function, delaytable:Object,repeats:number):void

    /**
     * 返回此WorldObject与另一个WorldObject或点之间的角度。角度是两点之间的角度，方向将被忽略。
     * @param obj 返回另外一个世界物体与本物体的角度
     */
    GetAngle(obj:WorldObject)

    /**
     * 返回此WorldObject与另一个WorldObject或点之间的角度。角度是两点之间的角度，方向将被忽略。
     * @param x 目标坐标
     * @param y 目标坐标
     */
    GetAngle(x:number,y:number)

    /**
     * 返回WorldObject的当前区域 ID
     */
    GetAreaId():number

    /**
     * 返回WorldObject 视野内或给定范围内和/或具有特定条目 ID的Creature对象表
     * @param range 有效数字：所有十进制数字。
     * @param entryId （可选）设置要查找的生物的条目 ID。
     * @param hostile 0 双方，1 敌对，2 友好。
     * @param dead 0个，1个活着，2个死。
     */
    GetCreaturesInRange(range:number, entryId?:number, hostile?:number, dead?:number)

    /**
     * 返回从这个WorldObject到另一个WorldObject的距离，或者从这个WorldObject到 3d 空间中的一个点的距离。
     * 该函数考虑了给定的对象大小。另见WorldObject:GetExactDistance , WorldObject:GetDistance2d
     * @param obj WorldObject
     */
    GetDistance(obj:WorldObject)

    /**
     * 返回从这个WorldObject到另一个WorldObject的距离，或者从这个WorldObject到 3d 空间中的一个点的距离。
     * 该函数考虑了给定的对象大小。另见WorldObject:GetExactDistance , WorldObject:GetDistance2d
     * @param x number
     * @param y number
     * @param z number
     */
    GetDistance(x:number,y:number,z:number)

    /**
     * 返回从这个WorldObject到另一个WorldObject的距离，或者从这个WorldObject到二维空间中的一个点的距离。
     * 该函数考虑了给定的对象大小。另见WorldObject:GetDistance , WorldObject:GetExactDistance2d
     * @param obj worldObject 
    */
    GetDistance2d(obj:WorldObject):number
    
    /**
     * 返回从这个WorldObject到另一个WorldObject的距离，或者从这个WorldObject到二维空间中的一个点的距离。
     * 该函数考虑了给定的对象大小。另见WorldObject:GetDistance , WorldObject:GetExactDistance2d
     * @param x number
     * @param y number
     * @param z number
     */
    GetDistance2d(x:number,y:number,z:number):number
    
    /**
     * 返回从这个WorldObject到另一个WorldObject的距离，或者从这个WorldObject到 3d 空间中的一个点的距离。
     * 该函数不考虑给定的对象大小，这意味着只比较对象坐标
     */
    GetExactDistance(obj:WorldObject):number
    
    /**
     * 返回从这个WorldObject到另一个WorldObject的距离，或者从这个WorldObject到 3d 空间中的一个点的距离。
     * 该函数不考虑给定的对象大小，这意味着只比较对象坐标
     * @param x number
     * @param y number
     * @param z number
     */
    GetExactDistance(x:number,y:number,z:number):number

    /**
     * 返回从这个WorldObject到另一个WorldObject的距离，或者从这个WorldObject到二维空间中的一个点的距离。
     * 该函数不考虑给定的对象大小，这意味着只比较对象坐标。另见WorldObject:GetDistance , WorldObject:GetDistance2d
     */
    GetExactDistance2d(obj:WorldObject):number

    /**
     * 返回从这个WorldObject到另一个WorldObject的距离，或者从这个WorldObject到二维空间中的一个点的距离。
     * 该函数不考虑给定的对象大小，这意味着只比较对象坐标。另见WorldObject:GetDistance , WorldObject:GetDistance2d
     */
    GetExactDistance2d(x:number,y:number,z:number):number

    /**
     * 返回的表游戏物体在视线的物体WorldObject或给定范围内和/或与特定的条目号
     * @param range 范围 有效数字：所有十进制数字。
     * @param entryId （可选）设置要查找的游戏对象的条目 ID。
     * @param hostile  0 双方，1 敌对，2 友好。
     */
    GetGameObjectsInRange(range:number, entryId?:number, hostile?:number )

    /**
     * 返回WorldObject的当前实例 ID
     */
    GetInstanceId():number
        
    /**
     * 返回WorldObject的坐标和方向
     */
    GetLocation():{x:number,y:number,z:number,o:number}

    /**
     * 返回WorldObject的当前Map对象
     */
    GetMap():Map

    /**
     * 返回WorldObject的当前地图 ID
     */
    GetMapId():number

    /**
     * 返回WorldObject的名称
     */
    GetName():string

    /**
     * 返回距离WorldObject最近的WorldObject。WorldObject必须匹配的距离、类型、进入和敌意要求可以通过。
     * @param range 有效数字：所有十进制数字。
     * @param type WorldObject必须是的 [TypeMask] 。这可以包含多种类型。0 将被 ingored。
     * @param entry WorldObject的条目0 将被 ingored。
     * @param hostile 指定WorldObject是否需要为 1 敌对、2 友好或 0。
     * @param dead 0个，1个活着，2个死。
     */
    GetNearObject(range:number, type?:TypeMask, entry?:number, hostile?:number, dead?:number ):WorldObject

    /**
     * 返回WorldObject可见的WorldObject 表。WorldObject必须匹配的距离、类型、进入和敌意要求可以通过。
     * @param range 有效数字：所有十进制数字。
     * @param type WorldObject必须是的 [TypeMask] 。这可以包含多种类型。0 将被 ingored。
     * @param entry WorldObject的条目0 将被 ingored。
     * @param hostile 指定WorldObject是否需要为 1 敌对、2 友好或 0。
     * @param dead 0个，1个活着，2个死。
     */
    GetNearObjects(range:number, type?:TypeMask, entry?:number, hostile?:number, dead?:number ):Object
    
    /**
     * 返回距离WorldObject或在给定范围内和/或具有特定条目 ID的最近的Creature对象
     * @param range 有效数字：所有十进制数字。
     * @param entry WorldObject的条目0 将被 ingored。
     * @param hostile 指定WorldObject是否需要为 1 敌对、2 友好或 0。
     * @param dead 0个，1个活着，2个死。
     */
    GetNearestCreature(range:number, entry?:number, hostile?:number, dead?:number ):Creature

    /**
     * 返回最近的游戏对象在视线的物体WorldObject或给定范围内和/或与特定的条目号
     * @param range 有效数字：所有十进制数字。
     * @param entry （可选）设置要查找的游戏对象的条目 ID。
     * @param hostile 0 双方，1 敌对，2 友好。
     */
    GetNearestGameObject(range:number, entry?:number, hostile?:number):GameObject

    /**
     * 返回距离WorldObject或给定范围内最近的Player对象
     * @param range 有效数字：所有十进制数字。
     * @param entry 0 双方，1 敌对，2 友好。
     * @param hostile 0个，1个活着，2个死。
     */
    GetNearestPlayer(range:number, entry?:number, hostile?:number):Player
 
    /**
     * 返回WorldObject的当前方向
     */
    GetO():number

    /**
     * 返回WorldObject的当前阶段
     */
    GetPhaseMask():number

    /**
     * 返回WorldObject 视野内或给定范围内的Player对象表
     * @param range  有效数字：所有十进制数字。
     * @param hostile  0 双方，1 敌对，2 友好。
     * @param dead 0个，1个活着，2个死。
     */
    GetPlayersInRange(range:number, hostile?:number, dead?:number)

    /**
     * 获取相对点
     * @param angle 以弧度为单位指定点相对于WorldObject的方向/面向的角度。
     * @param distance 指定点与WorldObject的距离（以码为单位）。
     */
    GetRelativePoint(distance:number, angle:number):{x:number,y:number,z:number}

    /**
     * 返回WorldObject的当前 X 坐标
     */
    GetX():number

    /**
     * 返回WorldObject的当前 Y 坐标
     */
    GetY():number

    /**
     * 返回WorldObject的当前 Y 坐标
     */
    GetZ():number

    /**
     * 返回WorldObject的当前区域 ID
     */
    GetZoneId():number

    /**
     * 如果目标位于WorldObject后面的给定弧中，则返回 true
     */
    IsInBack():boolean

    /**
     * 如果目标位于WorldObject前面的给定弧中，则返回 true
     * @param target 目标
     * @param arc 弧度
     */
    IsInFront(target:WorldObject, arc?:number):boolean

    /**
     * 如果WorldObject位于同一地图上，则返回 true
     */
    IsInMap(worldobject:WorldObject):boolean

    /**
     * 如果目标在给定范围内，则返回 true 请注意，距离是从WorldObject的边缘开始测量的。
     * @param target 目标
     * @param minrange 最小距离
     * @param maxrange 最长距离
     * @param is3D 如果为 false，则仅用于检查 x,y 坐标。
     */
    IsInRange( target:WorldObject, minrange:number, maxrange:number, is3D?:boolean)

    /**
     * 如果点在给定范围内，则返回 true  请注意，距离是从WorldObject的边缘开始测量的。
     */
    IsInRange2d( x:number, y:number, minrange:number, maxrange:number):boolean

    /**
     * 如果点在给定范围内，则返回 true  请注意，距离是从WorldObject的边缘开始测量的。
     * @param x 
     * @param y 
     * @param z 
     * @param minrange 
     * @param maxrange 
     */
    IsInRange3d( x:number, y:number,z:number, minrange:number, maxrange:number):boolean

    /**
     * 如果目标在WorldObject的给定距离内，则返回 true 请注意，距离是从WorldObject的边缘开始测量的。
     */
    IsWithinDist(target:WorldObject, distance:number, is3D:boolean):boolean

    /**
     * 如果点在WorldObject的给定距离内，则返回 true  距离仅在 x,y 坐标中测量。请注意，距离是从WorldObject的边缘开始测量的。
     */
    IsWithinDist2d(x:number, y:number, distance:number):boolean

    /**
     * 如果点在WorldObject的给定距离内，则返回 true  请注意，距离是从WorldObject的边缘开始测量的。
     */
    IsWithinDist3d(x:number, y:number, z:number, distance:number):boolean

    /**
     * 如果WorldObject位于同一地图上且在给定距离内，则返回 true  请注意，距离是从WorldObject的边缘开始测量的。
     */
    IsWithinDistInMap( target:WorldObject, distance:number, is3D:boolean):boolean

    /**
     * 如果给定的WorldObject或坐标在WorldObject的视线内，则返回 true
     */
    IsWithinLoS(worldobject:WorldObject):boolean
    /**
     * 如果给定的WorldObject或坐标在WorldObject的视线内，则返回 true
     */
    IsWithinLoS(x:number,y:number,z:number):boolean
    
    /**
     * 如果没有提供播放器，它将向附近的每个人播放声音。此方法将播放声音并且不会中断先前的声音。
     * @param sound 输入声音。
     * @param player 播放声音的玩家
     */
    PlayDirectSound(sound:number, player:Player)

    /**
     * 该WorldObject播放声音的播放器 
     * 如果没有播放器，它将向附近的每个人播放声音。离WorldObject 越远，声音就会越淡。此方法会中断之前播放的声音。
     * @param sound 输入声音。
     * @param player 播放声音的玩家
     */
    PlayDistanceSound(sound:number, player:Player)

    /**
     * 该WorldObject播放音乐的播放器  如果没有提供播放器，它将向附近的每个人播放音乐。此方法不会中断先前播放的音乐。
     */
    PlayMusic(music:number, player:Player)

    /**
     * 根据指定的事件 ID从WorldObject 中删除定时事件
     * @param eventId 要删除的事件 ID。
     */
    RemoveEventById(eventId:number)

    /**
     * 从WorldObject 中删除所有定时事件
     */
    RemoveEvents()

    /**
     * 将WorldPacket发送到Player看到WorldObject。
     */
    SendPacket(packet:WorldPacket)

    /**
     * 设置WorldObject的相位掩码。
     * @param phaseMask 有效数字：从 0 到 4,294,967,295 的整数。
     * @param update 更新附近物体的可见性。
     */
    SetPhaseMask(phaseMask:number, update:number)

    /**
     * 在指定位置生成生物。
     * @param entry Creature的条目 ID。
     * @param spawnType typeSummontype枚举
     * @param despawnTimer 以毫秒为单位的消失时间。
     */
    SpawnCreature(entry:number, x:number, y:number, z:number, o:number, spawnType:TempSummonType, despawnTimer:number):Creature

    /**
     * 在指定位置生成一个游戏对象。
     * @param entry 游戏对象条目 ID。
     * @param respawnDelay 重生时间以秒为单位。
     */
    SummonGameObject(entry:number, x:number, y:number, z:number, o:number, respawnDelay?:boolean):GameObject

}