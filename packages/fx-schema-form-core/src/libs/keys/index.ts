import { Ajv } from "ajv";

import { default as ref } from "./ref";


export default (schema: any, ajv: Ajv) => {
    let a = [ref].reduce((prev, next) => {
        return Object.assign({}, next(prev, ajv), prev);
    }, schema);

    return a;
};
