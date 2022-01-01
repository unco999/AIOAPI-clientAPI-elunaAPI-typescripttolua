declare interface Aura{
    /**
     * 返回导致应用此光环的法术ID 。
     */
    GetAuraId():number

    /**
     * 返回施放导致应用此光环的法术的单位。
     */    
    GetCaster():Unit

    /**
     * 返回施放导致应用此光环的法术的单位的 GUID 。
     */    
    GetCasterGUID():string

    /**
     * 返回施放导致应用此光环的法术的单位的等级。
     */
    GetCasterLevel():number

    /**
     * 返回光环结束前的剩余时间。
     */
    GetDuration():number

    /**
     * 返回此光环应用时的持续时间。要确定自应用此 Aura 以来已经过去了多长时间，请从此方法的结果中减去Aura :GetDuration 的结果。
     */    
    GetMaxDuration():number

    /**
     * 返回应用了光环的单位
     */
    GetOwner():Unit

    /**
     * 返回光环“堆叠”的次数。这与游戏中Aura图标上显示的数字相同。
     */
    GetStackAmount():number

    /**
     * 将这个光环从它应用到的单位上移除。
     */
    Remove()

    /**
     * 更改光环到期前的时间量。
     */    
    SetDuration():number

    /**
     * 更改光环到期前的最长时间。这不会影响光环的当前持续时间，但如果光环 重置为最大持续时间，它将改为duration。
     * @param duration 光环的新最大持续时间，以毫秒为单位。
     */    
    SetMaxDuration(duration:number)

    /**
     * 改变光环在单位上“堆叠”的次数。如果amount大于或等于当前堆叠数，则光环的持续时间重置为最大持续时间。
     * @param amount 有效数字：从 0 到 4,294,967,295 的整数。
     */
    SetStackAmount(amount:number)
}