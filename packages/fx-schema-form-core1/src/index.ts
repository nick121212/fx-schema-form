
import { ref, oneof } from "./keys";
import { array, none, object } from "./types";
import { BaseFactory } from "./libs/factory";
import { schemaFieldFactory, schemaKeyWordFactory, schemaTypeFactory } from "./factory";

export { ResolveLib } from "./libs/resolve";

schemaKeyWordFactory.add("ref", ref);
schemaKeyWordFactory.add("oneof", oneof);

// export type JSONSchema4TypeName = 'string' | 'number' | 'integer' | 'boolean'
//                                 | 'object' | 'array' | 'null' | 'any'

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
    BaseFactory,
    schemaFieldFactory,
    schemaKeyWordFactory,
    schemaTypeFactory
};
