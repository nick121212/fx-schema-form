import ajv from "ajv";

import { curAjv } from "../init";

curAjv.addKeyword("idExists", {
    async: true,
    type: "string",
    validate: checkIdExists as any
});

function checkIdExists(schema: any, data: any) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data === "nick" || data === "nora") {
                return resolve(true);
            }
            reject(new (ajv.ValidationError as any)([{ message: "idExists不是nick" }] as any));
        }, 2000);
    });
}
