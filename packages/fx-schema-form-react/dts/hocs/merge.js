var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from "react";
import { MergeLib } from "fx-schema-form-core";
let totalTime = 0, timeid;
export default (hocFactory, settings = {}) => {
    return (Component) => {
        class MergeComponentHoc extends React.PureComponent {
            constructor(props) {
                super(props);
                clearTimeout(timeid);
                let start = performance.now();
                this._merge = new MergeLib(props.ajv, props.schemaId, props.parentKeys, props.uiSchema);
                this._mergeUiSchemaList = this._merge.mergeUiSchemaList.map((v) => {
                    return this.mergeKeys(v);
                });
                totalTime += (performance.now() - start);
                timeid = setTimeout(() => {
                    console.log("merge所用时间", totalTime, Date.now());
                }, 1000);
            }
            mergeKeys(mergeSchema) {
                const { arrayLevel = [] } = this.props;
                const arrayLevelCopy = arrayLevel.concat([]);
                mergeSchema = Object.assign({}, mergeSchema);
                mergeSchema.originKeys = mergeSchema.keys.concat([]);
                mergeSchema.keys = mergeSchema.keys.map((key) => {
                    if (key === "-") {
                        return arrayLevelCopy.shift();
                    }
                    return key;
                });
                return mergeSchema;
            }
            render() {
                const _a = this.props, { uiSchema } = _a, extraProps = __rest(_a, ["uiSchema"]);
                return (React.createElement(Component, Object.assign({ mergeSchemaList: this._mergeUiSchemaList }, extraProps)));
            }
        }
        return MergeComponentHoc;
    };
};
//# sourceMappingURL=merge.js.map