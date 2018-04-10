var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import Immutable from "immutable";
import schemaFormReact from "fx-schema-form-react";
const { schemaFormTypes } = schemaFormReact;
export const name = "copyToMeta";
export const hoc = (hocFactory) => {
    return (settings = {}) => {
        const innerHoc = (Component) => {
            let ComponentHoc = class ComponentHoc extends React.PureComponent {
                dataToMeta(props) {
                    const { getOptions, condition, uiSchema, getPathKeys, updateItemMeta, updateItemData } = props;
                    const normalOptions = getOptions(props, schemaFormTypes.hoc, name, Immutable.fromJS(settings || {}));
                    let meta = Immutable.fromJS({});
                    let isSet = false;
                    if (normalOptions.paths && normalOptions.paths.length && condition && uiSchema && uiSchema.keys) {
                        normalOptions.paths.forEach(({ path, to, defaultValue }) => {
                            let pathKeys = getPathKeys(uiSchema.keys, path);
                            isSet = true;
                            meta = meta.setIn(to, defaultValue);
                            if (condition.has(pathKeys.join("/"))) {
                                meta = meta.setIn(to, condition.get(pathKeys.join("/")));
                            }
                        });
                    }
                    if (isSet) {
                        updateItemMeta(this.props, null, meta.toJS());
                    }
                }
                componentWillMount() {
                    const { formItemMeta, updateItemMeta } = this.props;
                    const isMountCopyToMeta = formItemMeta ? formItemMeta.get("isMountCopyToMeta") : false;
                    if (!isMountCopyToMeta) {
                        this.dataToMeta(this.props);
                        updateItemMeta(this.props, null, {
                            isMountCopyToMeta: true
                        });
                    }
                }
                componentWillReceiveProps(props) {
                    if (props.condition !== this.props.condition) {
                        this.dataToMeta(props);
                    }
                }
                render() {
                    const { getOptions, getRequiredKeys, uiSchema } = this.props, options = getOptions(this.props, schemaFormTypes.hoc, name), extraProps = getRequiredKeys(this.props, options.includeKeys, options.excludeKeys);
                    return React.createElement(Component, Object.assign({}, extraProps));
                }
            };
            ComponentHoc = __decorate([
                hocFactory.get("data")({
                    meta: true,
                    metaKeys: ["isMountCopyToMeta"]
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
//# sourceMappingURL=copytometa.js.map