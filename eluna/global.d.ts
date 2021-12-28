
/**@noSelf */
/**
 * 注册玩家事件
 * @param event 玩家枚举事件 PlayerEvents
 * @param fuc 调用的函数
 * @param shots 调用次数 默认为0为始终调用
 */
declare function RegisterPlayerEvent(event:number,fuc:Function,shots?:number);

/**@noSelf */
/**
 * 注册地图事件
 * @param map_id 地图的ID
 * @param event 地图事件ID，enum为 InstanceEvents 
 * @param fuc 注册的功能。
 * @param shots 调用的次数
 */
declare function RegisterMapEvent( map_id:number, event:number, fuc:Function,shots?:number )

/**@noSelf */
/**
 * 注册组队事件
 * @param event 事件枚举为GroupEvents
 * @param fuc 注册的函数
 * @param shots 调用的次数
 */
declare function RegisterGroupEvent( event:number, fuc:Function,shots?:number )

/**@noSelf */
/**
 * 注册公会事件
 * @param event 公会事件ID 事件枚举名为GuildEvents
 * @param fuc 注册的函数
 * @param shots 调用的次数
 */
declare function RegisterGuildEvent( event:number, fuc:Function,shots?:number )

/**@noSelf */
/**
 * 注册数据包发送事件
 * @param entry 操作码 有效数字：从 0 到 4,294,967,295 的整数。
 * @param event 事件枚举名为PacketEvents  
 * @param fuc 注册函数回调
 * @param shots 调用的次数
 */
declare function RegisterPacketEvent( entry:number,event:number, fuc:Function,shots?:number )

/**@noSelf */
/**
 * 注册服务器事件
 * @param event 事件枚举名为ServerEvents
 * @param fuc 注册函数回调
 * @param shots 调用的次数
 */
declare function RegisterServerEvent( event:number, fuc:Function,shots?:number )

/**@noSelf */
/**
 * 注册生物事件
 * @param entry 一个或多个Creature的ID 。有效数字：从 0 到 4,294,967,295 的整数。
 * @param event 事件枚举名为CreatureEvents 
 * @param fuc 函数回调
 * @param shots 调用的次数
 */
declare function RegisterCreatureEvent( entry:number,event:number, fuc:Function,shots?:number )

/**@noSelf */
/**
 * 注册一个地图实例事件
 * @param instance_id Map实例的 ID  有效数字：从 0 到 4,294,967,295 的整数。
 * @param event 地图事件ID 枚举名为 InstanceEvents
 * @param fuc 函数回调
 * @param shots 调用的次数
 */
declare function RegisterInstanceEvent( instance_id:number,event:number, fuc:Function,shots?:number )

/**@noSelf */
/**
 * 注册一个GameObject事件
 * @param entry 游戏对象条目 ID。有效数字：从 0 到 4,294,967,295 的整数。
 * @param event 枚举对象为 GameObjectEvents
 * @param fuc 函数回调
 * @param shots 调用的次数
 */
declare function RegisterGameObjectEvent( entry:number,event:GameObjectEvents, fuc:Function,shots?:number )

/**@noSelf */
/**
 * 注册一个Gossip事件
 * @param entry 项目条目 ID。
 * @param event 枚举名字GossipEvents
 * @param fuc 回调函数
 * @param shots 执行次数
 */
declare function RegisterItemGossipEvent( menu_id:number,event:number, fuc:Function,shots?:number )

/**@noSelf */
/**
 * 注册一个 [玩家] Gossip事件
 * @param entry 项目条目 ID。
 * @param event 枚举名字GossipEvents
 * @param fuc 回调函数
 * @param shots 执行次数
 */
declare function RegisterPlayerGossipEvent( menu_id:number,event:number, fuc:Function,shots?:number )


/**@noSelf */
/**
 * 注册一个 [生物] Gossip事件
 * @param entry 项目条目 ID。
 * @param event 枚举名字GossipEvents
 * @param fuc 回调函数
 * @param shots 执行次数
 */
declare function RegisterCreatureGossipEvent( menu_id:number,event:number, fuc:Function,shots?:number )

/**@noSelf */
/**
 * 
 * @param guid 单个Creature的 GUID 。
 * @param instance_id 单个Creature的实例 ID 。
 * @param event 枚举名字CreatureEvents
 * @param func 回调函数
 * @param shots 执行次数
 */
declare function RegisterCreatureGossipEvent( guid:Uint64, instance_id:number, event:number, func:Function, shots?:number )


/**@noSelf */
/**
 * 注册一个 [玩家] Gossip事件
 * @param entry 项目条目 ID。
 * @param event 枚举名字GossipEvents
 * @param fuc 回调函数
 * @param shots 执行次数
 */
declare function RegisterGameObjectGossipEvent( menu_id:number,event:number, fuc:Function,shots?:number )