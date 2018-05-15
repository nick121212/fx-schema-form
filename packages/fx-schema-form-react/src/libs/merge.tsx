import { Iterable, Map, OrderedMap, List, OrderedSet, Set, Stack } from "immutable";

function doSetOp(param1: any, param2: any, op: string) {
    const type = param1.constructor.name;

    if (type === "Set" || type === "OrderedSet") {
        return param1[op](param2);
    }
    return param1.toOrderedSet()[op](param2)[`to${type}`]();
}

function customMerge(param1: any, param2: any, mergeFnc: any) {
    if (typeof mergeFnc === "function") {
        return mergeFnc(param1, param2);
    }

    switch (mergeFnc) {
        case "replace":
            return param2;
        case "append":
            if (!Iterable.isIterable(param1)) {
                throw new Error(`Non-iterable passed to "append" merge function`);
            }
            return param1.concat(param2);
        case "prepend":
            if (!Iterable.isIterable(param2)) {
                throw new Error(`Non-iterable passed to "prepend" merge function`);
            }
            return param2.concat(param1);
        case "union":
            if (Map.isMap(param1)) {
                return param1.merge(param2);
            }
            if (!Iterable.isIterable(param1)) {
                throw new Error(`Non-iterable passed to "union" merge function`);
            }
            return doSetOp(param1, param2, "union");
        default:
            throw new Error(`Unknown merge function "${mergeFnc}"`);
    }
}

function mergeDeep(param1: any, param2: any, schema?: any) {
    // there"s no schema defined => native merge or override
    if (!schema || (typeof schema === "object" && Object.keys(schema).length === 0)) {
        return Iterable.isIterable(param1) && !Stack.isStack(param1) ? param1.mergeDeep(param2) : param2;
    }

    const schemaType = typeof schema;

    // no keys in schema, merging is handled by custom merge function
    if (schemaType === "string" || schemaType === "function") {
        return customMerge(param1, param2, schema);
    }

    // at this point anything other than object as a schema should be handled above
    if (schemaType !== "object") {
        throw new Error("Invalid schema");
    }

    if (!Iterable.isIterable(param1) || !Iterable.isIterable(param2)) {
        throw new Error("Only immutable iterables can be merged using merge schema");
    }

    if (Set.isSet(param1) || Set.isSet(param2) || Stack.isStack(param1) || Stack.isStack(param2)) {
        throw new Error("Sets and Stacks can't be merged with schema");
    }

    const immutableType = param1.constructor.name;
    let merged: any;

    switch (immutableType) {
        case "List": merged = List([]); break;
        case "Map": merged = Map({}); break;
        case "OrderedMap": merged = OrderedMap({}); break;
        default:
            throw new Error("Unsupported type");
    }

    param1.forEach((value: any, key: string) => {
        if (param2.has(key)) {
            const subSchema = schema ? (schema[key] || schema["*"]) : undefined;
            merged = merged.set(key, mergeDeep(param1.get(key), param2.get(key), subSchema));
        } else {
            merged = merged.set(key, param1.get(key));
        }
    });

    param2.forEach((value: any, key: string) => {
        if (!param1.has(key)) {
            merged = merged.set(key, param2.get(key));
        }
    });

    return merged;
}

export default mergeDeep;
