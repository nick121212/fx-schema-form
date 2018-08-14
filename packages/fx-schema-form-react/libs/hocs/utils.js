import React, { PureComponent } from "react";
import { getTitle, getPathKeys, getOptions, normalizeDataPath, getRequiredKeys, getDefaultData, getActions, getPathProps } from "../libs/utils";
export const name = "utils";
export const hoc = (hocFactory) => {
    return () => {
        return (Component) => {
            class ComponentHoc extends PureComponent {
                render() {
                    return React.createElement(Component, Object.assign({ getTitle: getTitle, getPathKeys: getPathKeys, getOptions: getOptions, normalizeDataPath: normalizeDataPath, getRequiredKeys: getRequiredKeys, getDefaultData: getDefaultData, getActions: getActions, getPathProps: getPathProps }, this.props));
                }
            }
            return ComponentHoc;
        };
    };
};
export default {
    name,
    hoc
};
//# sourceMappingURL=utils.js.map