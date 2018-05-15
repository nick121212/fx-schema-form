var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { PureComponent } from "react";
import { MergeLib } from "fx-schema-form-core";
export const name = "merge";
export const hoc = (hocFactory) => {
    return (settings = {}) => {
        return (Component) => {
            class MergeComponentHoc extends PureComponent {
                constructor(props) {
                    super(props);
                    const uiSchema = props.uiSchema ? Object.assign({}, props.uiSchema) : undefined;
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
                    const _a = this.props, { uiSchemas, uiSchema } = _a, extraProps = __rest(_a, ["uiSchemas", "uiSchema"]);
                    return (React.createElement(Component, Object.assign({ mergeSchemaList: this._mergeUiSchemaList }, extraProps)));
                }
            }
            return MergeComponentHoc;
        };
    };
};
export default {
    name,
    hoc
};
//# sourceMappingURL=merge.js.map