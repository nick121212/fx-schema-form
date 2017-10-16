import React from "react";
import jpp from "json-pointer";
/**
 * condition hoc
 * 用于组件的显示隐藏
 *  1. 根据hoc设置中的condition字段来配置显示/隐藏的时机
 *  2. 从formData中获取所需的值，与设置的值做对比，如果都匹配，则显示，否则隐藏
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export const ConditionHoc = (hocFactory, Component) => {
    class Hoc extends React.Component {
        constructor() {
            super(...arguments);
            this.fieldKey = "ui:condition";
        }
        /**
         * render
         */
        render() {
            const { getHocOptions, formData, formDefaultData } = this.props;
            const hocOptions = getHocOptions();
            const { condition: conditionHocOptions } = hocOptions;
            const { fields } = conditionHocOptions;
            let isShow = true, jFormData = jpp(Object.assign({}, formDefaultData, formData));
            if (fields && fields.length) {
                isShow = fields.reduce((prev, { key, val }) => {
                    if (!jFormData.has(key)) {
                        return prev && false;
                    }
                    else {
                        let data = jFormData.get(key);
                        return prev && (data === val);
                    }
                }, isShow);
            }
            if (!isShow) {
                return null;
            }
            return React.createElement(Component, Object.assign({}, this.props));
        }
    }
    return Hoc;
};
//# sourceMappingURL=condition.js.map