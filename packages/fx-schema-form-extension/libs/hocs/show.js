import React from "react";
import Immutable from "immutable";
import schemaFormReact from "fx-schema-form-react";
const { SchemaForm, schemaFormTypes } = schemaFormReact;
export const name = "show";
export const hoc = (hocFactory) => {
    return (settings = {}) => {
        return (Component) => {
            class ComponentHoc extends React.PureComponent {
                render() {
                    const { getOptions, getPathKeys, condition, uiSchema } = this.props;
                    const normalOptions = getOptions(this.props, schemaFormTypes.hoc, name, Immutable.fromJS(settings || {}));
                    let show = true;
                    if (normalOptions.paths && condition && uiSchema && uiSchema.keys) {
                        show = normalOptions.paths.reduce((prev, path) => {
                            if (!prev) {
                                return false;
                            }
                            let pathKeys = getPathKeys(uiSchema.keys, path);
                            if (condition.has(pathKeys.join("/"))) {
                                return !!condition.get(pathKeys.join("/")) && prev;
                            }
                            return false;
                        }, show);
                    }
                    if (show) {
                        return React.createElement(Component, Object.assign({}, this.props));
                    }
                    return null;
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
//# sourceMappingURL=show.js.map