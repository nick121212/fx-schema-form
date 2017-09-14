
import React from "react";
import { connect } from "react-redux";

import { RC, NsFactory } from "../../../types";
import { nsFactory } from "../../../index";
import { SchemaFormItemBaseProps } from "../props";
import { ValidateHocOutProps } from "./validate";
import { mapMetaStateToProps } from "../../meta";

export interface ArrayHocOutProps {
}

/**
 * 包装array的组件HOC
 * @param Component 需要包装的组件
 * @param options   参数
 * 加入属性
 * arrayItems
 */
export const ArrayHoc = (Component: any): RC<SchemaFormItemBaseProps & ValidateHocOutProps, any> => {
    @(connect(mapMetaStateToProps) as any)
    class Hoc extends React.Component<SchemaFormItemBaseProps & ValidateHocOutProps, any> {
        public render(): JSX.Element {
            const { mergeSchema, arrayIndex } = this.props;
            const { uiSchema, type, keys } = mergeSchema;

            if (type === "array") {
                return <Component {...this.props} arrayItems={[
                    <button key={keys.join(".") + "arraybutton" + 1} onClick={() => {
                        this.addItem();
                    }}>add</button>
                ]} arrayItemItems={[
                    <button key={keys.join(".") + "arraybutton" + 1} onClick={() => {
                        this.addItem();
                    }}>add</button>,
                    <button key={keys.join(".") + "arraybutton" + 2} onClick={() => {
                        this.removeItem(arrayIndex);
                    }}>remove</button>
                ]}/>;
            }

            // if (arrayIndex !== undefined) {
            //     return <Component  {...this.props} arrayItems={[
            //         <button key={keys.join(".") + "arraybutton" + 1} onClick={() => {
            //             this.addItem();
            //         }}>add</button>,
            //         <button key={keys.join(".") + "arraybutton" + 2} onClick={() => {
            //             this.removeItem(arrayIndex);
            //         }}>remove</button>
            //     ]} />;
            // }

            return <Component {...this.props} />;
        }

        /**
         * 移除一个数据项
         * @param index 数组索引
         */
        private removeItem(index: number): void {
            const { formItemData = [], mergeSchema, validate } = this.props;
            const { uiSchema, type, keys } = mergeSchema;

            if (type === "array") {
                formItemData.splice(index, 1);
                validate(formItemData);
            }


        }

        /**
         * 添加一个项目
         */
        private addItem(): void {
            let { formItemData = [], mergeSchema, validate } = this.props;

            if (mergeSchema.items.type === "object") {
                formItemData.push({});
            } else {
                formItemData.push(undefined);
            }

            validate(formItemData);
        }
    }

    return Hoc;
};
