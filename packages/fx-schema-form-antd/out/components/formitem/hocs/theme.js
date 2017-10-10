import React from "react";
import { nsFactory } from "../../../index";
/**
 * 包装theme的组件HOC
 * @param Component 需要包装的组件
 * @param options   参数
 * 加入属性
 * currentTheme 当前的命名空间
 */
export const ThemeHoc = (Component) => {
    class Hoc extends React.Component {
        render() {
            const { mergeSchema } = this.props;
            const { uiSchema = { theme: "", field: "" } } = mergeSchema;
            let theme;
            if (nsFactory.has(uiSchema.theme || "default")) {
                theme = nsFactory.get(uiSchema.theme || "default");
            }
            else {
                throw new Error(`没有找到${uiSchema.theme || "default"}的样式！`);
            }
            return React.createElement(Component, Object.assign({ currentTheme: theme }, this.props));
        }
    }
    return Hoc;
};
//# sourceMappingURL=theme.js.map