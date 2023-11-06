/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
export declare const deepExtend: (...objects: Array<any>) => any;
export type JsonTreeEvent = 'add' | 'edit' | 'delete' | 'sort' | 'clean';
export declare type JsonPrimitive = string | number | boolean | null;
export declare type JsonValue = JsonPrimitive | JsonArray | JsonObject | undefined;
export interface JsonArray extends Array<JsonValue> {
}
export interface JsonObject {
    [key: string]: JsonValue;
}
