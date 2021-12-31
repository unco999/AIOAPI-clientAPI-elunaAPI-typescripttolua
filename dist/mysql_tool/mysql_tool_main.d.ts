/**@noSelf */
export declare function INSERT(library: string, table_name: string, keyvalue: Record<string, any>): void;
/**@noSelf */
export declare function UPDATE(library: string, table_name: string, keyvalue: Record<string, any>, WHERE: Record<string, any>): void;
/**@noSelf */
export declare function WhereToSting(Where: Record<string, any>): string;
/**@noSelf */
export declare function keyvalueToString(keyvalue: Record<string, any>): {
    key: string;
    value: string;
};
