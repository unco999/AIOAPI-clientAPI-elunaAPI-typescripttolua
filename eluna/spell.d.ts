/**
 * @compileMembersOnly
 */
declare interface Spell{
    /**
     * 取消法术。
     */
    Cancel()

    /**
     * 施展法术。
     */
    Cast(skipCheck:boolean)

    /**
     * 完成法术。
     */
    Finish()

    /**
     * 返回Spell的施法时间。
     */    
    GetCastTime():number

    /**
     * 返回施放法术的单位。
     */
    GetCaster():Unit

    /**
     * 返回Spell的法术持续时间。
     */    
    GetDuration():number

    /**
     * 返回Spell的法术持续时间。
     */
    GetEntry():number

    /**
     * 返回Spell的能量消耗。
     */
    GetPowerCost():number

    /**
     * 返回目标对象中的拼写。目标可以是以下任何一种对象类型： -玩家 -生物 -游戏对象 -物品 -尸体
     */    
    GetTarget():Object

    /**
     * 返回Spell的目标目的地坐标。
     */
    GetTargetDest():{x:number,y:number,z:Number}

    /**
     * true如果Spell自动重复，false则返回，否则返回。
     */
    IsAutoRepeat():boolean

    /**
     * 将拼写设置为自动重复。
     */
    SetAutoRepeat(repeat:boolean)
}