import { INSERT, UPDATE } from "./mysql_tool/mysql_tool_main"

//我草了

INSERT("world","creature_area",{guid:'6',zone:'1',area:'1'})

UPDATE("world","creature_area",{guid:'6',zone:'1',area:'1'},{guid:6})


const b = CreatureEvents.CREATURE_EVENT_ON_QUEST_ACCEPT
