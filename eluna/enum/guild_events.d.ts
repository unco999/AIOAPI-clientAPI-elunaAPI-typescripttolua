declare enum GuildEvents
{
    // Guild
    GUILD_EVENT_ON_ADD_MEMBER               =     1,       // (event, guild, player, rank)
    GUILD_EVENT_ON_REMOVE_MEMBER            =     2,       // (event, guild, player, isDisbanding)
    GUILD_EVENT_ON_MOTD_CHANGE              =     3,       // (event, guild, newMotd)
    GUILD_EVENT_ON_INFO_CHANGE              =     4,       // (event, guild, newInfo)
    GUILD_EVENT_ON_CREATE                   =     5,       // (event, guild, leader, name)  // Not on TC
    GUILD_EVENT_ON_DISBAND                  =     6,       // (event, guild)
    GUILD_EVENT_ON_MONEY_WITHDRAW           =     7,       // (event, guild, player, amount, isRepair) - Can return new money amount
    GUILD_EVENT_ON_MONEY_DEPOSIT            =     8,       // (event, guild, player, amount) - Can return new money amount
    GUILD_EVENT_ON_ITEM_MOVE                =     9,       // (event, guild, player, item, isSrcBank, srcContainer, srcSlotId, isDestBank, destContainer, destSlotId)   // TODO
    GUILD_EVENT_ON_EVENT                    =     10,      // (event, guild, eventType, plrGUIDLow1, plrGUIDLow2, newRank)  // TODO
    GUILD_EVENT_ON_BANK_EVENT               =     11,      // (event, guild, eventType, tabId, playerGUIDLow, itemOrMoney, itemStackCount, destTabId)

    GUILD_EVENT_COUNT
};