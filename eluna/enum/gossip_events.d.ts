declare enum GossipEvents
{
    GOSSIP_EVENT_ON_HELLO                           = 1,    // (event, player, object) - Object is the Creature/GameObject/Item. Can return false to do default action. For item gossip can return false to stop spell casting.
    GOSSIP_EVENT_ON_SELECT                          = 2,    // (event, player, object, sender, intid, code, menu_id) - Object is the Creature/GameObject/Item/Player, menu_id is only for player gossip. Can return false to do default action.
    GOSSIP_EVENT_COUNT
};