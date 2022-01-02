declare enum MovementGeneratorType
{
    IDLE_MOTION_TYPE                = 0,
    RANDOM_MOTION_TYPE              = 1,
    WAYPOINT_MOTION_TYPE            = 2,
    MAX_DB_MOTION_TYPE              = 3,
    ANIMAL_RANDOM_MOTION_TYPE       = 3, // TC

    CONFUSED_MOTION_TYPE            = 4,
    CHASE_MOTION_TYPE               = 5,
    HOME_MOTION_TYPE                = 6,
    FLIGHT_MOTION_TYPE              = 7,
    POINT_MOTION_TYPE               = 8,
    FLEEING_MOTION_TYPE             = 9,
    DISTRACT_MOTION_TYPE            = 10,
    ASSISTANCE_MOTION_TYPE          = 11,
    ASSISTANCE_DISTRACT_MOTION_TYPE = 12,          
    TIMED_FLEEING_MOTION_TYPE       = 13,
    FOLLOW_MOTION_TYPE              = 14,
    EFFECT_MOTION_TYPE              = 15, // mangos
    ROTATE_MOTION_TYPE              = 15, // TC
    //EFFECT_MOTION_TYPE              = 16, // TC
    NULL_MOTION_TYPE                = 17, // TC
};