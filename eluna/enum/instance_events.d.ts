declare enum InstanceEvents
{
    INSTANCE_EVENT_ON_INITIALIZE                    = 1,    // (event, instance_data, map)
    INSTANCE_EVENT_ON_LOAD                          = 2,    // (event, instance_data, map)
    INSTANCE_EVENT_ON_UPDATE                        = 3,    // (event, instance_data, map, diff)
    INSTANCE_EVENT_ON_PLAYER_ENTER                  = 4,    // (event, instance_data, map, player)
    INSTANCE_EVENT_ON_CREATURE_CREATE               = 5,    // (event, instance_data, map, creature)
    INSTANCE_EVENT_ON_GAMEOBJECT_CREATE             = 6,    // (event, instance_data, map, go)
    INSTANCE_EVENT_ON_CHECK_ENCOUNTER_IN_PROGRESS   = 7,    // (event, instance_data, map)
    INSTANCE_EVENT_COUNT
};