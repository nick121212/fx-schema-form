
import { Ajv } from "ajv";

export default (schema: any, options: any) => {
    if (schema.$ref) {
        return options.ajv.getSchema(options.key + schema.$ref).schema;
    }

    return schema;
};
