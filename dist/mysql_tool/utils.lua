local ____exports = {}
function ____exports.htmlspecialchars(str)
    if not str then
    return ""
        end
        if self:typeOf(str) ~= "string" then
        return str
            end
            local reg = {
                ["'"] = "&apos;",
                ["\""] = "&quot;",
                ["&"] = "&amp;",
                ["<"] = "&lt;",
                [">"] = "&gt;"
            }
            for k in pairs(reg) do
                str = __TS__StringReplace(
                    str,
                    __TS__New(RegExp, k, "g"),
                    reg[k]
                )
            end
            return str
        end
        function ____exports.htmlspecialchars_decode(str)
            local reg = {
                ["&apos;"] = "'",
                ["&quot;"] = "\"",
                ["&amp;"] = "&",
                ["&lt;"] = "<",
                ["&gt;"] = ">",
                ["&nbsp;"] = " "
            }
            return __TS__StringReplace(
                str,
                nil,
                function(self, word)
                    return reg[word] or word
                end
            )
        end
        function ____exports.isEmptyObject(obj)
            local name
            for ____value in pairs(obj) do
                name = ____value
                return false
            end
            return true
        end
        function ____exports.getTime(fmt)
            fmt = fmt or "yyyy-MM-dd hh:mm:ss"
            return self:timeFormat(
                __TS__New(Date),
                fmt
            )
        end
        function ____exports.timeFormat(time, fmt)
            if not time and self:typeOf(time) ~= "date" then
            return time or nil
                end
                local o = {
                    ["M+"] = time:getMonth() + 1,
                    ["d+"] = time:getDate(),
                    ["h+"] = time:getHours(),
                    ["m+"] = time:getMinutes(),
                    ["s+"] = time:getSeconds()
                }
                if nil:test(fmt) then
                fmt = __TS__StringReplace(
                    fmt,
                    RegExp["$1"],
                    __TS__StringSubstr(
                        tostring(time:getFullYear()) .. "",
                        4 - #RegExp["$1"]
                    )
                )
                    end
                    for k in pairs(o) do
                        if __TS__New(RegExp, ("(" .. k) .. ")"):test(fmt) then
                        local ____fmt_2 = fmt
                        $1

                            local ____temp_0
                            if #RegExp["$1"] == 1 then
                            ____temp_0 = o[k]
                                else
                                    ____temp_0 = __TS__StringSubstr(
                                        "00" .. tostring(o[k]),
                                        #("" .. tostring(o[k]))
                                    )
                                end
                                fmt = __TS__StringReplace(____fmt_2, ____RegExp__241_1, ____temp_0)
                                    end
                                end
                                return fmt
                            end
                            function ____exports.typeOf(o)
                                local _toString = function toString() { [native code] } 

                                    local _type = {
                                        undefined = "undefined",
                                        number = "number",
                                        boolean = "boolean",
                                        string = "string",
                                        ["[object Function]"] = "function",
                                        ["[object RegExp]"] = "regexp",
                                        ["[object Array]"] = "array",
                                        ["[object Date]"] = "date",
                                        ["[object Error]"] = "error"
                                    }
                                    return _type[__TS__TypeOf(o)] or _type[_toString(o)] or (o and "object" or "null")
                                end
                                return ____exports
