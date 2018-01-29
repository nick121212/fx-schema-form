
import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { Map } from "immutable";
import { Ajv } from "ajv";

import { RC, DefaultProps, FxUiSchema } from "../components";
import { hocFactory } from "../factory";
import { TreeMap } from "./tree";

export interface SchemaFormHocOutProps {

}

export interface SchemaFormHocSettings {
    rootReducerKey?: string[];
}

export interface SchemaFormProps extends DefaultProps {
    root?: TreeMap;
    data?: any;
}

/**
 * 
 * @param Component 需要包装的组件
 * 加入属性FieldComponent   schema对应的fieldcomponent
 * 加入属性WidgetComponent  schema对应的widgetcomponent
 */
export default (settings: SchemaFormHocSettings = {}) => {
    return (Component: any): RC<SchemaFormProps, any> => {
        @(connect((state: Map<string, any>) => {
            let dataKeys = settings.rootReducerKey.concat(["data"]);
            let metaKeys = settings.rootReducerKey.concat(["meta"]);

            return {
                data: state.getIn(dataKeys),
                root: state.getIn(metaKeys)
            };
        }) as any)
        class SchemaFormComponentHoc extends React.PureComponent<SchemaFormProps, any> {

            private async validateAll() {
                let validate = this.props.ajv.getSchema(this.props.schemaId);

                if (validate) {
                    try {
                        await validate(this.props.data.toJS());
                    } catch (e) {
                        console.log(e);
                    }
                }
            }

            public render(): JSX.Element | null {

                console.log(this.props.data, this.props.root);

                console.log(this.validateAll());

                return <Component {...this.props} />;
            }
        }

        return SchemaFormComponentHoc;
    };
};
