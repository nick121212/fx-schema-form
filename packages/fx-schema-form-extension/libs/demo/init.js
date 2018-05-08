import ajv from "ajv";
import { ResolveLib } from "fx-schema-form-core";
import schemaFormReact from "fx-schema-form-react";
import { NoneTemp, AntdCardTemp, AntdFormItemTemp, DivTemp } from "./templates";
import { AntdCheckboxWidget, AntdInputWidget, AntdInputNumberWidget, AntdSelectWidget } from "./widgets";
import { design, div, checkbox, style, oneof, tree } from "./schemas";
export { globalOptions } from "./options/normal";
export { globalOptionsOfDesign, globalOptionsOfDesign1 } from "./options/design";
export { globalOptions as treeGlobalOptions } from "./options/tree";
export { globalOptions as designGlobalOptions } from "./options/oneof";
schemaFormReact.defaultTheme.tempFactory.add("default", NoneTemp);
schemaFormReact.defaultTheme.tempFactory.add("card", AntdCardTemp);
schemaFormReact.defaultTheme.tempFactory.add("formitem", AntdFormItemTemp);
schemaFormReact.defaultTheme.tempFactory.add("div", DivTemp);
schemaFormReact.defaultTheme.widgetFactory.add("checkbox", AntdCheckboxWidget);
schemaFormReact.defaultTheme.widgetFactory.add("boolean", AntdCheckboxWidget);
schemaFormReact.defaultTheme.widgetFactory.add("default", AntdInputWidget);
schemaFormReact.defaultTheme.widgetFactory.add("number", AntdInputNumberWidget);
schemaFormReact.defaultTheme.widgetFactory.add("select", AntdSelectWidget);
export const curAjv = new ajv({
    allErrors: true,
    jsonPointers: true,
    useDefaults: true,
    format: "full",
    $data: true,
    errorDataPath: "property",
    removeAdditional: true,
});
let designResolve = [
    new ResolveLib(curAjv, design),
    new ResolveLib(curAjv, div),
    new ResolveLib(curAjv, checkbox),
    new ResolveLib(curAjv, style),
    new ResolveLib(curAjv, oneof),
    new ResolveLib(curAjv, tree),
];
curAjv.addKeyword("equal", {
    async: false,
    inline: (it, keyword, schema) => {
        let expr = "";
        expr += "((" + it.util.getData((it.dataLevel || "") + "/" + schema, it.dataLevel, it.dataPathArr) + ") === (" + "data" + (it.dataLevel || "") + "));";
        return expr;
    }
});
//# sourceMappingURL=init.js.map