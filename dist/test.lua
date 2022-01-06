require('lualib_bundle')
local ____ = "pure"
test = 3
test1 = 2
bbbbbbbbbbbbbbb = 6
function bbb()
    print(CreatureEvents.CREATURE_EVENT_ON_DIALOG_STATUS, "asdsadasd", bbbbbbbbbbbbbbb)
    return __TS__New(
        __TS__Promise,
        function(____, res, rej)
            return res(_G, true)
        end
    )
end
