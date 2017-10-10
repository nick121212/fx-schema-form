var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { shallowEqual, compose, lifecycle } from "recompose";
import pick from "recompose/utils/pick";
const metaConnect = compose(lifecycle({
    shouldComponentUpdate: function (nextProps, nextState) {
        let metaKeys = ["isShow", "isValid", "dirty", "errorText"];
        console.group(nextProps.mergeSchema.keys + "---temp中比较formItemData和Meta的值得变化");
        console.log("formItemData", pick(nextProps, ["formItemData"]).formItemData, pick(this.props, ["formItemData"]).formItemData);
        console.log("meta", pick(nextProps, ["meta"]), pick(this.props, ["meta"]));
        let rtn = !shallowEqual(pick(nextProps, ["formItemData"]).formItemData, pick(this.props, ["formItemData"]).formItemData) ||
            !shallowEqual(pick(nextProps.meta, metaKeys), pick(this.props.meta, metaKeys));
        console.log("shouldUpdate", rtn);
        console.groupEnd();
        return rtn;
    }
}));
/**
 * 包装Template的组件HOC
 * @param Component 需要包装的组件
 * @param options   参数
 */
export const TempHoc = (Component) => {
    /**
    * 获取模板的components
    * @param uiSchema 合并后的数据
    */
    let Hoc = class Hoc extends React.Component {
        /**
        * 获取模板的components
        * @param uiSchema 合并后的数据
        */
        constructor() {
            super(...arguments);
            this.tempField = "ui:temp";
        }
        render() {
            const { mergeSchema, globalOptions } = this.props;
            const { uiSchema = { options: {} }, keys } = mergeSchema;
            const TempComponents = this.getTemplates();
            const uiSchemaOptions = uiSchema.options || {};
            let index = 0;
            return TempComponents.reduce((prev, { key, Temp }) => {
                return React.createElement(Temp, Object.assign({ globalOptions: globalOptions, tempKey: key, uiSchemaOptions: uiSchemaOptions, key: keys.join(".") + key + index++ }, this.props), prev);
            }, React.createElement(Component, Object.assign({ key: keys.join("."), uiSchemaOptions: uiSchemaOptions }, this.props)));
        }
        /**
        * 获取模板的components
        */
        getTemplates() {
            const { mergeSchema, globalOptions, currentTheme } = this.props;
            const { uiSchema = { options: {} }, keys, type } = mergeSchema;
            const typeDefaultOptions = globalOptions[type] || {};
            const template = uiSchema[this.tempField] ||
                typeDefaultOptions[this.tempField] ||
                globalOptions[this.tempField] || "default", TempComponent = [];
            // 获取模板的数据，单个模板
            if (typeof template === "string") {
                TempComponent.push({
                    key: template,
                    Temp: (currentTheme.tempFactory.get(template))
                });
            }
            else {
                // 多个模板
                [].concat(template).reverse().forEach((tml, idx) => {
                    if (!currentTheme.tempFactory.has(tml || "default")) {
                        console.error(`不存在${tml}的temp！`);
                    }
                    else {
                        TempComponent.push({
                            key: tml,
                            Temp: currentTheme.tempFactory.get(tml || "default")
                        });
                    }
                });
            }
            return TempComponent;
        }
    };
    Hoc = __decorate([
        metaConnect
    ], Hoc);
    return Hoc;
};
//# sourceMappingURL=temp.js.map