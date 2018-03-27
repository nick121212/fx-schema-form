import React, { PureComponent } from "react";
import { themeFactory } from "../factory";
export const name = "theme";
export const hoc = (hocFactory) => {
    return () => {
        return (Component) => {
            const defualtKey = "default";
            class ThemeComponentHoc extends PureComponent {
                render() {
                    const { theme } = this.props.uiSchema;
                    let nsFactory;
                    if (themeFactory.has(theme || defualtKey)) {
                        nsFactory = themeFactory.get(theme || defualtKey);
                    }
                    else {
                        throw new Error(`没有找到${theme || defualtKey}的样式！`);
                    }
                    return React.createElement(Component, Object.assign({ currentTheme: nsFactory }, this.props));
                }
            }
            return ThemeComponentHoc;
        };
    };
};
export default {
    name,
    hoc
};
//# sourceMappingURL=theme.js.map