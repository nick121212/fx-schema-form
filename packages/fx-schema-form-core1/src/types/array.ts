import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { schemaFieldFactory } from "../factory";
import { ResolveLib } from "../libs/resolve";

export default (schema: JSONSchema6, $id: string, ajv: Ajv) => {
    if (schema.items) {
        let propertySchemaResolve = new ResolveLib(ajv,
            schema.items as JSONSchema6,
            [$id, "items"].join("/")
        );

        Object.assign(propertySchemaResolve.mergeSchema, {
            keys: ResolveLib.getDataKeys([$id, "items"].join("/"))
        });
    }

    return schema;
};
