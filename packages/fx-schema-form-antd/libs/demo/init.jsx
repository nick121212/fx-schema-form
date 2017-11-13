var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
for (var key in templates1) {
    if (templates1.hasOwnProperty(key)) {
        var template = templates1[key];
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
var ItemButtons = (function (_super) {
    __extends(ItemButtons, _super);
    function ItemButtons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemButtons.prototype.render = function () {
        var _this = this;
        var _a = this.props.meta.isShow, isShow = _a === void 0 ? true : _a;
        return (<div>
                <Button style={{ marginRight: 5 }} type="primary" shape="circle" icon="plus" ghost={true} onClick={function () { _this.props.addItem(); }}></Button>
                <Button type={!isShow ? "dashed" : "primary"} shape="circle" icon={isShow ? "shrink" : "arrows-alt"} onClick={function () { _this.props.toggleItem(); }}></Button>
            </div>);
    };
    return ItemButtons;
}(React.PureComponent));
export { ItemButtons };
var ItemChildButtons = (function (_super) {
    __extends(ItemChildButtons, _super);
    function ItemChildButtons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemChildButtons.prototype.render = function () {
        var _a = this.props, index = _a.index, removeItem = _a.removeItem, switchItem = _a.switchItem;
        var _b = this.props.meta.isShow, isShow = _b === void 0 ? true : _b;
        return (<Popover placement="topLeft" title={null} content={(<div>
                    <Popconfirm style={{ marginRight: 5 }} title="Are you sure？" onConfirm={function () {
            removeItem(index);
        }} okText="Yes" cancelText="No">
                        <Button ghost={true} type="danger" shape="circle" icon="delete"></Button>
                    </Popconfirm>
                    <Button style={{ marginRight: 5 }} ghost={false} type="dashed" shape="circle" icon="packup" onClick={function () { switchItem(index, index - 1); }}></Button>
                    <Button ghost={false} type="dashed" shape="circle" icon="unfold" onClick={function () { switchItem(index, index + 1); }}></Button>
                </div>)} trigger="hover">
                <Button icon="switch" shape="circle"></Button>
            </Popover>);
    };
    return ItemChildButtons;
}(React.PureComponent));
export { ItemChildButtons };
var globalOptions = {
    "ui:temp": ["formItem"],
    "boolean": {
        "widget": "switch"
    },
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
export { curAjv as ajv, schemaFormOptions, globalOptions };
//# sourceMappingURL=init.jsx.map