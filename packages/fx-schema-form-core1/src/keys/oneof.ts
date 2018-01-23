
import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { ResolveLib } from "../libs/resolve";


export default (schema: JSONSchema6, ajv: Ajv) => {
    if (schema && schema.oneOf) {
        schema.oneOf.map((schemaOfOne: JSONSchema6) => {

            let resolve = new ResolveLib(ajv, schemaOfOne);
            // if (s.resolve) {
            //     return s;
            // }
            // return options.compileSchema(schema.keys, s, options);

            return resolve.mergeSchema;
        });
    }

    return schema;
};
