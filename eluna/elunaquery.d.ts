declare interface ElunaQuery{
    /**
     * 返回当前行指定列中的数据，转换为布尔值。
     * @param column 有效数字：从 0 到 4,294,967,295 的整数。
     */
    GetBool(column):boolean

    /**
     * 返回结果集中的列数。
     */
    GetColumnCount():number

    /**
     * 返回当前行的指定列中的数据，转换为 64 位浮点值。
     */    
    GetDouble(column:number):number

    /**
     * 返回当前行指定列中的数据，转换为 32 位浮点值。
     */
    GetFloat(column:number):number

    /**
     *  返回当前行的指定列中的数据，转换为有符号的 16 位整数。
     */
    GetInt16(column:number):number

    /**
     * 返回当前行指定列中的数据，转换为有符号的 32 位整数。
     */
    GetInt32(column:number):number

    /**
     * 返回当前行的指定列中的数据，转换为有符号的 64 位整数。
     */
    GetInt64():number

    /**
     * 返回当前行指定列中的数据，转换为有符号的 8 位整数。
     */
    GetInt8():number

    /**
     * 从当前行返回一个表，其中键是字段名称，值是行的值。所有数值都将是数字，其他所有内容都作为字符串返回。
     */
    GetRow():Object

    /**
     * 返回结果集中的行数。
     */
    GetRowCount():number

    /**
     * 返回当前行指定列中的数据，转换为字符串。
     */
    GetString(column:number):string

    /**
     * 返回当前行指定列中的数据，转换为无符号 16 位整数。
     */
    GetUInt16(column:number):number

    /**
     * 返回当前行指定列中的数据，转换为无符号 32 位整数。
     */
    GetUInt32(column:number):number
    
    /**
     * 返回当前行指定列中的数据，转换为无符号 64 位整数。:number
     */
    GetUInt64(column:number):number

    /**
     * 返回当前行指定列中的数据，转换为无符号 8 位整数。
     */
    GetUInt8(column:number):number

    /**
     * true如果当前行的指定列是 则返回NULL，否则返回false。
     */
    IsNull():boolean

    /**
     * 将ElunaQuery 推进到结果集中的下一行。不要在查询后立即调用它，否则您将跳过第一行。false如果没有新行则返回，否则返回true。
     */
    NextRow():boolean
}