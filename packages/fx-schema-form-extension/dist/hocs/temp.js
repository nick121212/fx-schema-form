var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { PureComponent } from "react";
import { compose } from "recompose";
import schemaFormReact from "fx-schema-form-react";
const { SchemaForm, schemaFormTypes } = schemaFormReact;
export const name = "extraTemp";
export const hoc = (hocFactory) => {
    return () => {
        return (Component) => {
            let TempComponentHoc = class TempComponentHoc extends PureComponent {
                render() {
                    const { uiSchema, getOptions, currentTheme, formItemNode, getRequiredKeys } = this.props, options = getOptions(this.props, schemaFormTypes.hoc, name), extraProps = getRequiredKeys(this.props, options.includeKeys, options.excludeKeys), { temps = [] } = (formItemNode && formItemNode.value) ? formItemNode.value.toJS() : {};
                    return temps.map((temp) => {
                        return {
                            key: temp.key,
                            Temp: currentTheme.tempFactory.get(temp.key)
                        };
                    }).reduce((prev, { key, Temp }) => {
                        const { reducerKey, ajv, arrayLevel, arrayIndex, schemaId, globalOptions, parentKeys, getTitle, getPathKeys } = this.props;
                        const tempOptions = getOptions(this.props, schemaFormTypes.template, key), TempWithHoc = compose(...(tempOptions.tempHocs || []))(Temp);
                        return React.createElement(TempWithHoc, { key: key, tempKey: key, reducerKey: reducerKey, ajv: ajv, uiSchema: uiSchema, schemaId: schemaId, arrayLevel: arrayLevel, arrayIndex: arrayIndex, globalOptions: globalOptions, parentKeys: parentKeys, getTitle: getTitle, getOptions: getOptions, getPathKeys: getPathKeys, children: prev });
                    }, React.createElement(Component, Object.assign({}, extraProps)));
                }
            };
            TempComponentHoc = __decorate([
                (hocFactory.get("data")({
                    treeNode: true
                }))
            ], TempComponentHoc);
            return TempComponentHoc;
        };
    };
};
export default {
    name,
    hoc
};
//# sourceMappingURL=temp.js.map