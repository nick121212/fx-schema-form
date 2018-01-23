import { Ajv, ValidateFunction } from "ajv";
import { JSONSchema6 } from "json-schema";

import { ResolveLib } from "../libs/resolve";

export default (schema: JSONSchema6, ajv: Ajv) => {
    if (schema && schema.$ref) {
        let validate: ValidateFunction = ajv.getSchema(schema.$ref);

        if (validate.schema) {
            let schemaAjv = validate.schema as JSONSchema6;

            // delete schemaAjv.$id;

            schemaAjv.$ref = schema.$ref;

            return schemaAjv;
            // new ResolveLib(ajv,)
            // schema = Object.assign({}, existSchema.schema as JSONSchema6, schema);
        } else {
            throw new Error("没有发现${schema.$ref}的schema。");
        }
    }

    return schema;
};
