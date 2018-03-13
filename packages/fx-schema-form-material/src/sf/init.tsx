import ajv from "ajv";
import { ResolveLib, BaseFactory } from "fx-schema-form-core";
import schemaFormReact from "fx-schema-form-react";
import { JSONSchema6 } from "json-schema";

import proxy, { getSchema } from "../modelproxy";
import temps from "./templates";
import widgets from "./widgets";
import hocs from "./hocs";

export { globalOptions } from "./options/default";

const { defaultTheme, hocFactory } = schemaFormReact;
const { tempFactory, widgetFactory, fieldFactory } = defaultTheme;

temps.forEach((temp: any) => {
    for (const key in temp) {
        if (temp.hasOwnProperty(key)) {
            tempFactory.add(key, temp[key]);
        }
    }
});

widgets.forEach((widget: any) => {
    for (const key in widget) {
        if (widget.hasOwnProperty(key)) {
            widgetFactory.add(key, widget[key]);
        }
    }
});

hocs.forEach((hoc: { name: string, hoc: (hocFactory: BaseFactory<any>) => any }) => {
    hocFactory.add(hoc.name, hoc.hoc(hocFactory));
});

export const curAjv: ajv.Ajv = new ajv({
    allErrors: true,
    jsonPointers: true,
    useDefaults: true,
    format: "full",
    $data: true,
    errorDataPath: "property",
    removeAdditional: true,
    loadSchema: (uri: string) => {
        return getSchema.get(null, {
            params: {
                id: uri + ".json"
            }
        }).then((schema: JSONSchema6) => {
            return curAjv.compileAsync(schema).then(() => {
                let resolve = new ResolveLib(curAjv, schema);

                return schema;
            }) as any;
        }).catch(() => {
            console.error("fetch schema [" + uri + "] error!");
        }) as any;
    }
});
