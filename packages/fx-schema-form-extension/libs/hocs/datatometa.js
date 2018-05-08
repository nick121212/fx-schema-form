var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { compose } from "recompose";
import schemaFormReact from "fx-schema-form-react";
const { schemaFormTypes } = schemaFormReact;
export const name = "dataToMeta";
export const hoc = (hocFactory) => {
    return () => {
        return (Component) => {
            let ComponentHoc = class ComponentHoc extends React.PureComponent {
                dataToMeta(props) {
                    const { formItemData, uiSchema, parentKeys, formItemNode } = props, { keys = [] } = uiSchema || {};
                    if (formItemData && formItemNode) {
                        formItemData.map((child, index) => {
                            let childNodeKeys = [index, "children"], childNode = formItemNode.containPath(childNodeKeys);
                            if (!childNode) {
                                return formItemNode.addChild(childNodeKeys, child.get("data"));
                            }
                            if (childNode.value) {
                                childNode.value = childNode.value.merge(child.get("data"));
                            }
                            else {
                                childNode.value = child.get("data");
                            }
                        });
                    }
                }
                componentWillMount() {
                    console.log("this.props = ok; ");
                    this.dataToMeta(this.props);
                }
                componentWillUpdate(props) {
                    this.dataToMeta(props);
                }
                render() {
                    const { getOptions, getRequiredKeys, uiSchema } = this.props, options = getOptions(this.props, schemaFormTypes.hoc, name), extraProps = getRequiredKeys(this.props, options.includeKeys, options.excludeKeys);
                    return React.createElement(Component, Object.assign({}, extraProps));
                }
            };
            ComponentHoc = __decorate([
                compose(hocFactory.get("data")({
                    data: true,
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
//# sourceMappingURL=datatometa.js.map