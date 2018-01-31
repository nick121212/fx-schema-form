"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var immutable_1 = require("immutable");
var react_immutable_render_mixin_1 = require("react-immutable-render-mixin");
var ajv_1 = require("ajv");
var react_1 = require("react");
var ajvErrors = require("ajv-errors");
var recompose_1 = require("recompose");
var antd_1 = require("antd");
var index_1 = require("../../dist/index");
var templates_1 = require("./templates");
var widgets_1 = require("./widgets");
index_1.defaultTheme.tempFactory.add("default", templates_1.NoneTemp);
index_1.defaultTheme.tempFactory.add("card", templates_1.AntdCardTemp);
index_1.defaultTheme.tempFactory.add("formitem", templates_1.AntdFormItemTemp);
index_1.defaultTheme.widgetFactory.add("checkbox", widgets_1.AntdCheckboxWidget);
index_1.defaultTheme.widgetFactory.add("default", widgets_1.AntdInputWidget);
var ArrayComponent = (function (_super) {
    tslib_1.__extends(ArrayComponent, _super);
    function ArrayComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.addItem = function () {
            props.addItem(_this.props);
        };
        _this.hideItems = function (collapsing) {
            props.updateItemMeta(props, null, {
                collapsing: collapsing
            });
        };
        return _this;
    }
    ArrayComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, uiSchema = _a.uiSchema, formItemData = _a.formItemData, formItemMeta = _a.formItemMeta;
        var maxItems = uiSchema.maxItems;
        var _b = (formItemMeta ? formItemMeta.toJS() : {}).collapsing, collapsing = _b === void 0 ? false : _b;
        var canAdd = true;
        if (Number.isInteger(maxItems) && Number.isInteger(formItemData)) {
            canAdd = formItemData < maxItems;
        }
        return (react_1.default.createElement(antd_1.Button.Group, { key: "opt" },
            react_1.default.createElement(antd_1.Button, { key: "add" + canAdd, type: "primary", icon: "plus", disabled: !canAdd, onClick: this.addItem }),
            react_1.default.createElement(antd_1.Button, { key: "collapsing" + collapsing, type: "primary", icon: collapsing ? "arrow-up" : "arrow-down", onClick: function () {
                    _this.hideItems(!collapsing);
                } })));
    };
    ArrayComponent = tslib_1.__decorate([
        recompose_1.compose(index_1.hocFactory.get("validate")(), index_1.hocFactory.get("array")(), index_1.hocFactory.get("data")({
            rootReducerKey: ["schemaForm"],
            data: true,
            dataLength: true,
            meta: true
        })),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], ArrayComponent);
    return ArrayComponent;
}(react_1.PureComponent));
exports.ArrayComponent = ArrayComponent;
var ArrayItemComponent = (function (_super) {
    tslib_1.__extends(ArrayItemComponent, _super);
    function ArrayItemComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.removeItem = function () {
            props.removeItem(_this.props.parentKeys, _this.props.getPathKeys(_this.props.uiSchema.keys, "../"), _this.props.arrayIndex);
        };
        _this.moveTo = function () {
            props.moveItem(_this.props.parentKeys, _this.props.getPathKeys(_this.props.uiSchema.keys, "../"), _this.props.arrayIndex, 0);
        };
        return _this;
    }
    ArrayItemComponent.prototype.render = function () {
        var addItem = this.props.addItem;
        return react_1.default.createElement(antd_1.Button.Group, { key: "opt" },
            react_1.default.createElement(antd_1.Button, { key: "remove", type: "primary", icon: "minus", onClick: this.removeItem }),
            react_1.default.createElement(antd_1.Button, { key: "moveTo", type: "primary", icon: "swap-right", onClick: this.moveTo }));
    };
    ArrayItemComponent = tslib_1.__decorate([
        recompose_1.compose(index_1.hocFactory.get("validate")(), index_1.hocFactory.get("array")()),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], ArrayItemComponent);
    return ArrayItemComponent;
}(react_1.PureComponent));
exports.ArrayItemComponent = ArrayItemComponent;
exports.gloabelOptions = immutable_1.default.fromJS({
    field: {
        default: {
            temps: ["formitem"],
            widgetHocs: [index_1.hocFactory.get("data")({
                    rootReducerKey: ["schemaForm"],
                    data: true
                })]
        },
        array: {
            temps: ["card"],
            fieldHocs: [index_1.hocFactory.get("data")({
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
            tempHocs: [index_1.hocFactory.get("data")({
                    rootReducerKey: ["schemaForm"],
                    meta: true
                }), react_immutable_render_mixin_1.immutableRenderDecorator]
        },
        formitem: {
            tempHocs: [index_1.hocFactory.get("data")({
                    rootReducerKey: ["schemaForm"],
                    meta: true
                }), react_immutable_render_mixin_1.immutableRenderDecorator],
            options: {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 8 },
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 16 },
                },
            }
        }
    },
    hoc: {
        array: {
            ArrayComponent: ArrayComponent,
            ArrayItemComponent: ArrayItemComponent
        }
    }
});
exports.curAjv = new ajv_1.default({
    allErrors: true,
    jsonPointers: true,
    useDefaults: true,
    format: "full",
    $data: true,
    errorDataPath: "property",
    removeAdditional: true,
});
ajvErrors(exports.curAjv, {
    keepErrors: false,
    singleError: false
});
exports.curAjv.addKeyword("idExists", {
    async: true,
    type: "string",
    validate: checkIdExists
});
function checkIdExists(schema, data) {
    console.log("dfjkladjsklfklakdls");
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (data === "nick") {
                return resolve(true);
            }
            reject(new ajv_1.default.ValidationError([{ message: "idExists不是nick" }]));
        }, 2000);
    });
}
//# sourceMappingURL=init.js.map