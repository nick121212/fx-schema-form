import { NormalField } from "./normal";
import { ObjectField } from "./object";
import { ArrayField } from "./array";
declare const _default: {
    string: typeof NormalField;
    boolean: typeof NormalField;
    number: typeof NormalField;
    integer: typeof NormalField;
    null: typeof NormalField;
    object: typeof ObjectField;
    array: typeof ArrayField;
};
export default _default;
