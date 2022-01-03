export const tempEnum = {
    CURRENT_MELEE_SPELL             : 0,
    CURRENT_GENERIC_SPELL           : 1,
    CURRENT_CHANNELED_SPELL         : 2,
    CURRENT_AUTOREPEAT_SPELL        : 3,


    ALIVE          : 0,
    JUST_DIED      : 1,
    CORPSE         : 2,
    DEAD           : 3,
    JUST_RESPAWNED : 4,


    GAMEOBJECT_EVENT_ON_AIUPDATE                    : 1,    // (event, go, diff)
    GAMEOBJECT_EVENT_ON_SPAWN                       : 2,    // (event, go)
    GAMEOBJECT_EVENT_ON_DUMMY_EFFECT                : 3,    // (event, caster, spellid, effindex, go) - Can return true
    GAMEOBJECT_EVENT_ON_QUEST_ACCEPT                : 4,    // (event, player, go, quest) - Can return true
    GAMEOBJECT_EVENT_ON_QUEST_REWARD                : 5,    // (event, player, go, quest, opt) - Can return true
    GAMEOBJECT_EVENT_ON_DIALOG_STATUS               : 6,    // (event, player, go)
    GAMEOBJECT_EVENT_ON_DESTROYED                   : 7,    // (event, go, player)
    GAMEOBJECT_EVENT_ON_DAMAGED                     : 8,    // (event, go, player)
    GAMEOBJECT_EVENT_ON_LOOT_STATE_CHANGE           : 9,    // (event, go, state)
    GAMEOBJECT_EVENT_ON_GO_STATE_CHANGED            : 10,   // (event, go, state)
    // UNUSED                                       : 11,   // (event, gameobject)
    GAMEOBJECT_EVENT_ON_ADD                         : 12,   // (event, gameobject)
    GAMEOBJECT_EVENT_ON_REMOVE                      : 13,   // (event, gameobject)
    GAMEOBJECT_EVENT_ON_USE                         : 14,   // (event, go, player)
    //GAMEOBJECT_EVENT_COUNT


    CREATURE_EVENT_ON_ENTER_COMBAT                    : 1,  // (event, creature, target) - Can return true to stop normal action
    CREATURE_EVENT_ON_LEAVE_COMBAT                    : 2,  // (event, creature) - Can return true to stop normal action
    CREATURE_EVENT_ON_TARGET_DIED                     : 3,  // (event, creature, victim) - Can return true to stop normal action
    CREATURE_EVENT_ON_DIED                            : 4,  // (event, creature, killer) - Can return true to stop normal action
    CREATURE_EVENT_ON_SPAWN                           : 5,  // (event, creature) - Can return true to stop normal action
    CREATURE_EVENT_ON_REACH_WP                        : 6,  // (event, creature, type, id) - Can return true to stop normal action
    CREATURE_EVENT_ON_AIUPDATE                        : 7,  // (event, creature, diff) - Can return true to stop normal action
    CREATURE_EVENT_ON_RECEIVE_EMOTE                   : 8,  // (event, creature, player, emoteid) - Can return true to stop normal action
    CREATURE_EVENT_ON_DAMAGE_TAKEN                    : 9,  // (event, creature, attacker, damage) - Can return new damage
    CREATURE_EVENT_ON_PRE_COMBAT                      : 10, // (event, creature, target) - Can return true to stop normal action
    // UNUSED
    CREATURE_EVENT_ON_OWNER_ATTACKED                  : 12, // (event, creature, target) - Can return true to stop normal action            // Not on mangos
    CREATURE_EVENT_ON_OWNER_ATTACKED_AT               : 13, // (event, creature, attacker) - Can return true to stop normal action          // Not on mangos
    CREATURE_EVENT_ON_HIT_BY_SPELL                    : 14, // (event, creature, caster, spellid) - Can return true to stop normal action
    CREATURE_EVENT_ON_SPELL_HIT_TARGET                : 15, // (event, creature, target, spellid) - Can return true to stop normal action
    // UNUSED                                         : 16, // (event, creature)
    // UNUSED                                         : 17, // (event, creature)
    // UNUSED                                         : 18, // (event, creature)
    CREATURE_EVENT_ON_JUST_SUMMONED_CREATURE          : 19, // (event, creature, summon) - Can return true to stop normal action
    CREATURE_EVENT_ON_SUMMONED_CREATURE_DESPAWN       : 20, // (event, creature, summon) - Can return true to stop normal action
    CREATURE_EVENT_ON_SUMMONED_CREATURE_DIED          : 21, // (event, creature, summon, killer) - Can return true to stop normal action    // Not on mangos
    CREATURE_EVENT_ON_SUMMONED                        : 22, // (event, creature, summoner) - Can return true to stop normal action
    CREATURE_EVENT_ON_RESET                           : 23, // (event, creature)
    CREATURE_EVENT_ON_REACH_HOME                      : 24, // (event, creature) - Can return true to stop normal action
    // UNUSED                                         : 25, // (event, creature)
    CREATURE_EVENT_ON_CORPSE_REMOVED                  : 26, // (event, creature, respawndelay) - Can return true, newRespawnDelay
    CREATURE_EVENT_ON_MOVE_IN_LOS                     : 27, // (event, creature, unit) - Can return true to stop normal action. Does not actually check LOS, just uses the sight range
    // UNUSED                                         : 28, // (event, creature)
    // UNUSED                                         : 29, // (event, creature)
    CREATURE_EVENT_ON_DUMMY_EFFECT                    : 30, // (event, caster, spellid, effindex, creature) - Can return true
    CREATURE_EVENT_ON_QUEST_ACCEPT                    : 31, // (event, player, creature, quest) - Can return true
    // UNUSED                                         : 32, // (event, creature)
    // UNUSED                                         : 33, // (event, creature)
    CREATURE_EVENT_ON_QUEST_REWARD                    : 34, // (event, player, creature, quest, opt) - Can return true
    CREATURE_EVENT_ON_DIALOG_STATUS                   : 35, // (event, player, creature)
    CREATURE_EVENT_ON_ADD                             : 36, // (event, creature)
    CREATURE_EVENT_ON_REMOVE                          : 37, // (event, creature)
//    CREATURE_EVENT_COUNT                                 


    // Guild
    GUILD_EVENT_ON_ADD_MEMBER               :     1,       // (event, guild, player, rank)
    GUILD_EVENT_ON_REMOVE_MEMBER            :     2,       // (event, guild, player, isDisbanding)
    GUILD_EVENT_ON_MOTD_CHANGE              :     3,       // (event, guild, newMotd)
    GUILD_EVENT_ON_INFO_CHANGE              :     4,       // (event, guild, newInfo)
    GUILD_EVENT_ON_CREATE                   :     5,       // (event, guild, leader, name)  // Not on TC
    GUILD_EVENT_ON_DISBAND                  :     6,       // (event, guild)
    GUILD_EVENT_ON_MONEY_WITHDRAW           :     7,       // (event, guild, player, amount, isRepair) - Can return new money amount
    GUILD_EVENT_ON_MONEY_DEPOSIT            :     8,       // (event, guild, player, amount) - Can return new money amount
    GUILD_EVENT_ON_ITEM_MOVE                :     9,       // (event, guild, player, item, isSrcBank, srcContainer, srcSlotId, isDestBank, destContainer, destSlotId)   // TODO
    GUILD_EVENT_ON_EVENT                    :     10,      // (event, guild, eventType, plrGUIDLow1, plrGUIDLow2, newRank)  // TODO
    GUILD_EVENT_ON_BANK_EVENT               :     11,      // (event, guild, eventType, tabId, playerGUIDLow, itemOrMoney, itemStackCount, destTabId)

    //GUILD_EVENT_COUNT


    INSTANCE_EVENT_ON_INITIALIZE                    : 1,    // (event, instance_data, map)
    INSTANCE_EVENT_ON_LOAD                          : 2,    // (event, instance_data, map)
    INSTANCE_EVENT_ON_UPDATE                        : 3,    // (event, instance_data, map, diff)
    INSTANCE_EVENT_ON_PLAYER_ENTER                  : 4,    // (event, instance_data, map, player)
    INSTANCE_EVENT_ON_CREATURE_CREATE               : 5,    // (event, instance_data, map, creature)
    INSTANCE_EVENT_ON_GAMEOBJECT_CREATE             : 6,    // (event, instance_data, map, go)
    INSTANCE_EVENT_ON_CHECK_ENCOUNTER_IN_PROGRESS   : 7,    // (event, instance_data, map)
   // INSTANCE_EVENT_COUNT


    // Group
    GROUP_EVENT_ON_MEMBER_ADD               :     1,       // (event, group, guid)
    GROUP_EVENT_ON_MEMBER_INVITE            :     2,       // (event, group, guid)
    GROUP_EVENT_ON_MEMBER_REMOVE            :     3,       // (event, group, guid, method, kicker, reason)
    GROUP_EVENT_ON_LEADER_CHANGE            :     4,       // (event, group, newLeaderGuid, oldLeaderGuid)
    GROUP_EVENT_ON_DISBAND                  :     5,       // (event, group)
    GROUP_EVENT_ON_CREATE                   :     6,       // (event, group, leaderGuid, groupType)

    //GROUP_EVENT_COUNT


    GOSSIP_EVENT_ON_HELLO                           : 1,    // (event, player, object) - Object is the Creature/GameObject/Item. Can return false to do default action. For item gossip can return false to stop spell casting.
    GOSSIP_EVENT_ON_SELECT                          : 2,    // (event, player, object, sender, intid, code, menu_id) - Object is the Creature/GameObject/Item/Player, menu_id is only for player gossip. Can return false to do default action.
   // GOSSIP_EVENT_COUNT


    LOCALE_enUS : 0,
    LOCALE_koKR : 1,
    LOCALE_frFR : 2,
    LOCALE_deDE : 3,
    LOCALE_zhCN : 4,
    LOCALE_zhTW : 5,
    LOCALE_esES : 6,
    LOCALE_esMX : 7,
    LOCALE_ruRU : 8,


    UNIT_NPC_FLAG_NONE                  : 0x00000000,       // SKIP
    UNIT_NPC_FLAG_GOSSIP                : 0x00000001,       // TITLE has gossip menu DESCRIPTION 100%
    UNIT_NPC_FLAG_QUESTGIVER            : 0x00000002,       // TITLE is quest giver DESCRIPTION guessed, probably ok
    UNIT_NPC_FLAG_UNK1                  : 0x00000004,
    UNIT_NPC_FLAG_UNK2                  : 0x00000008,
    UNIT_NPC_FLAG_TRAINER               : 0x00000010,       // TITLE is trainer DESCRIPTION 100%
    UNIT_NPC_FLAG_TRAINER_CLASS         : 0x00000020,       // TITLE is class trainer DESCRIPTION 100%
    UNIT_NPC_FLAG_TRAINER_PROFESSION    : 0x00000040,       // TITLE is profession trainer DESCRIPTION 100%
    UNIT_NPC_FLAG_VENDOR                : 0x00000080,       // TITLE is vendor (generic) DESCRIPTION 100%
    UNIT_NPC_FLAG_VENDOR_AMMO           : 0x00000100,       // TITLE is vendor (ammo) DESCRIPTION 100%, general goods vendor
    UNIT_NPC_FLAG_VENDOR_FOOD           : 0x00000200,       // TITLE is vendor (food) DESCRIPTION 100%
    UNIT_NPC_FLAG_VENDOR_POISON         : 0x00000400,       // TITLE is vendor (poison) DESCRIPTION guessed
    UNIT_NPC_FLAG_VENDOR_REAGENT        : 0x00000800,       // TITLE is vendor (reagents) DESCRIPTION 100%
    UNIT_NPC_FLAG_REPAIR                : 0x00001000,       // TITLE can repair DESCRIPTION 100%
    UNIT_NPC_FLAG_FLIGHTMASTER          : 0x00002000,       // TITLE is flight master DESCRIPTION 100%
    UNIT_NPC_FLAG_SPIRITHEALER          : 0x00004000,       // TITLE is spirit healer DESCRIPTION guessed
    UNIT_NPC_FLAG_SPIRITGUIDE           : 0x00008000,       // TITLE is spirit guide DESCRIPTION guessed
    UNIT_NPC_FLAG_INNKEEPER             : 0x00010000,       // TITLE is innkeeper
    UNIT_NPC_FLAG_BANKER                : 0x00020000,       // TITLE is banker DESCRIPTION 100%
    UNIT_NPC_FLAG_PETITIONER            : 0x00040000,       // TITLE handles guild/arena petitions DESCRIPTION 100% 0xC0000 : guild petitions, 0x40000 : arena team petitions
    UNIT_NPC_FLAG_TABARDDESIGNER        : 0x00080000,       // TITLE is guild tabard designer DESCRIPTION 100%
    UNIT_NPC_FLAG_BATTLEMASTER          : 0x00100000,       // TITLE is battlemaster DESCRIPTION 100%
    UNIT_NPC_FLAG_AUCTIONEER            : 0x00200000,       // TITLE is auctioneer DESCRIPTION 100%
    UNIT_NPC_FLAG_STABLEMASTER          : 0x00400000,       // TITLE is stable master DESCRIPTION 100%
    UNIT_NPC_FLAG_GUILD_BANKER          : 0x00800000,       // TITLE is guild banker DESCRIPTION cause client to send 997 opcode
    UNIT_NPC_FLAG_SPELLCLICK            : 0x01000000,       // TITLE has spell click enabled DESCRIPTION cause client to send 1015 opcode (spell click)
    UNIT_NPC_FLAG_PLAYER_VEHICLE        : 0x02000000,       // TITLE is player vehicle DESCRIPTION players with mounts that have vehicle data should have it set
    UNIT_NPC_FLAG_MAILBOX               : 0x04000000,        // TITLE is mailbox


    PACKET_EVENT_ON_PACKET_RECEIVE          :     5,       // (event, packet, player) - Player only if accessible. Can return false, newPacket
    PACKET_EVENT_ON_PACKET_RECEIVE_UNKNOWN  :     6,       // Not Implemented
    PACKET_EVENT_ON_PACKET_SEND             :     7,       // (event, packet, player) - Player only if accessible. Can return false, newPacket

    //PACKET_EVENT_COUNT


    /**
     * 创造角色事件(event, player) 
     */
    PLAYER_EVENT_ON_CHARACTER_CREATE        :     1,       
    /**
     * 角色删除时的玩家事件(event, guid)
     */
    PLAYER_EVENT_ON_CHARACTER_DELETE        :     2,      
    /**
     * 登录时的玩家事件(event, player)
     */
    PLAYER_EVENT_ON_LOGIN                   :     3,       
    PLAYER_EVENT_ON_LOGOUT                  :     4,        // (event, player)
    PLAYER_EVENT_ON_SPELL_CAST              :     5,        // (event, player, spell, skipCheck)
    PLAYER_EVENT_ON_KILL_PLAYER             :     6,        // (event, killer, killed)
    PLAYER_EVENT_ON_KILL_CREATURE           :     7,        // (event, killer, killed)
    PLAYER_EVENT_ON_KILLED_BY_CREATURE      :     8,        // (event, killer, killed)
    PLAYER_EVENT_ON_DUEL_REQUEST            :     9,        // (event, target, challenger)
    PLAYER_EVENT_ON_DUEL_START              :     10,       // (event, player1, player2)
    PLAYER_EVENT_ON_DUEL_END                :     11,       // (event, winner, loser, type)
    PLAYER_EVENT_ON_GIVE_XP                 :     12,       // (event, player, amount, victim) - Can return new XP amount
    PLAYER_EVENT_ON_LEVEL_CHANGE            :     13,       // (event, player, oldLevel)
    PLAYER_EVENT_ON_MONEY_CHANGE            :     14,       // (event, player, amount) - Can return new money amount
    PLAYER_EVENT_ON_REPUTATION_CHANGE       :     15,       // (event, player, factionId, standing, incremental) - Can return new standing
    PLAYER_EVENT_ON_TALENTS_CHANGE          :     16,       // (event, player, points)
    PLAYER_EVENT_ON_TALENTS_RESET           :     17,       // (event, player, noCost)
    PLAYER_EVENT_ON_CHAT                    :     18,       // (event, player, msg, Type, lang) - Can return false, newMessage
    PLAYER_EVENT_ON_WHISPER                 :     19,       // (event, player, msg, Type, lang, receiver) - Can return false, newMessage
    PLAYER_EVENT_ON_GROUP_CHAT              :     20,       // (event, player, msg, Type, lang, group) - Can return false, newMessage
    PLAYER_EVENT_ON_GUILD_CHAT              :     21,       // (event, player, msg, Type, lang, guild) - Can return false, newMessage
    PLAYER_EVENT_ON_CHANNEL_CHAT            :     22,       // (event, player, msg, Type, lang, channel) - Can return false, newMessage
    PLAYER_EVENT_ON_EMOTE                   :     23,       // (event, player, emote) - Not triggered on any known emote
    PLAYER_EVENT_ON_TEXT_EMOTE              :     24,       // (event, player, textEmote, emoteNum, guid)
    PLAYER_EVENT_ON_SAVE                    :     25,       // (event, player)
    PLAYER_EVENT_ON_BIND_TO_INSTANCE        :     26,       // (event, player, difficulty, mapid, permanent)
    PLAYER_EVENT_ON_UPDATE_ZONE             :     27,       // (event, player, newZone, newArea)
    PLAYER_EVENT_ON_MAP_CHANGE              :     28,       // (event, player)

    // Custom
    PLAYER_EVENT_ON_EQUIP                   :     29,       // (event, player, item, bag, slot)
    PLAYER_EVENT_ON_FIRST_LOGIN             :     30,       // (event, player)
    PLAYER_EVENT_ON_CAN_USE_ITEM            :     31,       // (event, player, itemEntry) - Can return InventoryResult enum value
    PLAYER_EVENT_ON_LOOT_ITEM               :     32,       // (event, player, item, count)
    PLAYER_EVENT_ON_ENTER_COMBAT            :     33,       // (event, player, enemy)
    PLAYER_EVENT_ON_LEAVE_COMBAT            :     34,       // (event, player)
    PLAYER_EVENT_ON_REPOP                   :     35,       // (event, player)
    PLAYER_EVENT_ON_RESURRECT               :     36,       // (event, player)
    PLAYER_EVENT_ON_LOOT_MONEY              :     37,       // (event, player, amount)
    PLAYER_EVENT_ON_QUEST_ABANDON           :     38,       // (event, player, questId)
    PLAYER_EVENT_ON_LEARN_TALENTS           :     39,       // (event, player, talentId, talentRank, spellid)
    // UNUSED                               :     40,       // (event, player)
    // UNUSED                               :     41,       // (event, player)
    PLAYER_EVENT_ON_COMMAND                 :     42,       // (event, player, command) - player is nil if command used from console. Can return false


    IDLE_MOTION_TYPE                : 0,
    RANDOM_MOTION_TYPE              : 1,
    WAYPOINT_MOTION_TYPE            : 2,
    MAX_DB_MOTION_TYPE              : 3,
    ANIMAL_RANDOM_MOTION_TYPE       : 3, // TC

    CONFUSED_MOTION_TYPE            : 4,
    CHASE_MOTION_TYPE               : 5,
    HOME_MOTION_TYPE                : 6,
    FLIGHT_MOTION_TYPE              : 7,
    POINT_MOTION_TYPE               : 8,
    FLEEING_MOTION_TYPE             : 9,
    DISTRACT_MOTION_TYPE            : 10,
    ASSISTANCE_MOTION_TYPE          : 11,
    ASSISTANCE_DISTRACT_MOTION_TYPE : 12,          
    TIMED_FLEEING_MOTION_TYPE       : 13,
    FOLLOW_MOTION_TYPE              : 14,
    EFFECT_MOTION_TYPE              : 15, // mangos
    ROTATE_MOTION_TYPE              : 15, // TC
    //EFFECT_MOTION_TYPE              : 16, // TC
    NULL_MOTION_TYPE                : 17, // TC


    POWER_MANA        : 0,
    POWER_RAGE        : 1,
    POWER_FOCUS       : 2,
    POWER_ENERGY      : 3,
    POWER_HAPPINESS   : 4,
    POWER_RUNE        : 5,
    POWER_RUNIC_POWER : 6,
    MAX_POWERS        : 7,
    POWER_ALL         : 127,         // default for class?
    POWER_HEALTH      : 0xFFFFFFFE,   // (-2 as signed value)


    SELECT_TARGET_RANDOM : 0,  //Just selects a random target
    SELECT_TARGET_TOPAGGRO : 1,    //Selects targets from top aggro to bottom
    SELECT_TARGET_BOTTOMAGGRO : 2, //Selects targets from bottom aggro to top
    SELECT_TARGET_NEAREST : 3,
    SELECT_TARGET_FARTHEST : 4,


    // Server
    SERVER_EVENT_ON_NETWORK_START           :     1,       // Not Implemented
    SERVER_EVENT_ON_NETWORK_STOP            :     2,       // Not Implemented
    SERVER_EVENT_ON_SOCKET_OPEN             :     3,       // Not Implemented
    SERVER_EVENT_ON_SOCKET_CLOSE            :     4,       // Not Implemented
    SERVER_EVENT_ON_PACKET_RECEIVE          :     5,       // (event, packet, player) - Player only if accessible. Can return false, newPacket
    SERVER_EVENT_ON_PACKET_RECEIVE_UNKNOWN  :     6,       // Not Implemented
    SERVER_EVENT_ON_PACKET_SEND             :     7,       // (event, packet, player) - Player only if accessible. Can return false, newPacket

    // World
    WORLD_EVENT_ON_OPEN_STATE_CHANGE        :     8,        // (event, open) - Needs core support on Mangos
    WORLD_EVENT_ON_CONFIG_LOAD              :     9,        // (event, reload)
    // UNUSED                               :     10,
    WORLD_EVENT_ON_SHUTDOWN_INIT            :     11,       // (event, code, mask)
    WORLD_EVENT_ON_SHUTDOWN_CANCEL          :     12,       // (event)
    WORLD_EVENT_ON_UPDATE                   :     13,       // (event, diff)
    WORLD_EVENT_ON_STARTUP                  :     14,       // (event)
    WORLD_EVENT_ON_SHUTDOWN                 :     15,       // (event)

    // Eluna
    ELUNA_EVENT_ON_LUA_STATE_CLOSE          :     16,       // (event) - triggers just before shutting down eluna (on shutdown and restart)

    // Map
    MAP_EVENT_ON_CREATE                     :     17,       // (event, map)
    MAP_EVENT_ON_DESTROY                    :     18,       // (event, map)
    MAP_EVENT_ON_GRID_LOAD                  :     19,       // Not Implemented
    MAP_EVENT_ON_GRID_UNLOAD                :     20,       // Not Implemented
    MAP_EVENT_ON_PLAYER_ENTER               :     21,       // (event, map, player)
    MAP_EVENT_ON_PLAYER_LEAVE               :     22,       // (event, map, player)
    MAP_EVENT_ON_UPDATE                     :     23,       // (event, map, diff)

    // Area trigger
    TRIGGER_EVENT_ON_TRIGGER                :     24,       // (event, player, triggerId) - Can return true

    // Weather
    WEATHER_EVENT_ON_CHANGE                 :     25,       // (event, zoneId, state, grade)

    // Auction house
    AUCTION_EVENT_ON_ADD                    :     26,       // (event, auctionId, owner, item, expireTime, buyout, startBid, currentBid, bidderGUIDLow)
    AUCTION_EVENT_ON_REMOVE                 :     27,       // (event, auctionId, owner, item, expireTime, buyout, startBid, currentBid, bidderGUIDLow)
    AUCTION_EVENT_ON_SUCCESSFUL             :     28,       // (event, auctionId, owner, item, expireTime, buyout, startBid, currentBid, bidderGUIDLow)
    AUCTION_EVENT_ON_EXPIRE                 :     29,       // (event, auctionId, owner, item, expireTime, buyout, startBid, currentBid, bidderGUIDLow)

    // AddOns
    ADDON_EVENT_ON_MESSAGE                  :     30,       // (event, sender, type, prefix, msg, target) - target can be nil/whisper_target/guild/group/channel. Can return false

    WORLD_EVENT_ON_DELETE_CREATURE          :     31,       // (event, creature)
    WORLD_EVENT_ON_DELETE_GAMEOBJECT        :     32,       // (event, gameobject)

    // Eluna
    ELUNA_EVENT_ON_LUA_STATE_OPEN           :     33,       // (event) - triggers after all scripts are loaded

    GAME_EVENT_START                        :     34,       // (event, gameeventid)
    GAME_EVENT_STOP                         :     35,       // (event, gameeventid)


    RACE_NONE               : 0,  // SKIP
    RACE_HUMAN              : 1,  // TITLE Human
    RACE_ORC                : 2,  // TITLE Orc
    RACE_DWARF              : 3,  // TITLE Dwarf
    RACE_NIGHTELF           : 4,  // TITLE Night Elf
    RACE_UNDEAD_PLAYER      : 5,  // TITLE Undead
    RACE_TAUREN             : 6,  // TITLE Tauren
    RACE_GNOME              : 7,  // TITLE Gnome
    RACE_TROLL              : 8,  // TITLE Troll
    //RACE_GOBLIN             : 9,
    RACE_BLOODELF           : 10, // TITLE Blood Elf
    RACE_DRAENEI            : 11, //, TITLE Draenei
    //RACE_FEL_ORC            : 12,
    //RACE_NAGA               : 13,
    //RACE_BROKEN             : 14,
    //RACE_SKELETON           : 15,
    //RACE_VRYKUL             : 16,
    //RACE_TUSKARR            : 17,
    //RACE_FOREST_TROLL       : 18,
    //RACE_TAUNKA             : 19,
    //RACE_NORTHREND_SKELETON : 20,
    //RACE_ICE_TROLL          : 21


    SHEATH_STATE_UNARMED  : 0, // non prepared weapon
    SHEATH_STATE_MELEE    : 1, // prepared melee weapon
    SHEATH_STATE_RANGED   : 2,  // prepared ranged weapon


    SPELL_SCHOOL_NORMAL  : 0,
    SPELL_SCHOOL_HOLY    : 1,
    SPELL_SCHOOL_FIRE    : 2,
    SPELL_SCHOOL_NATURE  : 3,
    SPELL_SCHOOL_FROST   : 4,
    SPELL_SCHOOL_SHADOW  : 5,
    SPELL_SCHOOL_ARCANE  : 6,
    MAX_SPELL_SCHOOL     : 7,


    SPELL_SCHOOL_MASK_NONE    : 0,
    SPELL_SCHOOL_MASK_NORMAL  : 1,
    SPELL_SCHOOL_MASK_HOLY    : 2,
    SPELL_SCHOOL_MASK_FIRE    : 4,
    SPELL_SCHOOL_MASK_NATURE  : 8,
    SPELL_SCHOOL_MASK_FROST   : 16,
    SPELL_SCHOOL_MASK_SHADOW  : 32,
    SPELL_SCHOOL_MASK_ARCANE  : 64,


    MOVE_WALK           : 0,
    MOVE_RUN            : 1,
    MOVE_RUN_BACK       : 2,
    MOVE_SWIM           : 3,
    MOVE_SWIM_BACK      : 4,
    MOVE_TURN_RATE      : 5,
    MOVE_FLIGHT         : 6,
    MOVE_FLIGHT_BACK    : 7,
    MOVE_PITCH_RATE     : 8,


    UNIT_STATE_DIED                  : 0x00000001, // player has fake death aura
    UNIT_STATE_MELEE_ATTACKING       : 0x00000002, // player is melee attacking someone
    UNIT_STATE_CHARMED               : 0x00000004, // having any kind of charm aura on self
    UNIT_STATE_STUNNED               : 0x00000008,
    UNIT_STATE_ROAMING               : 0x00000010,
    UNIT_STATE_CHASE                 : 0x00000020,
    UNIT_STATE_FOCUSING              : 0x00000040,
    UNIT_STATE_FLEEING               : 0x00000080,
    UNIT_STATE_IN_FLIGHT             : 0x00000100, // player is in flight mode
    UNIT_STATE_FOLLOW                : 0x00000200,
    UNIT_STATE_ROOT                  : 0x00000400,
    UNIT_STATE_CONFUSED              : 0x00000800,
    UNIT_STATE_DISTRACTED            : 0x00001000,
    UNIT_STATE_ISOLATED              : 0x00002000, // area auras do not affect other players
    UNIT_STATE_ATTACK_PLAYER         : 0x00004000,
    UNIT_STATE_CASTING               : 0x00008000,
    UNIT_STATE_POSSESSED             : 0x00010000, // being possessed by another unit
    UNIT_STATE_CHARGING              : 0x00020000,
    UNIT_STATE_JUMPING               : 0x00040000,
    UNIT_STATE_FOLLOW_FORMATION      : 0x00080000,
    UNIT_STATE_MOVE                  : 0x00100000,
    UNIT_STATE_ROTATING              : 0x00200000,
    UNIT_STATE_EVADE                 : 0x00400000,
    UNIT_STATE_ROAMING_MOVE          : 0x00800000,
    UNIT_STATE_CONFUSED_MOVE         : 0x01000000,
    UNIT_STATE_FLEEING_MOVE          : 0x02000000,
    UNIT_STATE_CHASE_MOVE            : 0x04000000,
    UNIT_STATE_FOLLOW_MOVE           : 0x08000000,
    UNIT_STATE_IGNORE_PATHFINDING    : 0x10000000, // do not use pathfinding in any MovementGenerator
    UNIT_STATE_FOLLOW_FORMATION_MOVE : 0x20000000,

    /** @end */

}