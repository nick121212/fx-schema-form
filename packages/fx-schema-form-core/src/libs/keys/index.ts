import { Ajv } from "ajv";

import { default as ref } from "./ref";
import { default as oneof } from "./oneof";


export default (schema: any, ajv: Ajv) => {
    let a = [ref, oneof].reduce((prev, next) => {
        return Object.assign({}, next(prev, ajv), prev);
    }, schema);

    return a;
};
