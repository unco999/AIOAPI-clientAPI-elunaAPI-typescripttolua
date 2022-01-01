declare interface Vehicle{
    /**
     * 将单位乘客添加到车辆中的指定座位
     * @param passenger 乘客
     * @param seat 有效数字：从 -127 到 127 的整数。
     */
    AddPassenger(passenger:Unit, seat:number)

    /**
     * 返回Vehicle的条目
     * @return entry 有效数字：从 0 到 4,294,967,295 的整数。
     */    
    GetEntry():number

    /**
     * 返回Vehicle的所有者
     */
    GetOwner():Unit

    /**
     * 如果Unit乘客在机上，则返回 true
     */
    GetPassenger():boolean

    /**
     * 如果Unit乘客在机上，则返回 true
     */    
    IsOnBoard(passenger:Unit):boolean

    /**
     * 从车辆上移除单位乘客
     */
    RemovePassenger():Unit
}