'pure' //纯服务器脚本
/**@noSelf */
export function INSERT(library:string,table_name:string,keyvalue:Record<string,any>){
    const _new_key_value = keyvalueToString(keyvalue)
    const table = `INSERT INTO '${library}'.'${table_name}' (${_new_key_value.key}) VALUES (${_new_key_value.value});`
    console.log(table)
}

/**@noSelf */
export function UPDATE(library:string,table_name:string,keyvalue:Record<string,any>,WHERE:Record<string,any>){
    const table = `UPDATE '${library}'.'${table_name}' SET ${WhereToSting(keyvalue)} WHERE (${WhereToSting(WHERE)});`
    console.log(table)
}


/**@noSelf */
export function WhereToSting(Where:Record<string,any>){
    let _Where = ""
    const length = Object.keys(Where).length
    let count = 0
    for(const _key in Where){
        _Where += `'${_key}'` + '=' + `'${Where[_key]}'`
        count ++
        if(count < length){
            _Where += ","
        }
    }
    return _Where
}


/**@noSelf */
export function keyvalueToString(keyvalue:Record<string,any>){
    let key = ""
    let value = "" 
    const length = Object.keys(keyvalue).length
    let count = 0
    for(const _key in keyvalue){
        key += "'" + _key + "'"
        value += "'" + keyvalue[_key] + "'"
        count ++
        if(count < length){
            key += ","
            value += ","
        }
    }
    return {key:key,value:value}
}