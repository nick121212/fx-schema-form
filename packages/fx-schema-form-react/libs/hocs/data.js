import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { createSelectorCreator, defaultMemoize } from "reselect";
import Immutable, { is } from "immutable";
import { schemaFormTypes } from "../models";
const fxSelectorCreator = createSelectorCreator(defaultMemoize, is);
export const name = "data";
export const hoc = (hocFactory) => {
    return (settings = {
            data: true
        }) => {
        const getItemDataHoc = (parentKeys, rootReducerKey, keys) => {
            let getFormItemData = (state) => {
                let dataKeys = [...rootReducerKey, ...parentKeys, "data"];
                if (settings.root) {
                    return state.getIn(dataKeys);
                }
                dataKeys = [...dataKeys, ...keys];
                if (settings.data && state.hasIn(dataKeys)) {
                    let formItemData = state.getIn(dataKeys);
                    if (formItemData !== undefined) {
                        if (!settings.dataLength) {
                            return formItemData;
                        }
                        else {
                            if (Immutable.List.isList(formItemData)) {
                                return formItemData.size;
                            }
                            return 0;
                        }
                    }
                }
            };
            let getFormItemMeta = (state) => {
                let metaKeys = [...rootReducerKey, ...parentKeys, "meta"];
                if (settings.meta && state.hasIn(metaKeys)) {
                    let rootNode = state.getIn(metaKeys), childNode = rootNode.containPath([...keys]);
                    if (childNode && childNode.value) {
                        if (settings.metaKeys) {
                            return childNode.value.filter((val, key) => {
                                return settings.metaKeys.indexOf(key) >= 0;
                            });
                        }
                        return childNode.value;
                    }
                }
            };
            let getRoot = (state) => {
                if (!settings.treeNode) {
                    return null;
                }
                let metaKeys = [...rootReducerKey, ...parentKeys, "meta"];
                let rootNode = state.getIn(metaKeys);
                let childNode = rootNode.containPath([...keys]);
                if (childNode) {
                    return childNode;
                }
                return rootNode.addChild([...keys]);
            };
            return fxSelectorCreator([getFormItemData, getFormItemMeta, getRoot], (formItemData, formItemMeta, formItemNode) => {
                const rtn = {};
                if (formItemData !== undefined && formItemData !== null) {
                    rtn.formItemData = formItemData;
                }
                if (formItemMeta !== undefined && formItemMeta !== null) {
                    rtn.formItemMeta = formItemMeta;
                }
                if (formItemNode !== undefined && formItemNode !== null) {
                    rtn.formItemNode = formItemNode;
                }
                return rtn;
            });
        };
        return (Component) => {
            class DataComponentHoc extends PureComponent {
                constructor(props) {
                    super(props);
                    this.ComponentWithHoc = Component;
                    const { uiSchema, getOptions } = this.props, { keys = [] } = this.props.uiSchema || {}, options = getOptions(this.props, schemaFormTypes.hoc, name);
                    if (!options.rootReducerKey || options.rootReducerKey.constructor !== Array) {
                        console.error("dataHoc missing property rootReducerKey.should be a Array.");
                    }
                    else {
                        this.ComponentWithHoc = connect(getItemDataHoc(this.props.parentKeys, options.rootReducerKey, keys))(Component);
                    }
                }
                render() {
                    const ComponentWithHoc = this.ComponentWithHoc;
                    return React.createElement(ComponentWithHoc, Object.assign({}, this.props));
                }
            }
            return DataComponentHoc;
        };
    };
};
export default {
    name,
    hoc
};
//# sourceMappingURL=data.js.map