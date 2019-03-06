import { ref, oneof, anyof, definitions } from "./keys/index";
import { array, none, object } from "./types/index";
import { BaseFactory } from "./libs/factory";
import { schemaFieldFactory, schemaKeyWordFactory, schemaTypeFactory, schemaKeysFactory } from "./factory";
export { default as ResolveLib, getSchemaId, getDataKeys } from "./libs/resolve";
export { default as MergeLib } from "./libs/merge";
export { TreeMap } from "./libs/tree";
export { typeOf, isArray, isNumber } from "./utils";
schemaKeyWordFactory.add("definitions", definitions)
    .add("oneof", oneof)
    .add("anyof", anyof)
    .add("ref", ref);
schemaTypeFactory.add("array", array)
    .add("string", none)
    .add("undefined", none)
    .add("number", none)
    .add("null", none)
    .add("any", none)
    .add("integer", none)
    .add("boolean", none)
    .add("object", object);
export { BaseFactory, schemaKeysFactory, schemaFieldFactory, schemaKeyWordFactory, schemaTypeFactory };
//# sourceMappingURL=index.js.map