declare enum GroupEvents
{
    // Group
    GROUP_EVENT_ON_MEMBER_ADD               =     1,       // (event, group, guid)
    GROUP_EVENT_ON_MEMBER_INVITE            =     2,       // (event, group, guid)
    GROUP_EVENT_ON_MEMBER_REMOVE            =     3,       // (event, group, guid, method, kicker, reason)
    GROUP_EVENT_ON_LEADER_CHANGE            =     4,       // (event, group, newLeaderGuid, oldLeaderGuid)
    GROUP_EVENT_ON_DISBAND                  =     5,       // (event, group)
    GROUP_EVENT_ON_CREATE                   =     6,       // (event, group, leaderGuid, groupType)

    GROUP_EVENT_COUNT
};