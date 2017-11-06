
import React from "react";
import { compose } from "recompose";
import { BaseFactory } from "fx-schema-form-core";

import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
import { defaultTheme } from "../../factory";

export interface MakeHocOutProps {
    getHocOptions: () => any;
}

/**
 * 包装Field的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 *  1. 加入属性FieldComponent   schema对应的fieldcomponent
 *  2. 加入属性WidgetComponent  schema对应的widgetcomponent
 *  3. HOC默认顺序：ThemeHoc -> FieldHoc -> ValidateHoc -> ArrayHoc -> TempHoc
 */
export const MakeHoc = (hocFactory: BaseFactory<any>, Component: any): RC<SchemaFormItemBaseProps & MakeHocOutProps, any> => {
    class MakeComponentHoc extends React.PureComponent<SchemaFormItemBaseProps & MakeHocOutProps, any> {
        private fieldKey = "ui:item.hoc";

        public shouldComponentUpdate() {
            return false;
        }

        public render(): JSX.Element {
            const { mergeSchema, globalOptions } = this.props;
            const { uiSchema = { options: {} }, keys, type } = mergeSchema;
            const typeDefaultOptions = globalOptions[type] || {};
            const hocs = uiSchema[this.fieldKey] ||
                typeDefaultOptions[this.fieldKey] ||
                globalOptions[this.fieldKey] || ["theme", "field", "validate", "array", "temp"];

            let ComponentWithHocs = compose<SchemaFormItemBaseProps & MakeHocOutProps, any>
                (...hocs.map(hoc => hocFactory.get(hoc)))(Component);

            return <ComponentWithHocs getHocOptions={this.getHocOptions.bind(this)} {...this.props} />;
        }

        private getHocOptions(): any {
            const { mergeSchema, globalOptions } = this.props;
            const { uiSchema } = mergeSchema;
            const uiSchemaOptions = uiSchema.options || {};
            const hocOptions = Object.assign({}, globalOptions.hoc || {}, uiSchemaOptions.hoc || {});

            return hocOptions;
        }
    }

    return MakeComponentHoc;
};
