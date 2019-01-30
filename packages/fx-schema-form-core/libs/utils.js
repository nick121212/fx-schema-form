export const isProd = (() => {
    const { NODE_ENV } = process.env;
    return typeof NODE_ENV !== "undefined" && NODE_ENV === `"production"`;
})();
export const warn = (message) => {
    if (!isProd) {
        console.error(message);
    }
    throw new Error(message);
};
export const hasOwnProperty = Object.prototype.hasOwnProperty;
export const toString = Object.prototype.toString;
function typeOf(value) {
    if (null === value) {
        return "null";
    }
    let type = typeof value;
    if ("undefined" === type || "string" === type) {
        return type;
    }
    let typeString = toString.call(value);
    switch (typeString) {
        case "[object Array]":
            return "array";
        case "[object Date]":
            return "date";
        case "[object Boolean]":
            return "boolean";
        case "[object Number]":
            return "number";
        case "[object Function]":
            return "function";
        case "[object RegExp]":
            return "regexp";
        case "[object Object]":
            if (undefined !== value.nodeType) {
                if (3 === value.nodeType) {
                    return /\S/.test(value.nodeValue) ? "textnode" : "whitespace";
                }
                else {
                    return "element";
                }
            }
            else {
                return "object";
            }
        default:
            return "unknow";
    }
}
export const isNumber = (n) => {
    return typeOf(n) === "number";
};
export const isArray = (n) => {
    return typeOf(n) === "array";
};
//# sourceMappingURL=utils.js.map