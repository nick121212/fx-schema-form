import { StringField } from "./string";
import { ObjectField } from "./object";
import { ArrayField } from "./array";

export default {
    string: StringField,
    boolean: StringField,
    number: StringField,
    integer: StringField,
    object: ObjectField,
    array: ArrayField
};
