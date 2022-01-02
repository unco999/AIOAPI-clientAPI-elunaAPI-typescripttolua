declare enum GameObjectEvents
{
    GAMEOBJECT_EVENT_ON_AIUPDATE                    = 1,    // (event, go, diff)
    GAMEOBJECT_EVENT_ON_SPAWN                       = 2,    // (event, go)
    GAMEOBJECT_EVENT_ON_DUMMY_EFFECT                = 3,    // (event, caster, spellid, effindex, go) - Can return true
    GAMEOBJECT_EVENT_ON_QUEST_ACCEPT                = 4,    // (event, player, go, quest) - Can return true
    GAMEOBJECT_EVENT_ON_QUEST_REWARD                = 5,    // (event, player, go, quest, opt) - Can return true
    GAMEOBJECT_EVENT_ON_DIALOG_STATUS               = 6,    // (event, player, go)
    GAMEOBJECT_EVENT_ON_DESTROYED                   = 7,    // (event, go, player)
    GAMEOBJECT_EVENT_ON_DAMAGED                     = 8,    // (event, go, player)
    GAMEOBJECT_EVENT_ON_LOOT_STATE_CHANGE           = 9,    // (event, go, state)
    GAMEOBJECT_EVENT_ON_GO_STATE_CHANGED            = 10,   // (event, go, state)
    // UNUSED                                       = 11,   // (event, gameobject)
    GAMEOBJECT_EVENT_ON_ADD                         = 12,   // (event, gameobject)
    GAMEOBJECT_EVENT_ON_REMOVE                      = 13,   // (event, gameobject)
    GAMEOBJECT_EVENT_ON_USE                         = 14,   // (event, go, player)
    //GAMEOBJECT_EVENT_COUNT
};