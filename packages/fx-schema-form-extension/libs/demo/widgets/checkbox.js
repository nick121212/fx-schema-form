var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { PureComponent } from "react";
import Checkbox from "antd/lib/checkbox";
import { fromJS } from "immutable";
export class AntdCheckboxWidget extends PureComponent {
    setDefaultProps() {
        const { uiSchema } = this.props;
        const props = {};
        if (this.props.formItemData !== undefined) {
            props.checked = this.props.formItemData;
        }
        else {
            props.checked = false;
        }
        return { options: props };
    }
    render() {
        const { getOptions, uiSchema, updateItemData, validate, getTitle, formItemMeta } = this.props, { keys = [], readonly = false } = uiSchema || {}, metaOptions = formItemMeta ? formItemMeta.getIn(["options", "widget", "checkbox"]) : fromJS({}), widgetOptions = getOptions(this.props, "widget", "checkbox", metaOptions);
        return (React.createElement(Checkbox, Object.assign({ onChange: (e) => __awaiter(this, void 0, void 0, function* () {
                if (updateItemData) {
                    updateItemData(this.props, e.target.checked, yield validate(this.props, e.target.checked));
                }
            }), disabled: readonly }, widgetOptions.options, this.setDefaultProps()), getTitle(this.props, metaOptions.get("options"))));
    }
}
//# sourceMappingURL=checkbox.js.map