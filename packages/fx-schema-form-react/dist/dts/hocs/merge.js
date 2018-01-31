import * as tslib_1 from "tslib";
import React, { PureComponent } from "react";
import { MergeLib } from "fx-schema-form-core";
let totalTime = 0, timeid;
export default (hocFactory, settings = {}) => {
    return (Component) => {
        class MergeComponentHoc extends PureComponent {
            constructor(props) {
                super(props);
                const uiSchema = props.uiSchema ? Object.assign({}, props.uiSchema) : null;
                if (uiSchema) {
                    uiSchema.keys = uiSchema.originKeys;
                }
                const merge = new MergeLib(props.ajv, props.schemaId, uiSchema, props.uiSchemas);
                this._mergeUiSchemaList = merge.mergeUiSchemaList.map((v) => {
                    return this.mergeKeys(v);
                });
            }
            mergeKeys(mergeSchema) {
                const { arrayLevel = [] } = this.props;
                const arrayLevelCopy = arrayLevel.concat([]);
                mergeSchema = Object.assign({}, mergeSchema);
                mergeSchema.originKeys = [].concat(mergeSchema.keys);
                mergeSchema.keys = mergeSchema.keys.reverse().map((key) => {
                    if (key === "-") {
                        return arrayLevelCopy.pop();
                    }
                    return key;
                });
                mergeSchema.keys.reverse();
                return mergeSchema;
            }
            render() {
                const _a = this.props, { uiSchemas, uiSchema } = _a, extraProps = tslib_1.__rest(_a, ["uiSchemas", "uiSchema"]);
                return (React.createElement(Component, Object.assign({ mergeSchemaList: this._mergeUiSchemaList }, extraProps)));
            }
        }
        return MergeComponentHoc;
    };
};
//# sourceMappingURL=merge.js.map