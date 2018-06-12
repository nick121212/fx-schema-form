import { DesignField, name as n1 } from "./design";
import { TreeField, name as n2 } from "./tree";
export declare const fields: ({
    [name]: typeof DesignField;
    [name]?: undefined;
} | {
    [name]: typeof TreeField;
    [name]?: undefined;
})[];
