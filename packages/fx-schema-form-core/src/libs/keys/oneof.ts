
import { Ajv } from "ajv";

export default (schema: any, options: any) => {
    if (schema.oneOf) {
        schema.oneOf.map((s: any) => {
            if (s.resolve) {
                return s;
            }
            return options.compileSchema(schema.keys, s, options);
        });
    }

    return schema;
};
