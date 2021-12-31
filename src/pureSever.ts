"pure"

import { INSERT, UPDATE } from "./mysql_tool/mysql_tool_main"


INSERT("world","creature_area",{guid:'6',zone:'1',area:'1'})

UPDATE("world","creature_area",{guid:'6',zone:'1',area:'1'},{guid:6})