import React, { PureComponent } from "react";
import { compose } from "recompose";
import Immutable from "immutable";
import { schemaFormTypes } from "../models/index";
export const name = "make";
export const hoc = (hocFactory) => {
    return (settings = {}) => {
        return (Component) => {
            class MakeComponentHoc extends PureComponent {
                render() {
                    const { uiSchema, getOptions } = this.props;
                    const { type, field } = uiSchema;
                    const fieldOptions = getOptions(this.props, schemaFormTypes.field, field || type, Immutable.fromJS(uiSchema.hocs ? { hocs: uiSchema.hocs } : {}), Immutable.fromJS(settings || {}));
                    const hocs = fieldOptions.hocs
                        || ["utils", "theme", "field", "validate", "array", "temp"];
                    let ComponentWithHocs = compose(...([...hocs].map(hoc1 => {
                        if (typeof hoc1 !== "string") {
                            return hoc1;
                        }
                        return hocFactory.get(hoc1)();
                    })))(Component);
                    return React.createElement(ComponentWithHocs, Object.assign({}, this.props));
                }
            }
            return MakeComponentHoc;
        };
    };
};
export default {
    name,
    hoc
};
//# sourceMappingURL=make.js.map