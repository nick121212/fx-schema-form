import { NormalField } from "./normal";
import { ObjectField } from "./object";
import { ArrayField } from "./array";
declare const _default: ({
    [name]: typeof NormalField;
    default: typeof NormalField;
} | {
    [name]: typeof ObjectField;
} | {
    [name]: typeof ArrayField;
})[];
export default _default;
