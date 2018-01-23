import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { schemaFieldFactory, convertKeys } from "../factory";
import { ResolveLib } from "../libs/resolve";

export default (schema: JSONSchema6, $id: string, ajv: Ajv) => {
    const currentSchema = convertKeys(schema, ajv);

    if (schemaFieldFactory.has([$id].join("/"))) {
        return schema;
    }

    if (currentSchema) {
        // const resolve = new ResolveLib(ajv, {}, $id);
        schemaFieldFactory.add([$id].join("/"), Object.assign({}, currentSchema, {
            keys: ResolveLib.getDataKeys($id)
        }));

        return currentSchema;
    } else {
        schemaFieldFactory.add([$id].join("/"), Object.assign({}, schema, {
            keys: ResolveLib.getDataKeys($id)
        }));
    }

    // console.log(schema, [$id].join("/"));

    return schema;
};
