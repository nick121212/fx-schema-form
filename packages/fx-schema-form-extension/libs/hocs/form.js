var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { compose } from "recompose";
import Immutable from "immutable";
import schemaFormReact from "fx-schema-form-react";
const { SchemaForm, schemaFormTypes } = schemaFormReact;
export const name = "extraForm";
export const hoc = (hocFactory) => {
    return () => {
        return (Component) => {
            class EditFormComponent extends React.PureComponent {
                render() {
                    const { formItemNode, schemaId, uiSchema, parentKeys, getOptions, ajv, arrayLevel, arrayIndex, reducerKey } = this.props, options = getOptions(this.props, schemaFormTypes.hoc, name), { temps = [], widget = null } = (formItemNode && formItemNode.value) ? formItemNode.value.toJS() : {}, dataKeys = uiSchema && uiSchema.originKeys ? uiSchema.originKeys.slice(0, uiSchema.originKeys.length - 1) : [], forms = [...temps, widget];
                    return React.createElement("div", { className: "ba b-dashed" }, forms.map((temp) => {
                        if (!temp) {
                            return null;
                        }
                        return React.createElement(SchemaForm, { key: temp.key, schemaId: temp.schemaId || "", uiSchema: Object.assign({}, uiSchema, {
                                originKeys: [...dataKeys,
                                    "data", "options", temp.type || "temp", temp.key, "options"]
                            }), reducerKey: reducerKey, arrayLevel: arrayLevel, arrayIndex: arrayIndex, uiSchemas: temp.uiSchemas || ["*"], parentKeys: [...parentKeys], globalOptions: Immutable.fromJS(options.globalOptions), ajv: ajv });
                    }));
                }
            }
            let ComponentHoc = class ComponentHoc extends React.PureComponent {
                render() {
                    const { formItemNode, schemaId, uiSchema, parentKeys, getOptions, ajv, arrayLevel, arrayIndex } = this.props;
                    if (formItemNode && formItemNode.value && uiSchema && uiSchema.originKeys) {
                        return React.createElement("div", null,
                            React.createElement(Component, Object.assign({}, this.props)),
                            React.createElement(EditFormComponent, Object.assign({}, this.props)));
                    }
                    return React.createElement(Component, Object.assign({}, this.props));
                }
            };
            ComponentHoc = __decorate([
                compose(hocFactory.get("data")({
                    treeNode: true
                }))
            ], ComponentHoc);
            return ComponentHoc;
        };
    };
};
export default {
    name,
    hoc
};
//# sourceMappingURL=form.js.map