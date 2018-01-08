import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { mapFormItemDataProps } from "../hocs/select";
export class NormalField extends React.PureComponent {
    render() {
        const { mergeSchema, currentTheme, WidgetComponent, getFieldOptions } = this.props;
        const fieldOptions = getFieldOptions("normal");
        let WidgetComponentWithHoc = compose(...(fieldOptions.hocs || []), connect(mapFormItemDataProps))(WidgetComponent);
        return (React.createElement(WidgetComponentWithHoc, Object.assign({ key: mergeSchema.keys.join(".") }, this.props)));
    }
}
//# sourceMappingURL=normal.js.map