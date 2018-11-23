import { ref, oneof, anyof, definitions } from "./keys/index";
import { array, none, object } from "./types/index";
import { BaseFactory } from "./libs/factory";
import { schemaFieldFactory, schemaKeyWordFactory, schemaTypeFactory, schemaKeysFactory } from "./factory";
import { FxJsonSchema } from "./models/jsonschema";
import { UiSchema } from "./models/uischema";
export { default as ResolveLib, getSchemaId, getDataKeys } from "./libs/resolve";
export { default as MergeLib } from "./libs/merge";

schemaKeyWordFactory.add("definitions", definitions)
                    .add("ref", ref)
                    .add("oneof", oneof)
                    .add("anyof", anyof);

schemaTypeFactory.add("array", array)
                .add("string", none)
                .add("undefined", none)
                .add("number", none)
                .add("null", none)
                .add("any", none)
                .add("integer", none)
                .add("boolean", none)
                .add("object", object);

export {
    FxJsonSchema,
    UiSchema,
    BaseFactory,
    schemaKeysFactory,
    schemaFieldFactory,
    schemaKeyWordFactory,
    schemaTypeFactory
};
