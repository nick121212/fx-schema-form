
import convert from "../keys";

export default (schema: any, parentKey: Array<string>, options: any) => {
    if (schema.items) {
        const schemaPathKey = options.schemaPathKey.concat(["items"]);
        const keys = parentKey.concat(["-"]);

        if (options.depth > options.maxDepth) {
            return;
        }

        console.log("array", schema);

        const currentSchema = convert(Object.assign({}, schema.items, {
            isRequired: (!!schema.required && schema.required.indexOf(schema.key) !== -1),
            keys: [].concat(keys),
            schmeaPathKey: schemaPathKey,
            resolve: true,
            depth: options.depth
        }), options);

        if (!options.map.has(keys.join("/"))) {
            options.map.add(keys.join("/"), currentSchema);
        }
        options.compileSchema(keys, currentSchema, Object.assign({}, options, { depth: options.depth + 1, schemaPathKey }));
    }
};
