var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from "react";
import Immutable from "immutable";
import schemaFormReact from "fx-schema-form-react";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import Button from "antd/lib/button";
export const globalOptions = Immutable.fromJS({
    field: {
        default: {
            temps: ["formitem"],
            widgetHocs: [schemaFormReact.hocFactory.get("data")({
                    data: true
                })]
        },
        normal: {},
        object: {
            temps: ["card"]
        },
        tree: {
            hocs: ["utils", "theme", "field", "validate", (Component) => {
                    class HOC extends React.PureComponent {
                        constructor(props) {
                            super(props);
                            this._initArrayComponent = null;
                            this._initArrayComponent = this.initArrayComponent.bind(this);
                        }
                        initArrayComponent(prps) {
                            let { updateItemData, uiSchema, parentKeys, formItemData } = this.props;
                            return React.createElement(Button.Group, { key: "opt" },
                                (!formItemData || !formItemData.has("leftNode")) ? React.createElement(Button, { key: "left", type: "primary", onClick: () => {
                                        updateItemData({
                                            parentKeys,
                                            uiSchema: {
                                                keys: uiSchema.keys.concat("leftNode")
                                            }
                                        }, { value: prps.arrayLevel.length + "--left" });
                                    } }, "\u6DFB\u52A0\u5DE6\u8282\u70B9") : null,
                                (!formItemData || !formItemData.has("rightNode")) ? React.createElement(Button, { key: "right", type: "primary", onClick: () => {
                                        updateItemData({
                                            parentKeys,
                                            uiSchema: {
                                                keys: uiSchema.keys.concat("rightNode")
                                            }
                                        }, { value: prps.arrayLevel.length + "--right" });
                                    } }, "\u6DFB\u52A0\u53F3\u8282\u70B9") : null);
                        }
                        render() {
                            let _a = this.props, { formItemData } = _a, extraProps = __rest(_a, ["formItemData"]);
                            return React.createElement(Component, Object.assign({}, extraProps, { initArrayComponent: this._initArrayComponent }));
                        }
                    }
                    return schemaFormReact.hocFactory.get("data")({
                        data: true
                    })(HOC);
                }, "temp"],
            fieldHocs: [schemaFormReact.hocFactory.get("data")({
                    data: true
                })]
        }
    },
    temp: {
        card: {
            tempHocs: [schemaFormReact.hocFactory.get("data")({
                    data: true,
                    meta: true,
                    metaKeys: ["errorText", "isValid", "collapsing"]
                }), immutableRenderDecorator],
            options: {
                bordered: false
            }
        },
        formitem: {
            tempHocs: [schemaFormReact.hocFactory.get("data")({
                    meta: true,
                    metaKeys: ["isLoading", "errorText", "isValid", "dirty"]
                }), immutableRenderDecorator],
            options: {
                hasFeedback: true,
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
        data: {
            rootReducerKey: ["schemaForm"]
        },
        array: {}
    }
});
//# sourceMappingURL=tree.js.map