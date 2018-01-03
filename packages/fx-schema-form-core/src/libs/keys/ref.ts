
import { Ajv } from "ajv";

export default (schema: any, options: any) => {
    if (schema.$ref) {
        schema.$ref = schema.$ref;
        schema = options.ajv.getSchema(schema.$ref).schema;
    }

    delete schema.$id;

    return schema;
};
