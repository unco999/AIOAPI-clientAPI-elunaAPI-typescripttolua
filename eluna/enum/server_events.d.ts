declare enum ServerEvents
{
    // Server
    SERVER_EVENT_ON_NETWORK_START           =     1,       // Not Implemented
    SERVER_EVENT_ON_NETWORK_STOP            =     2,       // Not Implemented
    SERVER_EVENT_ON_SOCKET_OPEN             =     3,       // Not Implemented
    SERVER_EVENT_ON_SOCKET_CLOSE            =     4,       // Not Implemented
    SERVER_EVENT_ON_PACKET_RECEIVE          =     5,       // (event, packet, player) - Player only if accessible. Can return false, newPacket
    SERVER_EVENT_ON_PACKET_RECEIVE_UNKNOWN  =     6,       // Not Implemented
    SERVER_EVENT_ON_PACKET_SEND             =     7,       // (event, packet, player) - Player only if accessible. Can return false, newPacket

    // World
    WORLD_EVENT_ON_OPEN_STATE_CHANGE        =     8,        // (event, open) - Needs core support on Mangos
    WORLD_EVENT_ON_CONFIG_LOAD              =     9,        // (event, reload)
    // UNUSED                               =     10,
    WORLD_EVENT_ON_SHUTDOWN_INIT            =     11,       // (event, code, mask)
    WORLD_EVENT_ON_SHUTDOWN_CANCEL          =     12,       // (event)
    WORLD_EVENT_ON_UPDATE                   =     13,       // (event, diff)
    WORLD_EVENT_ON_STARTUP                  =     14,       // (event)
    WORLD_EVENT_ON_SHUTDOWN                 =     15,       // (event)

    // Eluna
    ELUNA_EVENT_ON_LUA_STATE_CLOSE          =     16,       // (event) - triggers just before shutting down eluna (on shutdown and restart)

    // Map
    MAP_EVENT_ON_CREATE                     =     17,       // (event, map)
    MAP_EVENT_ON_DESTROY                    =     18,       // (event, map)
    MAP_EVENT_ON_GRID_LOAD                  =     19,       // Not Implemented
    MAP_EVENT_ON_GRID_UNLOAD                =     20,       // Not Implemented
    MAP_EVENT_ON_PLAYER_ENTER               =     21,       // (event, map, player)
    MAP_EVENT_ON_PLAYER_LEAVE               =     22,       // (event, map, player)
    MAP_EVENT_ON_UPDATE                     =     23,       // (event, map, diff)

    // Area trigger
    TRIGGER_EVENT_ON_TRIGGER                =     24,       // (event, player, triggerId) - Can return true

    // Weather
    WEATHER_EVENT_ON_CHANGE                 =     25,       // (event, zoneId, state, grade)

    // Auction house
    AUCTION_EVENT_ON_ADD                    =     26,       // (event, auctionId, owner, item, expireTime, buyout, startBid, currentBid, bidderGUIDLow)
    AUCTION_EVENT_ON_REMOVE                 =     27,       // (event, auctionId, owner, item, expireTime, buyout, startBid, currentBid, bidderGUIDLow)
    AUCTION_EVENT_ON_SUCCESSFUL             =     28,       // (event, auctionId, owner, item, expireTime, buyout, startBid, currentBid, bidderGUIDLow)
    AUCTION_EVENT_ON_EXPIRE                 =     29,       // (event, auctionId, owner, item, expireTime, buyout, startBid, currentBid, bidderGUIDLow)

    // AddOns
    ADDON_EVENT_ON_MESSAGE                  =     30,       // (event, sender, type, prefix, msg, target) - target can be nil/whisper_target/guild/group/channel. Can return false

    WORLD_EVENT_ON_DELETE_CREATURE          =     31,       // (event, creature)
    WORLD_EVENT_ON_DELETE_GAMEOBJECT        =     32,       // (event, gameobject)

    // Eluna
    ELUNA_EVENT_ON_LUA_STATE_OPEN           =     33,       // (event) - triggers after all scripts are loaded

    GAME_EVENT_START                        =     34,       // (event, gameeventid)
    GAME_EVENT_STOP                         =     35,       // (event, gameeventid)
};