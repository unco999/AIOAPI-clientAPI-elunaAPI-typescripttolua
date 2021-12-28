declare enum CreatureEvents
{
    CREATURE_EVENT_ON_ENTER_COMBAT                    = 1,  // (event, creature, target) - Can return true to stop normal action
    CREATURE_EVENT_ON_LEAVE_COMBAT                    = 2,  // (event, creature) - Can return true to stop normal action
    CREATURE_EVENT_ON_TARGET_DIED                     = 3,  // (event, creature, victim) - Can return true to stop normal action
    CREATURE_EVENT_ON_DIED                            = 4,  // (event, creature, killer) - Can return true to stop normal action
    CREATURE_EVENT_ON_SPAWN                           = 5,  // (event, creature) - Can return true to stop normal action
    CREATURE_EVENT_ON_REACH_WP                        = 6,  // (event, creature, type, id) - Can return true to stop normal action
    CREATURE_EVENT_ON_AIUPDATE                        = 7,  // (event, creature, diff) - Can return true to stop normal action
    CREATURE_EVENT_ON_RECEIVE_EMOTE                   = 8,  // (event, creature, player, emoteid) - Can return true to stop normal action
    CREATURE_EVENT_ON_DAMAGE_TAKEN                    = 9,  // (event, creature, attacker, damage) - Can return new damage
    CREATURE_EVENT_ON_PRE_COMBAT                      = 10, // (event, creature, target) - Can return true to stop normal action
    // UNUSED
    CREATURE_EVENT_ON_OWNER_ATTACKED                  = 12, // (event, creature, target) - Can return true to stop normal action            // Not on mangos
    CREATURE_EVENT_ON_OWNER_ATTACKED_AT               = 13, // (event, creature, attacker) - Can return true to stop normal action          // Not on mangos
    CREATURE_EVENT_ON_HIT_BY_SPELL                    = 14, // (event, creature, caster, spellid) - Can return true to stop normal action
    CREATURE_EVENT_ON_SPELL_HIT_TARGET                = 15, // (event, creature, target, spellid) - Can return true to stop normal action
    // UNUSED                                         = 16, // (event, creature)
    // UNUSED                                         = 17, // (event, creature)
    // UNUSED                                         = 18, // (event, creature)
    CREATURE_EVENT_ON_JUST_SUMMONED_CREATURE          = 19, // (event, creature, summon) - Can return true to stop normal action
    CREATURE_EVENT_ON_SUMMONED_CREATURE_DESPAWN       = 20, // (event, creature, summon) - Can return true to stop normal action
    CREATURE_EVENT_ON_SUMMONED_CREATURE_DIED          = 21, // (event, creature, summon, killer) - Can return true to stop normal action    // Not on mangos
    CREATURE_EVENT_ON_SUMMONED                        = 22, // (event, creature, summoner) - Can return true to stop normal action
    CREATURE_EVENT_ON_RESET                           = 23, // (event, creature)
    CREATURE_EVENT_ON_REACH_HOME                      = 24, // (event, creature) - Can return true to stop normal action
    // UNUSED                                         = 25, // (event, creature)
    CREATURE_EVENT_ON_CORPSE_REMOVED                  = 26, // (event, creature, respawndelay) - Can return true, newRespawnDelay
    CREATURE_EVENT_ON_MOVE_IN_LOS                     = 27, // (event, creature, unit) - Can return true to stop normal action. Does not actually check LOS, just uses the sight range
    // UNUSED                                         = 28, // (event, creature)
    // UNUSED                                         = 29, // (event, creature)
    CREATURE_EVENT_ON_DUMMY_EFFECT                    = 30, // (event, caster, spellid, effindex, creature) - Can return true
    CREATURE_EVENT_ON_QUEST_ACCEPT                    = 31, // (event, player, creature, quest) - Can return true
    // UNUSED                                         = 32, // (event, creature)
    // UNUSED                                         = 33, // (event, creature)
    CREATURE_EVENT_ON_QUEST_REWARD                    = 34, // (event, player, creature, quest, opt) - Can return true
    CREATURE_EVENT_ON_DIALOG_STATUS                   = 35, // (event, player, creature)
    CREATURE_EVENT_ON_ADD                             = 36, // (event, creature)
    CREATURE_EVENT_ON_REMOVE                          = 37, // (event, creature)
    CREATURE_EVENT_COUNT
};