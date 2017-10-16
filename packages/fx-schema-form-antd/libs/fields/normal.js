import React from "react";
export class NormalField extends React.Component {
    render() {
        const { mergeSchema, currentTheme, WidgetComponent } = this.props;
        return (React.createElement(WidgetComponent, Object.assign({ key: mergeSchema.keys.join(".") }, this.props)));
    }
}
//# sourceMappingURL=normal.js.map