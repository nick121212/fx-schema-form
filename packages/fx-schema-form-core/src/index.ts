import { ref, oneof } from "./keys/index";
import { array, none, object } from "./types/index";
import { BaseFactory } from "./libs/factory";
import { schemaFieldFactory, schemaKeyWordFactory, schemaTypeFactory, schemaKeysFactory } from "./factory";
import { FxJsonSchema } from "./models/jsonschema";
import { UiSchema } from "./models/uischema";
export { ResolveLib } from "./libs/resolve";
export { MergeLib } from "./libs/merge";

schemaKeyWordFactory.add("ref", ref);
schemaKeyWordFactory.add("oneof", oneof);

schemaTypeFactory.add("array", array);
schemaTypeFactory.add("string", none);
schemaTypeFactory.add("undefined", none);
schemaTypeFactory.add("number", none);
schemaTypeFactory.add("null", none);
schemaTypeFactory.add("any", none);
schemaTypeFactory.add("integer", none);
schemaTypeFactory.add("boolean", none);
schemaTypeFactory.add("object", object);

export {
    FxJsonSchema,
    UiSchema,
    BaseFactory,
    schemaKeysFactory,
    schemaFieldFactory,
    schemaKeyWordFactory,
    schemaTypeFactory
};
