require('lualib_bundle')
local ____exports = {}
local ____mysql_tool_main = require("mysql_tool.mysql_tool_main")
local INSERT = ____mysql_tool_main.INSERT
local UPDATE = ____mysql_tool_main.UPDATE
local ____ = "pure"
INSERT("world", "creature_area", {guid = "6", zone = "1", area = "1"})
UPDATE("world", "creature_area", {guid = "6", zone = "1", area = "1"}, {guid = 6})
return ____exports
