import { BaseFactory } from "./libs/factory";
export let schemaFieldFactory = new BaseFactory();
export let schemaKeyWordFactory = new BaseFactory();
export let schemaTypeFactory = new BaseFactory();
export let schemaKeysFactory = new BaseFactory();
export let convertKeys = (schema, ajv) => {
    schemaKeyWordFactory.forEach((key, val) => {
        schema = val(schema, ajv);
    });
    return schema;
};
//# sourceMappingURL=factory.js.map