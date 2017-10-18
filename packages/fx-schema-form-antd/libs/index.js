export { SchemaForm } from "./components/form";
export { SchemaFormItem } from "./components/formitem";
export { FormReducer } from "./reducer/form";
export { defaultTheme, nsFactory } from "./factory";
export { default as createForms } from "./libs/create";
export { hocFactory } from "./hocs";
import jpp from "json-pointer";
jpp.set = function set(obj, pointer, value) {
    var refTokens = Array.isArray(pointer) ? pointer : jpp.parse(pointer), nextTok = refTokens[0];
    // console.log("oeifjlkdajlfjld");
    for (var i = 0; i < refTokens.length - 1; ++i) {
        var tok = refTokens[i];
        if (tok === "-" && Array.isArray(obj)) {
            tok = obj.length;
        }
        nextTok = refTokens[i + 1];
        if (!(tok in obj)) {
            if (nextTok.match(/^(\d+|-)$/)) {
                obj[tok] = [];
            }
            else {
                obj[tok] = {};
            }
        }
        obj = obj[tok];
        if (!obj && nextTok) {
            if (!Number.isNaN(nextTok * 1)) {
                obj = [];
            }
            else {
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
//# sourceMappingURL=index.js.map