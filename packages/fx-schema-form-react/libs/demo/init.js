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
import { GridColField } from "./field/grid";
import templates from "../templates";
import templates1 from "./templates";
import widgets from "../widgets";
defaultTheme.widgetFactory.add("number", AntdInputNumberWidget);
defaultTheme.widgetFactory.add("integer", AntdInputNumberWidget);
defaultTheme.fieldFactory.add("geo", GeoPositionField);
defaultTheme.fieldFactory.add("gridcol", GridColField);
for (let key in widgets) {
    if (widgets.hasOwnProperty(key)) {
        let widget = widgets[key];
        defaultTheme.widgetFactory.add(key, widget);
    }
}
for (let key in templates) {
    if (templates.hasOwnProperty(key)) {
        let template = templates[key];
        defaultTheme.tempFactory.add(key, template);
    }
}
for (let key in templates1) {
    if (templates1.hasOwnProperty(key)) {
        let template = templates1[key];
        defaultTheme.tempFactory.add(key, template);
    }
}
const curAjv = new Ajv({
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
    async: "es7",
    useDefaults: true,
    $data: true,
    errorDataPath: "property",
    loadSchema: (uri) => {
        console.log(uri);
        return fetch(uri).then((res) => {
            return res.text();
        });
    }
});
const schemaFormOptions = {
    ajv: curAjv,
    maxDepth: 10
};
export class ItemButtons extends React.PureComponent {
    render() {
        const { isShow = true } = this.props.meta || {};
        return (React.createElement("div", null,
            React.createElement(Button, { style: { marginRight: 5 }, type: "primary", shape: "circle", icon: "plus", ghost: true, onClick: () => { this.props.addItem(); } }),
            React.createElement(Button, { type: !isShow ? "dashed" : "primary", shape: "circle", icon: isShow ? "shrink" : "arrows-alt", onClick: () => { this.props.toggleItem(); } })));
    }
}
export class ItemChildButtons extends React.PureComponent {
    render() {
        const { arrayIndex, removeItem, switchItem } = this.props;
        const { isShow = true } = this.props.meta || {};
        return (React.createElement(Popover, { placement: "topLeft", title: null, content: (React.createElement("div", null,
                React.createElement(Popconfirm, { style: { marginRight: 5 }, title: "Are you sure？", onConfirm: () => {
                        removeItem(arrayIndex);
                    }, okText: "Yes", cancelText: "No" },
                    React.createElement(Button, { ghost: true, type: "danger", shape: "circle", icon: "delete" })),
                React.createElement(Button, { style: { marginRight: 5 }, ghost: false, type: "dashed", shape: "circle", icon: "packup", onClick: () => { switchItem(arrayIndex, arrayIndex - 1); } }),
                React.createElement(Button, { ghost: false, type: "dashed", shape: "circle", icon: "unfold", onClick: () => { switchItem(arrayIndex, arrayIndex + 1); } }))), trigger: "hover" },
            React.createElement(Button, { icon: "switch", shape: "circle" })));
    }
}
const globalOptions = {
    "ui:temp": ["formItem"],
    "hoc": {
        "array": {
            ItemChildButtons: ItemChildButtons,
            ItemButtons: ItemButtons
        }
    },
    "formItem": {
        "hasFeedback": true,
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
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
    },
    "string": {
        "ui:temp": ["formItem"]
    },
    "boolean": {
        "widget": "switch",
        "ui:temp": ["formItem"]
    }
};
curAjv.addSchema(array);
curAjv.addSchema(schema);
curAjv.addSchema(normal);
curAjv.addSchema(flow);
curAjv.addKeyword("idExists", {
    async: true,
    type: "string",
    validate: ((sch, data) => {
        return new Promise((resolve, reject) => {
            if (!data) {
                return resolve(true);
            }
            setTimeout(() => {
                resolve(data === "nick");
            }, 200);
        });
    })
});
export { curAjv as ajv, schemaFormOptions, globalOptions };
//# sourceMappingURL=init.js.map