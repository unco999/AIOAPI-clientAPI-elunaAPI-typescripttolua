declare enum Powers
{
    POWER_MANA        = 0,
    POWER_RAGE        = 1,
    POWER_FOCUS       = 2,
    POWER_ENERGY      = 3,
    POWER_HAPPINESS   = 4,
    POWER_RUNE        = 5,
    POWER_RUNIC_POWER = 6,
    MAX_POWERS        = 7,
    POWER_ALL         = 127,         // default for class?
    POWER_HEALTH      = 0xFFFFFFFE   // (-2 as signed value)
};