export declare const isProd: boolean;
export declare const warn: (message: string) => never;
export declare const hasOwnProperty: {
    (v: string): boolean;
    (v: PropertyKey): boolean;
};
export declare const toString: () => string;
// tslint:disable-next-line:max-line-length
export declare function typeOf(value: any): "string" | "undefined" | "array" | "number" | "null" | "boolean" | "object" | "date" | "function" | "regexp" | "textnode" | "whitespace" | "element" | "unknow";
export declare const isNumber: (n: any) => boolean;
export declare const isArray: (n: any) => boolean;
