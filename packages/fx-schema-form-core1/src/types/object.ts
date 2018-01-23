import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { schemaFieldFactory, convertKeys } from "../factory";
import { ResolveLib } from "../libs/resolve";

export default (schema: JSONSchema6, $id: string, ajv: Ajv) => {
    if (schema.properties) {
        Object.keys(schema.properties).forEach((key: string) => {

            if (["properties", "items"].indexOf(key) >= 0) {
                throw new Error(`${key}为保留关键字.`);
            }

            let propertySchemaResolve = new ResolveLib(ajv,
                schema.properties[key] as JSONSchema6,
                [$id, "properties", key].join("/")
            );

            Object.assign(propertySchemaResolve.mergeSchema, {
                keys: ResolveLib.getDataKeys([$id, "properties", key].join("/"))
            });
        });
    }

    return schema;
};
