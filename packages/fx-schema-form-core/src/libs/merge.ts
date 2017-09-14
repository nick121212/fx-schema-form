
import * as Ajv from "ajv";

import { uiSchemaSchema } from "./uischema";
import { BaseFactory } from "./factory";
import { array, object } from "./types";

/**
 * 遍历schema，生成map
 * @param keys    当前的keys
 * @param schema  schema
 * @param options 参数配置
 */
const compileSchema = (keys: Array<string>, schema: any, options: any) => {
    switch (schema.type) {
        case "object":
            object(schema, keys, Object.assign({}, options, { compileSchema }));
            break;
        case "array":
            array(schema, keys, Object.assign({}, options, { compileSchema }));
            break;
        default:
            break;
    }
};

/**
 * 合并schema和uiSchema
 * @param map          当前生成的schema的map
 * @param parentKeys   父schema的keys
 * @param schema       schema
 * @param uiSchemas    uiSchema
 * @param options      参数
 */
const mergetUiSchema = (map: BaseFactory<any>, parentKeys: Array<string>, schema: any, uiSchemas: Array<any>, options: any) => {
    let idx = uiSchemas.indexOf("*");
    let uiSchemasFirst = [], uiSchemasLast = [];
    let keys = {};

    if (idx >= 0) {
        uiSchemas.slice(0, idx).forEach((keyProp: any) => {
            let key = keyProp.key || keyProp.join("/");
            let uiSchema = null;

            if (map.has(key)) {
                keys[key] = true;
                uiSchema = Object.assign({}, map.get(key), typeof keyProp === "string" ? { uiSchema: {} } : { uiSchema: keyProp });

                if (uiSchema.uiSchema.items) {
                    uiSchema.uiSchema.items = mergetUiSchema(map, [], uiSchema.items, uiSchema.uiSchema.items, options);
                }
                delete uiSchema.$ref;
                uiSchemasFirst.push(uiSchema);
            }
        });
    }

    uiSchemas.slice(idx + 1).forEach((keyProp: any) => {
        let key = keyProp.key || keyProp.keys.join("/");
        let uiSchema = null;

        if (map.has(key)) {
            keys[key] = true;
            uiSchema = Object.assign({}, map.get(key), typeof keyProp === "string" ? { uiSchema: {} } : { uiSchema: keyProp });
            if (uiSchema.uiSchema.items) {
                uiSchema.uiSchema.items = mergetUiSchema(map, [], uiSchema.items, uiSchema.uiSchema.items, options);
            }
            delete uiSchema.$ref;
            uiSchemasLast.push(uiSchema);
        }
    });

    /**
     * 如果是对象的话，则遍历对象下的properties属性
     */
    if (idx >= 0 && schema.type === "object" && schema.properties) {
        Object.keys(schema.properties).forEach(keyProps => {
            let keyPath = parentKeys.concat([keyProps]);

            if (map.has(keyPath.join("/")) && !keys[keyProps]) {
                let uiSchema = Object.assign({ uiSchema: {} }, map.get(keyPath.join("/")));

                delete uiSchema.$ref;
                uiSchemasFirst.push(uiSchema);
            }
        });
    }

    // 如果是数组
    if (idx >= 0 && schema.type === "array" && schema.items) {
        // 如果数组的item是对象，则递归生成
        if (schema.items.type === "object") {
            if (options.depth < options.maxDepth) {
                uiSchemasFirst = uiSchemasFirst.concat(merge(options.key, schema.items, uiSchemas, Object.assign({},
                    options, {
                        parentKeys: options.parentKeys.concat(["-"])
                    }))
                );
            }
        }

        // 如果数组的item不是对象，添加一个普通的数据
        if (schema.items.type !== "object") {
            let keyProps = "-";
            let keyPath = parentKeys.concat([keyProps]);

            if (map.has(keyPath.join("/")) && !keyPath[keyProps]) {
                let uiSchema = Object.assign({ uiSchema: {} }, map.get(keyPath.join("/")));

                delete uiSchema.$ref;
                uiSchemasFirst.push(uiSchema);
            }
        }
    }

    return [].concat(uiSchemasFirst.concat(uiSchemasLast));
};

/**
 * 合并schema和uiSchema
 * @param key         当前schema的key
 * @param schema      schema
 * @param uiSchema    uiSchema
 * @param options     参数
 */
const merge = (key: string, schema: any, uiSchema: Array<any> = ["*"], options: any = {}) => {
    if (!options.ajv) {
        options.ajv = new Ajv({ $data: true });

    }
    if (!options.map) {
        options.map = new BaseFactory<any>();
    }

    // 验证schema的正确性
    if (!options.ajv.validateSchema(schema)) {
        return console.error("schema", options.ajv.errors);
    }
    // 验证uiSchema的正确性
    if (uiSchema && !options.ajv.validate(uiSchemaSchema, uiSchema)) {
        return console.error("uiSchema", options.ajv.errors);
    }
    /**
     * 如果为空，则全部显示
     */
    // if (!uiSchema || !uiSchema.length) {
    //     uiSchema = ["*"];
    // }

    // schema添加到ajv
    if (!options.ajv.getSchema(key)) {
        options.ajv.addSchema(schema, key);
    }

    /**
     * 生成map
     */
    compileSchema(options.parentKeys || [], schema, {
        map: options.map,
        ajv: options.ajv,
        key,
        depth: 1,
        maxDepth: 3,
        schemaPathKey: [`${key}#`]
    });

    if (options.depth) {
        options.depth++;
    }

    // 合并
    return mergetUiSchema(options.map, options.parentKeys, schema, uiSchema, Object.assign({ depth: 1 }, options, {
        key,
        maxDepth: 3,
        schemaPathKey: [`${key}#`]
    }));
};

export default merge;
