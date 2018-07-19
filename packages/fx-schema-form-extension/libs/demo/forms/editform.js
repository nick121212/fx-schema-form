var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Button } from "antd";
import schemaFormReact from "fx-schema-form-react";
import React from "react";
import { curAjv, globalOptions } from "../init";
const { SchemaForm } = schemaFormReact;
export class DashboardTestComponent extends React.PureComponent {
    render() {
        const { parentKeys, schemaId, validateAll, isValid, resetForm } = this.props;
        if (!this.props.root) {
            return null;
        }
        return React.createElement(React.Fragment, null,
            React.createElement(SchemaForm, { schemaId: schemaId, uiSchemas: ["*"], parentKeys: parentKeys, globalOptions: globalOptions, ajv: curAjv }),
            React.createElement(Button, { className: "mt3", onClick: () => __awaiter(this, void 0, void 0, function* () {
                    if (validateAll) {
                        const { data: dataRaw, isValid: isValidRaw } = yield validateAll();
                        console.log(dataRaw, isValidRaw);
                    }
                }) },
                "\u4FDD\u5B58\u8BBE\u7F6E(",
                String(isValid),
                ")"),
            React.createElement(Button, { onClick: () => {
                    if (resetForm) {
                        resetForm();
                    }
                }, className: " ml2 mt3" }, "\u653E\u5F03"));
    }
}
//# sourceMappingURL=editform.js.map