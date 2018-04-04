import React from "react";
import schemaFormReact from "fx-schema-form-react";
import { fromJS } from "immutable";
const { SchemaForm, schemaFormTypes, merge } = schemaFormReact;
export const name = "format";
export const hoc = (hocFactory) => {
    return () => {
        return (Component) => {
            class ComponentHoc extends React.PureComponent {
                render() {
                    const { uiSchema, getOptions } = this.props, { format, widget } = uiSchema, hocOptions = getOptions(this.props, schemaFormTypes.hoc, name);
                    let newUiSchema = uiSchema;
                    if (format && hocOptions[format] && !widget) {
                        newUiSchema = merge(fromJS(uiSchema), fromJS(hocOptions[format]));
                    }
                    return React.createElement(Component, Object.assign({}, this.props, { uiSchema: newUiSchema }));
                }
            }
            return ComponentHoc;
        };
    };
};
export default {
    name,
    hoc
};
//# sourceMappingURL=format.js.map