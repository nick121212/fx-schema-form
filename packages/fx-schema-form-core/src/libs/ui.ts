import * as Ajv from "ajv";

import { uiSchemaSchema } from "./uischema";
import { BaseFactory } from "./factory";
import { array, object } from "./types";

export class UiMerge {

    private schemaMerge: Function;

    private getKey(keyProp: string | { key: string } | Array<string>) {
        if (typeof keyProp === "string") {
            return keyProp;
        }

        if ((keyProp as Array<string>).join) {
            return (keyProp as Array<string>).join("/");
        }

        if ((keyProp as any).key) {
            return (keyProp as any).key;
        }

        if ((keyProp as any).keys) {
            return (keyProp as any).keys.join("/");
        }

        if ((keyProp as any).uiSchema) {
            return (keyProp as any).uiSchema.key;
        }

        return "";
    }

    private mergeNormal(keyProp: any, map: BaseFactory<any>, keys: any, options: any): any {
        let key = this.getKey(keyProp);
        let uiSchema = null;

        if (map.has(key)) {
            keys[key] = true;

            uiSchema = Object.assign({}, map.get(key),
                typeof keyProp === "string" ? { uiSchema: {} } : { uiSchema: keyProp.uiSchema || keyProp });
            if (uiSchema.uiSchema.items) {
                uiSchema.uiSchema.items = this.merge(map, [], uiSchema.items, uiSchema.uiSchema.items, options);
            }
            // delete uiSchema.$ref;

            return uiSchema;
        }
    }

    private mergeObject(keyProp: any, map: BaseFactory<any>, parentKeys: Array<string>, keys: any) {
        let keyPath = parentKeys.concat([keyProp]);

        if (map.has(keyPath.join("/")) && !keys[keyProp]) {
            let uiSchema = Object.assign({ uiSchema: {} }, map.get(keyPath.join("/")));

            // delete uiSchema.$ref;

            return uiSchema;
        }
    }

    private mergeArray(map: BaseFactory<any>, parentKeys: Array<string>, schema: any, uiSchemas: Array<any>, options: any) {
        // 如果数组的item是对象，则递归生成
        if (schema.items.type === "object") {
            if (options.depth < options.maxDepth) {
                return this.schemaMerge(options.key, schema.items, uiSchemas, Object.assign({},
                    options, {
                        parentKeys: options.parentKeys.concat(["-"])
                    }));
            }
        }

        if (schema.items.type !== "object") {
            let keyProps = "-";
            let keyPath = parentKeys.concat([keyProps]);

            if (map.has(keyPath.join("/")) && !keyPath[keyProps]) {
                let uiSchema = Object.assign({ uiSchema: {} }, map.get(keyPath.join("/")));

                // delete uiSchema.$ref;

                return uiSchema;
            }
        }
    }

    public init(schemaMerge: Function) {
        this.schemaMerge = schemaMerge;
    }

    /**
     * 合并schema和uiSchema
     * @param map          当前生成的schema的map
     * @param parentKeys   父schema的keys
     * @param schema       schema
     * @param uiSchemas    uiSchema
     * @param options      参数
     */
    public merge(map: BaseFactory<any>, parentKeys: Array<string>, schema: any, uiSchemas: Array<any>, options: any) {
        let idx = uiSchemas.indexOf("*");
        let uiSchemasFirst = [], uiSchemasLast = [];
        let keys = {};

        if (idx >= 0) {
            uiSchemas.slice(0, idx).forEach((keyProp: any) => {
                let uiSchema = this.mergeNormal(keyProp, map, keys, options);

                if (uiSchema) {
                    uiSchemasFirst.push(uiSchema);
                } else {
                    if (keyProp.constructor === Object) {
                        uiSchemasFirst.push({ keys: [], uiSchema: keyProp });
                    }
                }
            });
        }

        uiSchemas.slice(idx + 1).forEach((keyProp: any) => {
            let uiSchema = this.mergeNormal(keyProp, map, keys, options);

            if (uiSchema) {
                uiSchemasLast.push(uiSchema);
            } else {
                if (keyProp.constructor === Object) {
                    uiSchemasLast.push({ keys: [], uiSchema: keyProp });
                }
            }
        });

        if (idx >= 0 && schema.type === "object" && schema.properties) {
            Object.keys(schema.properties).forEach(keyProp => {
                let uiSchema = this.mergeObject(keyProp, map, parentKeys, keys);

                if (uiSchema) {
                    uiSchemasFirst.push(uiSchema);
                }
            });
        }

        // 如果是数组
        if (idx >= 0 && schema.type === "array" && schema.items) {
            let uiSchema = this.mergeArray(map, parentKeys, schema, uiSchemas, options);

            if (uiSchema) {
                if (uiSchema.length) {
                    uiSchemasFirst = uiSchemasFirst.concat(uiSchema);
                } else {
                    uiSchemasFirst.push(uiSchema);
                }
            }
        }

        return [].concat(uiSchemasFirst.concat(uiSchemasLast));
    }
}

// export default new UiMerge();
