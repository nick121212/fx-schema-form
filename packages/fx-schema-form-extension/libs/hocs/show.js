import React from "react";
import schemaFormReact from "fx-schema-form-react";
const { schemaFormTypes } = schemaFormReact;
export const name = "show";
export const hoc = (hocFactory) => {
    return (settings = {}) => {
        const innerHoc = (Component) => {
            class ComponentHoc extends React.PureComponent {
                render() {
                    const { condition, uiSchema } = this.props;
                    let show = true;
                    if (condition && uiSchema && uiSchema.keys) {
                        show = condition.some((val) => {
                            return !!val;
                        });
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