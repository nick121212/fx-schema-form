import React from "react";
import Immutable from "immutable";
import schemaFormReact from "fx-schema-form-react";
const { schemaFormTypes } = schemaFormReact;
export const name = "resetKey";
export const hoc = (_hocFactory) => {
    return (settings = { excludeKeys: [], includeKeys: [] }) => {
        return (Component) => {
            class ComponentHoc extends React.PureComponent {
                render() {
                    const { getOptions, getRequiredKeys } = this.props, normalOptions = getOptions(this.props, schemaFormTypes.hoc, name, Immutable.fromJS(settings || {})), extraProps = getRequiredKeys(this.props, normalOptions.includeKeys, normalOptions.excludeKeys);
                    return React.createElement(Component, Object.assign({}, extraProps));
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
//# sourceMappingURL=resetkey.js.map