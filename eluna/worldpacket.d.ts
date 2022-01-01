declare interface WorldPacket{
    /**
     * 返回WorldPacket的操作码。
     */
    GetOpcode():number

    /**
     * 返回WorldPacket的大小。
     */
    GetSize():number

    /**
     * 从WorldPacket读取并返回一个有符号的 8 位整数值。
     */
    ReadByte():number

    /**
     * 从WorldPacket读取并返回一个双精度浮点值。
     */
    ReadDouble():number

    /**
     * 从WorldPacket读取并返回一个单精度浮点值。
     */
    ReadFloat():number

    /**
     * 从WorldPacket读取并返回一个无符号的 64 位整数值。
     */
    ReadGUID():Uint64

    /**
     * 从WorldPacket读取并返回一个有符号的 32 位整数值。
     */    
    ReadLong():number

    /**
     * 从WorldPacket读取并返回一个带符号的 16 位整数值。
     */    
    ReadShort():number

    /**
     * 从WorldPacket读取并返回一个字符串值。
     */
    ReadString():number
    
    /**
     * 从WorldPacket读取并返回一个无符号的 8 位整数值。
     */
    ReadUByte():number

    /**
     * 从WorldPacket读取并返回一个无符号的 32 位整数值。
     */
    ReadULong():number

    /**
     * 从WorldPacket读取并返回一个无符号的 32 位整数值。
     */
    ReadUShort():number

    /**
     * 将WorldPacket的操作码设置为指定的操作码。
     */
    SetOpcode(Opcodes:number)

    /**
     * 将一个有符号的 8 位整数值写入WorldPacket。
     */
    WriteByte(value:number)

    /**
     * 将 64 位浮点值写入WorldPacket。
     */
    WriteDouble(value:number)

    /**
     * 将 32 位浮点值写入WorldPacket。
     */
    WriteFloat(value:number)

    /**
     * 将 32 位浮点值写入WorldPacket。
     */
    WriteGUID(value:number)

    /**
     * 将一个有符号的 32 位整数值写入WorldPacket。
     */
    WriteLong(value:number)

    /**
     * 将一个有符号的 16 位整数值写入WorldPacket。
     * 有效数字：从 -32,767 到 32,767 的整数。
     */
    WriteShort(value:number)

    /**
     * 将字符串写入WorldPacket。
     */
    WriteString(value:string)

    /**
     * 将一个无符号的 8 位整数值写入WorldPacket。
     */
    WriteUByte(value:number)

    /**
     * 将一个无符号的 32 位整数值写入WorldPacket。
     * */    
    WriteULong(value:number)

    /**
     * 将一个无符号的 16 位整数值写入WorldPacket。
     */
    WriteUShort(value:number)
}