export { SchemaForm, SchemaFormProps } from "./components/form";
export { SchemaFormItem, SchemaFormItemProps } from "./components/formitem";
export { SchemaFormItemBaseProps } from "./components/formitem/props";
export { FormReducer } from "./reducer/form";
export { defaultTheme, nsFactory } from "./factory";
export { RC } from "./types";
export { conFactory } from "./container";
export { default as createForms, SchemaFormCreate } from "./libs/create";
export {
    hocFactory,
    ThemeHocOutProps,
    FieldHocOutProps,
    ArrayHocOutProps,
    MergeHocOutProps,
    MakeHocOutProps,
    ValidateHocOutProps,
    UtilsHocOutProps
} from "./hocs";

export { SchemaFormReducer } from "./reducer/schema.form";

import jpp from "json-pointer";

jpp.set = function set(obj, pointer, value) {
    let refTokens = Array.isArray(pointer) ? pointer : jpp.parse(pointer),
        nextTok: any = refTokens[0];

    for (let i = 0, n = refTokens.length; i < n - 1; ++i) {
        let tok: any = refTokens[i];
        if (tok === "-" && Array.isArray(obj)) {
            tok = obj.length;
        }
        nextTok = refTokens[i + 1];

        if (!(tok in obj)) {
            if (nextTok.match(/^(\d+|-)$/)) {
                obj[tok] = [];
            } else {
                obj[tok] = {};
            }
        }

        if (!obj[tok] && nextTok) {
            // let keys = refTokens.concat([]).splice(i);
            obj[tok] = !Number.isNaN(nextTok * 1) ? [] : {};
        }

        obj = obj[tok];
    }
    if (nextTok === "-" && Array.isArray(obj)) {
        nextTok = obj.length;
    }
    obj[nextTok] = value;

    return this;
};
