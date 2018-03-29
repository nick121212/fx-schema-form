import { NormalField, name as n1 } from "./normal";
import { ObjectField, name as n2 } from "./object";
import { ArrayField, name as n3 } from "./array";
declare const _default: ({
    [name]: typeof NormalField;
    default: typeof NormalField;
    object?: undefined;
    array?: undefined;
} | {
    [name]: typeof ObjectField;
    normal?: undefined;
    default?: undefined;
    array?: undefined;
} | {
    [name]: typeof ArrayField;
    normal?: undefined;
    default?: undefined;
    object?: undefined;
})[];
export default _default;
