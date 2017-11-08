"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var ajv_1 = require("ajv");
var antd_1 = require("antd");
var index_1 = require("../index");
var normal_1 = require("./schema/normal");
var normal1_1 = require("./schema/normal1");
var flow_1 = require("./schema/flow");
var array_1 = require("./schema/array");
var number_1 = require("./widget/number");
var geo_1 = require("./field/geo");
var grid_1 = require("./field/grid");
var templates_1 = require("../templates");
var templates_2 = require("./templates");
var widgets_1 = require("../widgets");
// import ajvAsync from "ajv-async";
// console.log(ajvAsync);
// hocFactory.add("condition", ConditionHoc.bind(ConditionHoc, hocFactory));
index_1.defaultTheme.widgetFactory.add("number", number_1.AntdInputNumberWidget);
index_1.defaultTheme.widgetFactory.add("integer", number_1.AntdInputNumberWidget);
index_1.defaultTheme.fieldFactory.add("geo", geo_1.GeoPositionField);
index_1.defaultTheme.fieldFactory.add("gridcol", grid_1.GridColField);
for (var key in widgets_1.default) {
    if (widgets_1.default.hasOwnProperty(key)) {
        var widget = widgets_1.default[key];
        index_1.defaultTheme.widgetFactory.add(key, widget);
    }
}
for (var key in templates_1.default) {
    if (templates_1.default.hasOwnProperty(key)) {
        var template = templates_1.default[key];
        index_1.defaultTheme.tempFactory.add(key, template);
    }
}
for (var key in templates_2.default) {
    if (templates_2.default.hasOwnProperty(key)) {
        var template = templates_2.default[key];
        index_1.defaultTheme.tempFactory.add(key, template);
    }
}
var curAjv = new ajv_1.default({
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
exports.ajv = curAjv;
var schemaFormOptions = {
    ajv: curAjv
};
exports.schemaFormOptions = schemaFormOptions;
var ItemButtons = /** @class */ (function (_super) {
    tslib_1.__extends(ItemButtons, _super);
    function ItemButtons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemButtons.prototype.render = function () {
        var _this = this;
        var _a = this.props.meta.isShow, isShow = _a === void 0 ? true : _a;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(antd_1.Button, { style: { marginRight: 5 }, type: "primary", shape: "circle", icon: "plus", ghost: true, onClick: function () { _this.props.addItem(); } }),
            react_1.default.createElement(antd_1.Button, { type: !isShow ? "dashed" : "primary", shape: "circle", icon: isShow ? "shrink" : "arrows-alt", onClick: function () { _this.props.toggleItem(); } })));
    };
    return ItemButtons;
}(react_1.default.PureComponent));
exports.ItemButtons = ItemButtons;
var ItemChildButtons = /** @class */ (function (_super) {
    tslib_1.__extends(ItemChildButtons, _super);
    function ItemChildButtons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemChildButtons.prototype.render = function () {
        var _a = this.props, index = _a.index, removeItem = _a.removeItem, switchItem = _a.switchItem;
        var _b = this.props.meta.isShow, isShow = _b === void 0 ? true : _b;
        return (react_1.default.createElement(antd_1.Popover, { placement: "topLeft", title: null, content: (react_1.default.createElement("div", null,
                react_1.default.createElement(antd_1.Popconfirm, { style: { marginRight: 5 }, title: "Are you sure？", onConfirm: function () {
                        removeItem(index);
                    }, okText: "Yes", cancelText: "No" },
                    react_1.default.createElement(antd_1.Button, { ghost: true, type: "danger", shape: "circle", icon: "delete" })),
                react_1.default.createElement(antd_1.Button, { style: { marginRight: 5 }, ghost: false, type: "dashed", shape: "circle", icon: "packup", onClick: function () { switchItem(index, index - 1); } }),
                react_1.default.createElement(antd_1.Button, { ghost: false, type: "dashed", shape: "circle", icon: "unfold", onClick: function () { switchItem(index, index + 1); } }))), trigger: "hover" },
            react_1.default.createElement(antd_1.Button, { icon: "switch", shape: "circle" })));
    };
    return ItemChildButtons;
}(react_1.default.PureComponent));
exports.ItemChildButtons = ItemChildButtons;
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
exports.globalOptions = globalOptions;
curAjv.addSchema(array_1.default);
curAjv.addSchema(normal_1.schema);
curAjv.addSchema(normal1_1.default);
curAjv.addSchema(flow_1.default);
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
//# sourceMappingURL=init.js.map