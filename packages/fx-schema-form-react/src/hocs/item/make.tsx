
import React from "react";
import { compose, shouldUpdate } from "recompose";
import { BaseFactory } from "fx-schema-form-core";

import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
import { UtilsHocOutProps } from "./utils";

export interface MakeHocOutProps extends UtilsHocOutProps {

}

/**
 * 包装Field的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 *  1. 加入属性FieldComponent   schema对应的fieldcomponent
 *  2. 加入属性WidgetComponent  schema对应的widgetcomponent
 *  3. HOC默认顺序：ThemeHoc -> FieldHoc -> ValidateHoc -> ArrayHoc -> TempHoc
 */
export default (hocFactory: BaseFactory<any>, settings: any = {}) => {
    return (Component: any): RC<SchemaFormItemBaseProps & MakeHocOutProps, any> => {
        @(shouldUpdate(() => false) as any)
        class MakeComponentHoc extends React.PureComponent<SchemaFormItemBaseProps & MakeHocOutProps, any> {
            private fieldKey = "ui:item.hoc";

            public render(): JSX.Element {
                const { mergeSchema, globalOptions } = this.props;
                const { uiSchema = { options: {} }, keys, type } = mergeSchema;
                const fieldOptions = this.props.getFieldOptions(type);
                const typeDefaultOptions = globalOptions[type] || {};
                const hocs = settings.hocs || uiSchema[this.fieldKey] ||
                    fieldOptions[this.fieldKey] || ["theme", "field", "validate", "array", "temp"];

                let ComponentWithHocs = compose<SchemaFormItemBaseProps & MakeHocOutProps, any>
                    (...["utils"].concat(hocs).map(hoc => {
                        if (typeof hoc !== "string") {
                            return hoc;
                        }
                        return hocFactory.get(hoc)();
                    }))(Component);

                return <ComponentWithHocs {...this.props} />;
            }
        }

        return MakeComponentHoc;
    };
};
