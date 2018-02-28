import ajv from "ajv";
export { globalOptions } from "./options/normal";
export { globalOptionsOfDesign, globalOptionsOfDesign1 } from "./options/design";
export { globalOptions as treeGlobalOptions } from "./options/tree";
export { globalOptions as designGlobalOptions } from "./options/oneof";
export declare const curAjv: ajv.Ajv;
