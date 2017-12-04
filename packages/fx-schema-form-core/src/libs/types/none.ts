import convert from "../keys";

export default (schema: any, parentKey: Array<string>, options: any) => {
    const currentSchema = convert(Object.assign({}, "", schema), options);

    const keys = parentKey.concat(currentSchema.keys || []);

    Object.assign(schema, currentSchema, { keys, resolve: true, depth: options.depth });

    // if(options.ajv.h)
    // delete schema.id;

    // if (schema.properties) {
    //     Object.keys(schema.properties).forEach((key: string) => {
    //         const schemaPathKey = options.schemaPathKey.concat(["properties", key]);
    //         const keys = parentKey.concat([key]);

    //         if (options.depth > options.maxDepth) {
    //             return;
    //         }

    //         const currentSchema = convert(Object.assign({}, schema.properties[key], {
    //             isRequired: (!!schema.required && schema.required.indexOf(key) !== -1),
    //             schemaPathKey: schemaPathKey,
    //             keys: [].concat(keys),
    //             resolve: true,
    //             depth: options.depth
    //         }), options);

    //         if (!options.map.has(keys.join("/"))) {
    //             options.map.add(keys.join("/"), currentSchema);
    //         }
    //         options.compileSchema(keys, Object.assign({}, currentSchema), Object.assign({},
    //             options, { depth: options.depth + 1, schemaPathKey }));
    //     });
    // }
};
