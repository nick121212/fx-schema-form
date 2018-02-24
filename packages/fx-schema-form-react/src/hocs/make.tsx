
import React, { PureComponent } from "react";
import { compose, shouldUpdate, ComponentEnhancer } from "recompose";
import { BaseFactory } from "fx-schema-form-core";
import Immutable from "immutable";

import { UtilsHocOutProps } from "./utils";
import { DefaultProps } from "../components";
import { FxUiSchema, RC, schemaFormTypes } from "../models/index";

export interface MakeHocOutProps extends UtilsHocOutProps {

}

/**
 * make的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 *  1. HOC默认顺序：ThemeHoc -> FieldHoc -> ValidateHoc -> ArrayHoc -> TempHoc
 */
export default (hocFactory: BaseFactory<any>, settings: any = {}) => {
    return (Component: any): RC<DefaultProps & MakeHocOutProps, any> => {
        // @(shouldUpdate(() => false) as any)
        class MakeComponentHoc extends PureComponent<DefaultProps & MakeHocOutProps, any> {
            public render(): JSX.Element {
                const { uiSchema, getOptions } = this.props;
                const { type, field } = uiSchema as FxUiSchema;
                const fieldOptions = getOptions(this.props, schemaFormTypes.field, field || type as string,
                    Immutable.fromJS(uiSchema.hocs ? { hocs: uiSchema.hocs } : {}),
                    Immutable.fromJS(settings || {}));
                const hocs: Array<string | ComponentEnhancer<any, any>> = fieldOptions.hocs
                    || ["theme", "field", "validate", "array", "temp"];

                hocs.unshift("utils");

                let ComponentWithHocs: any = compose<DefaultProps & MakeHocOutProps, any>
                    (...([...hocs].map(hoc => {
                        if (typeof hoc !== "string") {
                            return hoc;
                        }
                        return hocFactory.get(hoc)();
                    })))(Component);

                return <ComponentWithHocs {...this.props} />;
            }
        }

        return MakeComponentHoc as any;
    };
};
