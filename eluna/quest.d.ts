/**
 * @compileMembersOnly
 */

declare interface Quest {
    /**
     * 返回Quest的标志。
     */
    GetFlags():QuestFlags

    /**
     * 返回Quest 的条目 ID 。
     */
    GetId():number

    /**
     * 返回Quest的级别。
     */
    GetLevel():number

    /**
     * 返回拿起Quest所需的最低级别。
     */
    GetMinLevel():number

    /**
     * 返回下一个任务条目 ID。
     */
    GetNextQuestId():number

    /**
     * 返回特定任务链中的下一个任务条目 ID 。
     */
    GetNextQuestInChain():number

    /**
     * 返回上一个任务条目 ID。
     */
    GetPrevQuestId():number

    /**
     * 返回Quest的类型。TODO：可用的文档类型。
     */
    GetType():number

    /**
     * 如果Quest具有指定的标志，则返回 'true' ，否则返回false。以下标志基于 3.3.5a。可调整的。
     * @param flag 
     */
    HasFlag(flag:QuestFlags):boolean

    /**
     * 如果Quest是日常任务，则返回“true” ，否则返回false。
     */    
    IsDaily():boolean

    /**
     * 如果Quest可重复，则返回“true” ，否则返回false。
     */
    IsRepeatable():boolean
}