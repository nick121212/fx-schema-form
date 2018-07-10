import { BaseFactory } from "./libs/factory";
export const schemaFieldFactory = new BaseFactory();
export const schemaKeyWordFactory = new BaseFactory();
export const schemaTypeFactory = new BaseFactory();
export const schemaKeysFactory = new BaseFactory();
export const convertKeys = ($id, schema, ajv) => {
    schemaKeyWordFactory.forEach((key, val) => {
        schema = val($id, schema, ajv);
    });
    return schema;
};
//# sourceMappingURL=factory.js.map