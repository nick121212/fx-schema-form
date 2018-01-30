import Immutable from "immutable";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import ajv from "ajv";
import { defaultTheme, hocFactory } from "../index";
import { NoneTemp, AntdCardTemp, AntdFormItemTemp } from "./templates";
import { AntdCheckboxWidget, AntdInputWidget } from "./widgets";
defaultTheme.tempFactory.add("default", NoneTemp);
defaultTheme.tempFactory.add("card", AntdCardTemp);
defaultTheme.tempFactory.add("formitem", AntdFormItemTemp);
defaultTheme.widgetFactory.add("checkbox", AntdCheckboxWidget);
defaultTheme.widgetFactory.add("default", AntdInputWidget);
export const gloabelOptions = Immutable.fromJS({
    field: {
        default: {
            temps: ["formitem"],
            widgetHocs: [hocFactory.get("data")({
                    rootReducerKey: ["schemaForm"],
                    data: true
                })]
        },
        array: {
            temps: ["card"],
            fieldHocs: [hocFactory.get("data")({
                    rootReducerKey: ["schemaForm"],
                    data: true,
                    dataLength: true
                })]
        },
        normal: {},
        object: {
            temps: ["card"]
        }
    },
    temp: {
        card: {
            tempHocs: [hocFactory.get("data")({
                    rootReducerKey: ["schemaForm"],
                    meta: true
                }), immutableRenderDecorator]
        },
        formitem: {
            tempHocs: [hocFactory.get("data")({
                    rootReducerKey: ["schemaForm"],
                    meta: true
                }), immutableRenderDecorator]
        }
    }
});
export const curAjv = new ajv({
    allErrors: true,
    jsonPointers: true,
    useDefaults: true,
    $data: true,
    errorDataPath: "property",
    removeAdditional: true,
});
curAjv.addKeyword("idExists", {
    async: true,
    type: "string",
    validate: checkIdExists
});
function checkIdExists(schema, data) {
    console.log("dfjkladjsklfklakdls");
    return new Promise((resolve, reject) => {
        console.log("object");
        setTimeout(() => {
            if (data === "nick") {
                return resolve(true);
            }
            return reject(new Error("idExists不是nick"));
        }, 2000);
    });
}
let dataa = {};
curAjv.validate({
    type: "object",
    properties: {
        ddd: { type: "string", default: "nick" }
    }
}, dataa);
console.log(dataa);
//# sourceMappingURL=init.js.map