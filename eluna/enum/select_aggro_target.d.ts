declare enum SelectAggroTarget
{
    SELECT_TARGET_RANDOM = 0,  //Just selects a random target
    SELECT_TARGET_TOPAGGRO,    //Selects targets from top aggro to bottom
    SELECT_TARGET_BOTTOMAGGRO, //Selects targets from bottom aggro to top
    SELECT_TARGET_NEAREST,
    SELECT_TARGET_FARTHEST
};