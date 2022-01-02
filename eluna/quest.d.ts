/**
 * @compileMembersOnly
 */
declare enum QuestStatus
{
    QUEST_STATUS_NONE           = 0,
    QUEST_STATUS_COMPLETE       = 1,
    //QUEST_STATUS_UNAVAILABLE    = 2,
    QUEST_STATUS_INCOMPLETE     = 3,
    //QUEST_STATUS_AVAILABLE      = 4,
    QUEST_STATUS_FAILED         = 5,
    QUEST_STATUS_REWARDED       = 6,        // Not used in DB
    MAX_QUEST_STATUS
};

declare enum QuestFlags
{
    // Flags used at server and sent to client
    QUEST_FLAGS_NONE                    = 0x00000000,
    QUEST_FLAGS_STAY_ALIVE              = 0x00000001,   // Not used currently
    QUEST_FLAGS_PARTY_ACCEPT            = 0x00000002,   // Not used currently. If player in party, all players that can accept this quest will receive confirmation box to accept quest CMSG_QUEST_CONFIRM_ACCEPT/SMSG_QUEST_CONFIRM_ACCEPT
    QUEST_FLAGS_EXPLORATION             = 0x00000004,   // Not used currently
    QUEST_FLAGS_SHARABLE                = 0x00000008,   // Can be shared: Player::CanShareQuest()
    QUEST_FLAGS_HAS_CONDITION           = 0x00000010,   // Not used currently
    QUEST_FLAGS_HIDE_REWARD_POI         = 0x00000020,   // Not used currently: Unsure of content
    QUEST_FLAGS_RAID                    = 0x00000040,   // Can be completed while in raid
    QUEST_FLAGS_TBC                     = 0x00000080,   // Not used currently: Available if TBC expansion enabled only
    QUEST_FLAGS_NO_MONEY_FROM_XP        = 0x00000100,   // Not used currently: Experience is not converted to gold at max level
    QUEST_FLAGS_HIDDEN_REWARDS          = 0x00000200,   // Items and money rewarded only sent in SMSG_QUESTGIVER_OFFER_REWARD (not in SMSG_QUEST_GIVER_QUEST_DETAILS or in client quest log(SMSG_QUEST_QUERY_RESPONSE))
    QUEST_FLAGS_TRACKING                = 0x00000400,   // These quests are automatically rewarded on quest complete and they will never appear in quest log client side.
    QUEST_FLAGS_DEPRECATE_REPUTATION    = 0x00000800,   // Not used currently
    QUEST_FLAGS_DAILY                   = 0x00001000,   // Used to know quest is Daily one
    QUEST_FLAGS_FLAGS_PVP               = 0x00002000,   // Having this quest in log forces PvP flag
    QUEST_FLAGS_UNAVAILABLE             = 0x00004000,   // Used on quests that are not generically available
    QUEST_FLAGS_WEEKLY                  = 0x00008000,
    QUEST_FLAGS_AUTOCOMPLETE            = 0x00010000,   // auto complete
    QUEST_FLAGS_DISPLAY_ITEM_IN_TRACKER = 0x00020000,   // Displays usable item in quest tracker
    QUEST_FLAGS_OBJ_TEXT                = 0x00040000,   // use Objective text as Complete text
    QUEST_FLAGS_AUTO_ACCEPT             = 0x00080000,   // The client recognizes this flag as auto-accept. However, NONE of the current quests (3.3.5a) have this flag. Maybe blizz used to use it, or will use it in the future.

    // ... 4.x added flags up to 0x80000000 - all unknown for now
};

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