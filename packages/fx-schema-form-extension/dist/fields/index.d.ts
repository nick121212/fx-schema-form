import { DesignField } from "./design";
import { TreeField } from "./tree";
export declare const fields: ({
    [name]: typeof DesignField;
} | {
    [name]: typeof TreeField;
})[];
