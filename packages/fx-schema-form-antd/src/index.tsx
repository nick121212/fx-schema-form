export { SchemaForm, SchemaFormProps } from "./components/form";
export { SchemaFormItem, SchemaFormItemProps } from "./components/formitem";
export { SchemaFormItemBaseProps } from "./components/formitem/props";
export { FormReducer } from "./reducer/form";
export { defaultTheme, nsFactory } from "./factory";
export { RC } from "./types";
export { default as createForms } from "./libs/create";
export {
    hocFactory,
    ThemeHocOutProps,
    FieldHocOutProps,
    ArrayHocOutProps,
    MergeHocOutProps,
    MakeHocOutProps,
    ValidateHocOutProps
} from "./hocs";

import jpp from "json-pointer";

jpp.set = function set(obj, pointer, value) {
    let refTokens = Array.isArray(pointer) ? pointer : jpp.parse(pointer),
        nextTok: any = refTokens[0];

    // console.log("oeifjlkdajlfjld");

    for (let i = 0; i < refTokens.length - 1; ++i) {
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
        obj = obj[tok];

        if (!obj && nextTok) {
            if (!Number.isNaN(nextTok * 1)) {
                obj = [];
            } else {
                obj = {};
            }
        }
    }
    if (nextTok === "-" && Array.isArray(obj)) {
        nextTok = obj.length;
    }
    obj[nextTok] = value;

    return this;
};


// jpp({}).set("/a", 1);
