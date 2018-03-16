var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { PureComponent } from "react";
import Select from "antd/lib/select";
import { fromJS } from "immutable";
export class AntdSelectWidget extends PureComponent {
    setDefaultProps() {
        const props = {};
        if (this.props.formItemData !== undefined) {
            props.defaultValue = this.props.formItemData;
        }
        return { options: props };
    }
    render() {
        const { getOptions, uiSchema, updateItemData, validate, getTitle, formItemMeta } = this.props, { keys = [], readonly = false } = uiSchema || {}, metaOptions = formItemMeta ? formItemMeta.getIn(["options", "widget", "select"]) : fromJS({}), widgetOptions = getOptions(this.props, "widget", "select", metaOptions);
        return (React.createElement(Select, Object.assign({ onChange: (value, option) => __awaiter(this, void 0, void 0, function* () {
                updateItemData(this.props, value, yield validate(this.props, value));
            }), disabled: readonly, placeholder: getTitle(this.props) }, widgetOptions.options, this.setDefaultProps())));
    }
}
//# sourceMappingURL=select.js.map