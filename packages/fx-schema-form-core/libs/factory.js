import { BaseFactory } from "./libs/factory";
export const schemaFieldFactory = new BaseFactory();
export const schemaKeyWordFactory = new BaseFactory();
export const schemaTypeFactory = new BaseFactory();
export const schemaKeysFactory = new BaseFactory();
export const convertKeys = ($id, schema) => {
    schemaKeyWordFactory.forEach((key, val) => {
        if (schema) {
            schema = val($id, schema);
        }
    });
    return schema;
};
//# sourceMappingURL=factory.js.map