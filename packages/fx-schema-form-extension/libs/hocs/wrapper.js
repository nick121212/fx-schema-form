import React from "react";
import schemaFormReact from "fx-schema-form-react";
const { schemaFormTypes } = schemaFormReact;
export const name = "wrapper";
export const hoc = (hocFactory) => {
    return (settings = {}) => {
        return (Component) => {
            class WrapperComponentHoc extends React.PureComponent {
                constructor(props) {
                    super(props);
                    this.ComponentWithHoc = Component;
                    const { getOptions } = this.props, options = getOptions(this.props, schemaFormTypes.hoc, settings.hocName || "");
                    if (options.condition && settings.hoc && settings.hocName) {
                        options.condition.hoc = settings.hoc;
                        this.ComponentWithHoc = hocFactory.get("condition")(options.condition)(Component);
                    }
                }
                render() {
                    const ComponentWithHoc = this.ComponentWithHoc;
                    return React.createElement(ComponentWithHoc, Object.assign({}, this.props, { formItemData: null, formItemMeta: null }));
                }
            }
            return WrapperComponentHoc;
        };
    };
};
export default {
    name,
    hoc
};
//# sourceMappingURL=wrapper.js.map