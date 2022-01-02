declare enum SelectAggroTarget
{
    SELECT_TARGET_RANDOM = 0,  //Just selects a random target
    SELECT_TARGET_TOPAGGRO = 1,    //Selects targets from top aggro to bottom
    SELECT_TARGET_BOTTOMAGGRO = 2, //Selects targets from bottom aggro to top
    SELECT_TARGET_NEAREST = 3,
    SELECT_TARGET_FARTHEST = 4,
};