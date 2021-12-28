declare enum PacketEvents
{
    PACKET_EVENT_ON_PACKET_RECEIVE          =     5,       // (event, packet, player) - Player only if accessible. Can return false, newPacket
    PACKET_EVENT_ON_PACKET_RECEIVE_UNKNOWN  =     6,       // Not Implemented
    PACKET_EVENT_ON_PACKET_SEND             =     7,       // (event, packet, player) - Player only if accessible. Can return false, newPacket

    PACKET_EVENT_COUNT
};