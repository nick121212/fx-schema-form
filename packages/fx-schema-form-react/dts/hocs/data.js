var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { shouldUpdate } from 'recompose';
import { connect } from "react-redux";
import { createSelectorCreator, defaultMemoize } from "reselect";
import { is } from "immutable";
const fxSelectorCreator = createSelectorCreator(defaultMemoize, is);
const maps = {};
export default (hocFactory, settings = {
        data: true,
        rootReducerKey: ["schemaForm"]
    }) => {
    const getItemDataHoc = (parentKeys, keys) => {
        let getFormItemData = (state) => {
            let dataKeys = settings.rootReducerKey.concat([...parentKeys, "data", ...keys]);
            if (settings.data && state.hasIn(dataKeys)) {
                let formItemData = state.getIn(dataKeys);
                if (formItemData !== undefined) {
                    if (!settings.dataLength) {
                        return formItemData;
                    }
                    else {
                        return formItemData.size;
                    }
                }
            }
        };
        let getFormItemMeta = (state) => {
            let metaKeys = settings.rootReducerKey.concat([...parentKeys, "meta"]);
            if (settings.meta && state.hasIn(metaKeys)) {
                let rootNode = state.getIn(metaKeys);
                let childNode = rootNode.containPath([...parentKeys, ...keys]);
                if (childNode && childNode.value) {
                    return childNode.value;
                }
            }
        };
        return fxSelectorCreator([getFormItemData, getFormItemMeta], (formItemData, formItemMeta) => {
            const rtn = {};
            if (formItemData) {
                rtn.formItemData = formItemData;
            }
            if (formItemMeta) {
                rtn.formItemMeta = formItemMeta;
            }
            return rtn;
        });
    };
    return (Component) => {
        let DataComponentHoc = class DataComponentHoc extends React.PureComponent {
            render() {
                const { keys } = this.props.uiSchema;
                const hoc = connect(getItemDataHoc(this.props.parentKeys, keys));
                const ComponentWithHoc = hoc(Component);
                return React.createElement(ComponentWithHoc, Object.assign({}, this.props));
            }
        };
        DataComponentHoc = __decorate([
            shouldUpdate(() => false)
        ], DataComponentHoc);
        return DataComponentHoc;
    };
};
//# sourceMappingURL=data.js.map