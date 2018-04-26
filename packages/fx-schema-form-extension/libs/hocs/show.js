import React from "react";
import Immutable from "immutable";
import schemaFormReact from "fx-schema-form-react";
const { SchemaForm, schemaFormTypes } = schemaFormReact;
export const name = "show";
export const hoc = (hocFactory) => {
    return (settings = {}) => {
        const innerHoc = (Component) => {
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
                            if (!condition.has(pathKeys.join("/"))) {
                                return false;
                            }
                            let data = condition.get(pathKeys.join("/"));
                            if (!data) {
                                return false;
                            }
                            if (Immutable.List.isList(data) && !data.size) {
                                return false;
                            }
                            return true;
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
        return hocFactory.get("wrapper")({
            hoc: innerHoc,
            hocName: name
        });
    };
};
export default {
    name,
    hoc
};
//# sourceMappingURL=show.js.map