import { NormalField } from "./normal";
import { ObjectField } from "./object";
import { ArrayField } from "./array";

export default {
    string: NormalField,
    boolean: NormalField,
    number: NormalField,
    integer: NormalField,
    null: NormalField,
    object: ObjectField,
    array: ArrayField
};
