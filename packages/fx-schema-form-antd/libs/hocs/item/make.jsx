import React from "react";
import { compose } from "recompose";
export const MakeHoc = (hocFactory, Component) => {
    class MakeComponentHoc extends React.PureComponent {
        constructor() {
            super(...arguments);
            this.fieldKey = "ui:item.hoc";
        }
        shouldComponentUpdate() {
            return false;
        }
        render() {
            const { mergeSchema, globalOptions } = this.props;
            const { uiSchema = { options: {} }, keys, type } = mergeSchema;
            const typeDefaultOptions = globalOptions[type] || {};
            const hocs = uiSchema[this.fieldKey] ||
                typeDefaultOptions[this.fieldKey] ||
                globalOptions[this.fieldKey] || ["theme", "field", "validate", "array", "temp"];
            let ComponentWithHocs = compose(...hocs.map(hoc => hocFactory.get(hoc)))(Component);
            return <ComponentWithHocs getHocOptions={this.getHocOptions.bind(this)} {...this.props}/>;
        }
        getHocOptions() {
            const { mergeSchema, globalOptions } = this.props;
            const { uiSchema } = mergeSchema;
            const uiSchemaOptions = uiSchema.options || {};
            const hocOptions = Object.assign({}, globalOptions.hoc || {}, uiSchemaOptions.hoc || {});
            return hocOptions;
        }
    }
    return MakeComponentHoc;
};
//# sourceMappingURL=make.jsx.map