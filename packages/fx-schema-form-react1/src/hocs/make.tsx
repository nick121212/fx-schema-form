
import React from "react";
import { compose, shouldUpdate } from "recompose";
import { BaseFactory } from "fx-schema-form-core";

import { UtilsHocOutProps } from "./utils";
import { RC, DefaultProps, FxUiSchema } from "../components";

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
    return (Component: any): RC<DefaultProps & MakeHocOutProps, any> => {
        @(shouldUpdate(() => false) as any)
        class MakeComponentHoc extends React.PureComponent<DefaultProps & MakeHocOutProps, any> {
            private fieldKey = "hocs";

            public render(): JSX.Element {
                const { uiSchema, getOptions } = this.props;
                const { type } = uiSchema as FxUiSchema;
                const fieldOptions = getOptions(this.props, "field", type as string);
                const hocs = settings.hocs || uiSchema[this.fieldKey] || ["theme", "field", "array", "temp"];

                let ComponentWithHocs = compose<DefaultProps & MakeHocOutProps, any>
                    (...["utils"].concat(hocs).map(hoc => {
                        if (typeof hoc !== "string") {
                            return hoc;
                        }
                        return hocFactory.get(hoc)();
                    }))(Component);

                return <ComponentWithHocs {...this.props} />;
            }
        }

        return MakeComponentHoc as any;
    };
};
