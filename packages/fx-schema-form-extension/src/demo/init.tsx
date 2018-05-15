import Immutable from "immutable";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import ajv from "ajv";
import React, { PureComponent } from "react";
import ajvErrors from "ajv-errors";
import { compose, shouldUpdate, onlyUpdateForKeys } from "recompose";
import { Button } from "antd";
// import { SortableContainer, SortableElement, arrayMove } from "react-sortable-hoc";
import { ResolveLib } from "fx-schema-form-core";
import schemaFormReact from "fx-schema-form-react";
import { NoneTemp, AntdCardTemp, AntdFormItemTemp, DivTemp } from "./templates";
import { AntdCheckboxWidget, AntdInputWidget, AntdInputNumberWidget, AntdSelectWidget } from "./widgets";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { design, div, checkbox, style, oneof, tree } from "./schemas";

export { globalOptions } from "./options/normal";
export { globalOptionsOfDesign, globalOptionsOfDesign1 } from "./options/design";
export { globalOptions as treeGlobalOptions } from "./options/tree";
export { globalOptions as designGlobalOptions } from "./options/oneof";

schemaFormReact.defaultTheme.tempFactory.add("default", NoneTemp as any);
schemaFormReact.defaultTheme.tempFactory.add("card", AntdCardTemp as any);
schemaFormReact.defaultTheme.tempFactory.add("formitem", AntdFormItemTemp as any);
schemaFormReact.defaultTheme.tempFactory.add("div", DivTemp as any);

schemaFormReact.defaultTheme.widgetFactory.add("checkbox", AntdCheckboxWidget as any);
schemaFormReact.defaultTheme.widgetFactory.add("boolean", AntdCheckboxWidget as any);
schemaFormReact.defaultTheme.widgetFactory.add("default", AntdInputWidget as any);
schemaFormReact.defaultTheme.widgetFactory.add("number", AntdInputNumberWidget as any);
schemaFormReact.defaultTheme.widgetFactory.add("select", AntdSelectWidget as any);


export const curAjv: ajv.Ajv = new ajv({
    allErrors: true,
    jsonPointers: true,
    useDefaults: true,
    format: "full",
    $data: true,
    errorDataPath: "property",
    removeAdditional: true,
});

let designResolve = [
    new ResolveLib(curAjv, design as any),
    new ResolveLib(curAjv, div as any),
    new ResolveLib(curAjv, checkbox as any),
    new ResolveLib(curAjv, style as any),
    new ResolveLib(curAjv, oneof as any),
    new ResolveLib(curAjv, tree as any),
];

curAjv.addKeyword("equal", {
    async: false,
    inline: (it: any, keyword: string, schema: string) => {
        let expr = "";

        expr += "((" + it.util.getData((it.dataLevel || "") + "/" + schema,
            it.dataLevel, it.dataPathArr) + ") === (" + "data" + (it.dataLevel || "") + "));";

        return expr;
    }
});

