
import React from "react";
import { compose } from "recompose";
import { BaseFactory } from "fx-schema-form-core";

import { ThemeHocOutProps } from "./theme";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
import { defaultTheme } from "../../factory";

export interface MakeHocOutProps {
    FieldComponent: RC<any, any>;
    WidgetComponent: RC<any, any>;
}

/**
 * 包装Field的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 * 加入属性FieldComponent   schema对应的fieldcomponent
 * 加入属性WidgetComponent  schema对应的widgetcomponent
 * HOC默认顺序：ThemeHoc -> FieldHoc -> ValidateHoc -> ArrayHoc -> TempHoc
 */
export const MakeHoc = (hocFactory: BaseFactory<any>, Component: any): RC<SchemaFormItemBaseProps & MakeHocOutProps, any> => {
    class Hoc extends React.Component<SchemaFormItemBaseProps & MakeHocOutProps, any> {
        private makeField = "ui:item.hoc";

        public shouldComponentUpdate() {
            return false;
        }

        public render(): JSX.Element {
            const { mergeSchema, globalOptions } = this.props;
            const { uiSchema = { options: {} }, keys, type } = mergeSchema;
            const typeDefaultOptions = globalOptions[type] || {};
            const hocs = uiSchema[this.makeField] ||
                typeDefaultOptions[this.makeField] ||
                globalOptions[this.makeField] || ["theme", "field", "validate", "array", "temp"];

            let ComponentWithHocs = compose(...hocs.map(hoc => hocFactory.get(hoc)))(Component);

            console.log("make render");

            return <ComponentWithHocs {...this.props} />;
        }
    }

    return Hoc;
};
