

import React, { PureComponent } from "react";
import { BaseFactory, MergeLib, FxJsonSchema } from "fx-schema-form-core";
import { compose, shouldUpdate, onlyUpdateForKeys } from "recompose";
import resolvePathname from "resolve-pathname";
import Immutable from "immutable";

import { DefaultProps, RC, FxUiSchema } from "../components";

export interface UtilsHocOutProps {
    getOptions: (props: DefaultProps, category: string, field: string) => any;
    getTitle(props: DefaultProps): () => any;
    getPathKeys: (keys: string[], path: string) => string[];
}

/**
 * 包装utils的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 * 加入属性
 * getOptions    获取参数
 * getTitle      获取当前uiSchema的title
 * getPathKeys   获取相对于当前keys的路径
 */
export default (hocFactory: BaseFactory<any>, settings: any = {}) => {
    return (Component: any): RC<DefaultProps, any> => {
        class ComponentHoc extends PureComponent<UtilsHocOutProps, any> {
            public render(): JSX.Element {
                return <Component
                    getTitle={this.getTitle}
                    getPathKeys={this.getPathKeys}
                    getOptions={this.getOptions}
                    {...this.props} />;
            }

            /**
             * 获取参数
             * @param props     当前component的props
             * @param category  需要获取的种类，有template，field，hoc等
             * @param field     field的名称
             */
            private getOptions(props: DefaultProps, category: string, field: string) {
                const { uiSchema, globalOptions } = props;
                const { options } = uiSchema as FxUiSchema;
                const optionsArray = [];

                if (globalOptions && globalOptions.hasIn([category, "default"])) {
                    optionsArray.push(globalOptions.getIn([category, "default"]));
                }

                if (globalOptions && globalOptions.hasIn([category, field])) {
                    optionsArray.push(globalOptions.getIn([category, field]));
                }

                if (options && options.hasIn([category, field])) {
                    optionsArray.push(options.getIn([category, field]));
                }

                let opts = optionsArray.reverse().reduce((prev: Immutable.Map<string, any>, next: Immutable.Map<string, any>) => {
                    if (next) {
                        return next.merge(prev);
                    }

                    return prev;
                }, Immutable.fromJS({})).toJS();

                return opts;
            }

            /**
             * 获取标题数据
             * title || key
             */
            private getTitle(props: DefaultProps): string {
                const { uiSchema } = props;
                const { title, keys } = uiSchema as FxUiSchema;

                if (title !== undefined) {
                    return title;
                }

                return [].concat(keys).pop().toString();
            }

            /**
             * 根据相对路径，得到keys
             * @param keys 当前的keys
             * @param path 路径
             */
            private getPathKeys(keys: Array<string>, path: string): Array<string> {
                let keysCopy = [""].concat(keys.concat([""]));
                let keysResolve: string[] = resolvePathname(path, keysCopy.join("/")).split("/");

                keysResolve.shift();

                if (keysResolve.length && !keysResolve[keysResolve.length - 1]) {
                    keysResolve.pop();
                }

                return keysResolve;
            }
        }

        return ComponentHoc as any;
    };
};
