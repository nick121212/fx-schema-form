import React from "react";
import Ajv from "ajv";
import { Button, Popover, Popconfirm } from "antd";
import { defaultTheme } from "../index";
import { schema } from "./schema/normal";
import normal from "./schema/normal1";
import flow from "./schema/flow";
import array from "./schema/array";
import { AntdInputNumberWidget } from "./widget/number";
import { GeoPositionField } from "./field/geo";
import templates from "../templates";
import widgets from "../widgets";
// import ajvAsync from "ajv-async";
// console.log(ajvAsync);
// hocFactory.add("condition", ConditionHoc.bind(ConditionHoc, hocFactory));
defaultTheme.widgetFactory.add("number", AntdInputNumberWidget);
defaultTheme.widgetFactory.add("integer", AntdInputNumberWidget);
defaultTheme.fieldFactory.add("geo", GeoPositionField);
for (var key in widgets) {
    if (widgets.hasOwnProperty(key)) {
        var widget = widgets[key];
        defaultTheme.widgetFactory.add(key, widget);
    }
}
for (var key in templates) {
    if (templates.hasOwnProperty(key)) {
        var template = templates[key];
        defaultTheme.tempFactory.add(key, template);
    }
}
var curAjv = new Ajv({
    allErrors: true,
    removeAdditional: false,
    jsonPointers: true,
    extendRefs: true,
    inlineRefs: true,
    format: "full",
    multipleOfPrecision: 12,
    transpile: "nodent",
    loopRequired: Infinity,
    sourceCode: true,
    coerceTypes: true,
    missingRefs: true,
    // inlineRefs: false,
    // v5: true,
    async: "es7",
    useDefaults: true,
    $data: true,
    errorDataPath: "property",
    loadSchema: function (uri) {
        console.log(uri);
        return fetch(uri).then(function (res) {
            return res.text();
        });
    }
});
var schemaFormOptions = {
    ajv: curAjv
};
var globalOptions = {
    "ui:temp": ["formItem"],
    "boolean": {
        "widget": "switch"
    },
    "hoc": {
        "array": {
            createItemButtons: function (props) {
                var _a = props.meta.isShow, isShow = _a === void 0 ? true : _a;
                return (React.createElement("div", null,
                    React.createElement(Button, { style: { marginRight: 5 }, type: "primary", shape: "circle", icon: "plus", ghost: true, onClick: function () { props.addItem(); } }),
                    React.createElement(Button, { type: !isShow ? "dashed" : "primary", shape: "circle", icon: isShow ? "shrink" : "arrows-alt", onClick: function () { props.toggleItem(); } })));
            },
            createItemChildButtons: function (props, idx, maxLength) {
                return (React.createElement(Popover, { placement: "topLeft", title: null, content: (React.createElement("div", null,
                        React.createElement(Popconfirm, { style: { marginRight: 5 }, title: "Are you sure？", onConfirm: function () {
                                props.removeItem(idx);
                            }, okText: "Yes", cancelText: "No" },
                            React.createElement(Button, { ghost: true, type: "danger", shape: "circle", icon: "delete" })),
                        React.createElement(Button, { style: { marginRight: 5 }, ghost: false, type: "dashed", shape: "circle", icon: "packup", onClick: function () { props.switchItem(idx, idx - 1); } }),
                        React.createElement(Button, { ghost: false, type: "dashed", shape: "circle", icon: "unfold", onClick: function () { props.switchItem(idx, idx + 1); } }))), trigger: "hover" },
                    React.createElement(Button, { icon: "switch", shape: "circle" })));
            }
        }
    },
    "formItem": {
        "hasFeedback": true,
        "labelCol": {
            "xs": { "span": 24 },
            "sm": { "span": 3 },
        },
        "wrapperCol": {
            "xs": { "span": 24 },
            "sm": { "span": 19 },
        },
    },
    "row": {
        "type": "flex"
    },
    "col": {
        "xs": { "span": 24, "offset": 0 },
        "sm": { "span": 20, "offset": 2 },
    },
    "card": {
        "noHovering": true,
        "bordered": false
    },
    "object": {
        "ui:temp": ["card"]
    },
    "array": {
        "ui:temp": ["row", "col", "card"]
    }
};
curAjv.addSchema(array);
curAjv.addSchema(schema);
curAjv.addSchema(normal);
curAjv.addSchema(flow);
curAjv.addKeyword("idExists", {
    async: true,
    type: "string",
    validate: (function (sch, data) {
        return new Promise(function (resolve, reject) {
            if (!data) {
                return resolve(true);
            }
            setTimeout(function () {
                resolve(data === "nick");
            }, 200);
        });
    })
});
// let defaultSchema = {
//     "$async": true,
//     type: "object",
//     required: [],
//     properties: {
//         array1: {
//             $ref: "test#/properties/array1"
//         }
//     }
// };
// window.addEventListener("unhandledrejection", event => {
//     console.log(event);
// });
// curAjv.compileAsync(schema, true, async (err, validate) => {
//     try {
//         // console.log(validate.source.code);
//         await validate({
//             name: "dlkjkxfa",
//             array1: [{
//                 test: "nick",
//                 children: [{
//                     test: "nick3",
//                     children: [{
//                         children: [{
//                             test: "nick",
//                             children: [{}]
//                         }]
//                     }]
//                 }]
//             }]
//         }, "/", {});
//     } catch (e) {
//         console.log("dfadsfads", e);
//     }
// });
export { curAjv as ajv, schemaFormOptions, globalOptions };
//# sourceMappingURL=init.js.map