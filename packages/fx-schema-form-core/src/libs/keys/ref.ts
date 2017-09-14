
import { Ajv } from "ajv";

export default (schema: any, options: any) => {
    if (schema.$ref) {
        schema.$ref = schema.$ref;
        return options.ajv.getSchema(schema.$ref).schema;
    }

    return schema;
};
