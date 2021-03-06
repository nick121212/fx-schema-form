
import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { default as ResolveLib } from "../libs/resolve";
// import MergeLib from "../libs/merge";

/**
 * 解析schema中的关键字 definitions
 * 如果发现有definitions关键字，解析schema
 * @param  {string}      $id    当前的schema的ID
 * @param  {JSONSchema6} schema 当前的schema
 * @param  {Ajv}         ajv    ajv实例
 * @return {JSONSchema6}        处理过后的schema
 */
export default ($id: string, schema: JSONSchema6, ajv: Ajv): JSONSchema6 => {

    if (!schema) {
        return schema;
    }

    const definitions = schema.definitions;

    if (definitions) {
        for (const key in definitions) {
            if (definitions.hasOwnProperty(key)) {
                const element: JSONSchema6 | boolean = definitions[key];

                if (element !== false && element !== true) {
                    // tslint:disable-next-line:no-unused-expression
                    new ResolveLib(ajv, element, `${schema.$id}#/definitions/${key}`);

                    // console.log("-----------------------", `${schema.$id}#/${key}`);
                    // tslint:disable-next-line:no-unused-expression
                    // new ResolveLib(ajv, element, `${schema.$id}#/${key}`);
                }
            }
        }
    }

    return schema;
};
