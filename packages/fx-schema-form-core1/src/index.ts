
import { ref, oneof } from "./keys";
import { array, none, object } from "./types";
import { BaseFactory } from "./libs/factory";
import { schemaFieldFactory, schemaKeyWordFactory, schemaTypeFactory, schemaKeysFactory } from "./factory";
import { FxJsonSchema } from "./models/jsonschema";

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
    BaseFactory,
    schemaKeysFactory,
    schemaFieldFactory,
    schemaKeyWordFactory,
    schemaTypeFactory
};
