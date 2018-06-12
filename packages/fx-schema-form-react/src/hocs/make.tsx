
import React, { PureComponent } from "react";
import { compose, ComponentEnhancer } from "recompose";
import { BaseFactory } from "fx-schema-form-core";
import Immutable from "immutable";

import { UtilsHocOutProps } from "./utils";
import { DefaultProps } from "../components";
import { FxUiSchema, RC, schemaFormTypes } from "../models";

export interface MakeHocOutProps extends UtilsHocOutProps {

}

export const name = "make";

/**
 * make的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 *  1. HOC默认顺序：ThemeHoc -> FieldHoc -> ValidateHoc -> ArrayHoc -> TempHoc
 */
export const hoc = (hocFactory: BaseFactory<any>) => {
    return (settings: any = {}) => {
        return (Component: any): RC<DefaultProps & MakeHocOutProps, any> => {
            // @(shouldUpdate(() => false) as any)
            class MakeComponentHoc extends PureComponent<DefaultProps & MakeHocOutProps, any> {
                public render(): JSX.Element {
                    const { uiSchema, getOptions } = this.props;
                    const { type, field, hocs: uiSchemaHocs } = uiSchema as FxUiSchema;
                    const fieldOptions = getOptions(this.props, schemaFormTypes.field, field || type as string,
                        Immutable.fromJS(uiSchemaHocs ? { hocs: uiSchemaHocs } : {}),
                        Immutable.fromJS(settings || {}));
                    const hocs: Array<string | ComponentEnhancer<any, any>> = fieldOptions.hocs
                        || ["utils", "theme", "field", "validate", "array", "temp"];
                    const ComponentWithHocs: any = compose<DefaultProps & MakeHocOutProps, any>
                        (...([...hocs].map(hoc1 => {
                            if (typeof hoc1 !== "string") {
                                return hoc1;
                            }
                            return hocFactory.get(hoc1)();
                        })))(Component);

                    return <ComponentWithHocs {...this.props} />;
                }
            }

            return MakeComponentHoc as any;
        };
    };
};

export default {
    name,
    hoc
};
