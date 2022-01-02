/**
 * @compileMembersOnly
 */
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
}