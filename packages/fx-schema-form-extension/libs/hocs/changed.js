var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import schemaFormReact from "fx-schema-form-react";
import { fromJS } from "immutable";
const { schemaFormTypes } = schemaFormReact;
export const name = "changed";
export const hoc = (hocFactory) => {
    return (settings = {}) => {
        const innerHoc = (Component) => {
            let ComponentHoc = class ComponentHoc extends React.PureComponent {
                dataToMeta(props, isInit = false) {
                    const { getOptions, condition, uiSchema } = props;
                    const normalOptions = getOptions(props, schemaFormTypes.hoc, name, fromJS(settings || {}));
                    if (normalOptions.onChanged && condition && uiSchema && uiSchema.keys) {
                        if (normalOptions.onChanged) {
                            normalOptions.onChanged(props, condition.toJS(), isInit);
                        }
                    }
                }
                componentWillMount() {
                    const { formItemMeta, updateItemMeta } = this.props;
                    const isMountChanged = formItemMeta ? formItemMeta.get("isMountChanged") : false;
                    if (!isMountChanged) {
                        this.dataToMeta(this.props, true);
                        updateItemMeta(this.props, null, {
                            isMountChanged: true
                        });
                    }
                }
                componentWillReceiveProps(props) {
                    if (props.condition !== this.props.condition) {
                        this.dataToMeta(props);
                    }
                }
                render() {
                    const { getOptions, getRequiredKeys } = this.props, options = getOptions(this.props, schemaFormTypes.hoc, name), extraProps = getRequiredKeys(this.props, options.includeKeys, options.excludeKeys);
                    return React.createElement(Component, Object.assign({}, extraProps));
                }
            };
            ComponentHoc = __decorate([
                hocFactory.get("data")({
                    meta: true,
                    metaKeys: ["isMountChanged"]
                })
            ], ComponentHoc);
            return ComponentHoc;
        };
        return hocFactory.get("wrapper")({
            hoc: innerHoc,
            hocName: name
        });
    };
};
export default {
    name,
    hoc
};
//# sourceMappingURL=changed.js.map