import ajv from "ajv";
import { curAjv } from "../init";
curAjv.addKeyword("idExists", {
    async: true,
    type: "string",
    validate: checkIdExists
});
function checkIdExists(schema, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data === "nick" || data === "nora") {
                return resolve(true);
            }
            reject(new ajv.ValidationError([{ message: "idExists不是nick" }]));
        }, 2000);
    });
}
//# sourceMappingURL=id.js.map