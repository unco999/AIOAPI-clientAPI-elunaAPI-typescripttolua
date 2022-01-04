require('lualib_bundle')
local ____exports = {}
function ____exports.WhereToSting(Where)
    local _Where = ""
    local length = #__TS__ObjectKeys(Where)
    local count = 0
    for _key in pairs(Where) do
        _Where = _Where .. ((("'" .. _key) .. "'") .. "=") .. ("'" .. tostring(Where[_key])) .. "'"
        count = count + 1
        if count < length then
        _Where = _Where .. ","
            end
        end
        return _Where
    end
    function ____exports.keyvalueToString(keyvalue)
        local key = ""
        local value = ""
        local length = #__TS__ObjectKeys(keyvalue)
        local count = 0
        for _key in pairs(keyvalue) do
            key = key .. ("'" .. _key) .. "'"
            value = value .. ("'" .. tostring(keyvalue[_key])) .. "'"
            count = count + 1
            if count < length then
            key = key .. ","
            value = value .. ","
                end
            end
            return {key = key, value = value}
        end
        local ____ = "pure"
        function ____exports.INSERT(library, table_name, keyvalue)
            local _new_key_value = ____exports.keyvalueToString(keyvalue)
            local ____table = ((((((("INSERT INTO '" .. library) .. "'.'") .. table_name) .. "' (") .. _new_key_value.key) .. ") VALUES (") .. _new_key_value.value) .. ");"
            print(____table)
        end
        function ____exports.UPDATE(library, table_name, keyvalue, WHERE)
            local ____table = ((((((("UPDATE '" .. library) .. "'.'") .. table_name) .. "' SET ") .. ____exports.WhereToSting(keyvalue)) .. " WHERE (") .. ____exports.WhereToSting(WHERE)) .. ");"
            print(____table)
        end
        return ____exports
