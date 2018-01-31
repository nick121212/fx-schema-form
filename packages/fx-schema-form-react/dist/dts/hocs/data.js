import * as tslib_1 from "tslib";
import React, { PureComponent } from "react";
import { shouldUpdate } from "recompose";
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
        let DataComponentHoc = class DataComponentHoc extends PureComponent {
            render() {
                const { keys = [] } = this.props.uiSchema || {};
                const hoc = connect(getItemDataHoc(this.props.parentKeys, keys));
                const ComponentWithHoc = hoc(Component);
                return React.createElement(ComponentWithHoc, Object.assign({}, this.props));
            }
        };
        DataComponentHoc = tslib_1.__decorate([
            shouldUpdate(() => false)
        ], DataComponentHoc);
        return DataComponentHoc;
    };
};
//# sourceMappingURL=data.js.map