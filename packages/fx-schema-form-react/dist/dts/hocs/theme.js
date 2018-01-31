import React, { PureComponent } from "react";
import { themeFactory } from "../factory";
export default (hocFactory, settings = {}) => {
    return (Component) => {
        class ThemeComponentHoc extends PureComponent {
            render() {
                const { theme, field } = this.props.uiSchema;
                let nsFactory;
                if (themeFactory.has(theme || "default")) {
                    nsFactory = themeFactory.get(theme || "default");
                }
                else {
                    throw new Error(`没有找到${theme || "default"}的样式！`);
                }
                return React.createElement(Component, Object.assign({ currentTheme: nsFactory }, this.props));
            }
        }
        return ThemeComponentHoc;
    };
};
//# sourceMappingURL=theme.js.map