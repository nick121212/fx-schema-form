var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { PureComponent } from "react";
import schemaFormReact from "fx-schema-form-react";
const { schemaFormTypes } = schemaFormReact;
export const name = "extraWidget";
export const hoc = (hocFactory) => {
    return () => {
        return (Component) => {
            let TempComponentHoc = class TempComponentHoc extends PureComponent {
                render() {
                    const { uiSchema, getOptions, currentTheme, formItemNode, arrayLevel, arrayIndex, getTitle, getPathKeys, parentKeys, getRequiredKeys, children, globalOptions, schemaId, reducerKey } = this.props, options = getOptions(this.props, schemaFormTypes.hoc, name), extraProps = getRequiredKeys(this.props, options.includeKeys, options.excludeKeys), { widget = null } = (formItemNode && formItemNode.value) ? formItemNode.value.toJS() : {};
                    if (widget && currentTheme.widgetFactory.has(widget.key)) {
                        let WidgetComponent = hocFactory.get("data")({
                            meta: true,
                            metaKeys: ["options"]
                        })(currentTheme.widgetFactory.get(widget.key));
                        return React.createElement(Component, Object.assign({}, extraProps),
                            React.createElement(WidgetComponent, { key: widget.key, schemaId: schemaId, reducerKey: reducerKey, uiSchema: uiSchema, arrayLevel: arrayLevel, arrayIndex: arrayIndex, getOptions: getOptions, parentKeys: [...parentKeys], getTitle: getTitle, getPathKeys: getPathKeys, globalOptions: globalOptions }),
                            children);
                    }
                    return React.createElement(Component, Object.assign({}, extraProps));
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
//# sourceMappingURL=widget.js.map