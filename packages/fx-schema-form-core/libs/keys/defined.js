import { default as ResolveLib } from "../libs/resolve";
export default ($id, schema) => {
    const definitions = schema.definitions;
    if (!definitions) {
        return schema;
    }
    for (const key in definitions) {
        if (definitions.hasOwnProperty(key)) {
            const element = definitions[key];
            if (element !== false && element !== true) {
                new ResolveLib(element, `${schema.$id}#/definitions/${key}`);
            }
        }
    }
    return schema;
};
//# sourceMappingURL=defined.js.map