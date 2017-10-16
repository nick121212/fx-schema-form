import React from "react";
import { compose } from "recompose";
/**
 * 包装Field的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 *  1. 加入属性FieldComponent   schema对应的fieldcomponent
 *  2. 加入属性WidgetComponent  schema对应的widgetcomponent
 *  3. HOC默认顺序：ThemeHoc -> FieldHoc -> ValidateHoc -> ArrayHoc -> TempHoc
 */
export const MakeHoc = (hocFactory, Component) => {
    class Hoc extends React.Component {
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
            // console.log("make render");
            return React.createElement(ComponentWithHocs, Object.assign({ getHocOptions: this.getHocOptions.bind(this) }, this.props));
        }
        getHocOptions() {
            const { mergeSchema, globalOptions } = this.props;
            const { uiSchema } = mergeSchema;
            const uiSchemaOptions = uiSchema.options || {};
            const hocOptions = Object.assign({}, globalOptions.hoc || {}, uiSchemaOptions.hoc || {});
            return hocOptions;
        }
    }
    return Hoc;
};
//# sourceMappingURL=make.js.map