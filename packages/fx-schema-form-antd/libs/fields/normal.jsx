import React from "react";
export class NormalField extends React.Component {
    render() {
        const { mergeSchema, currentTheme, WidgetComponent } = this.props;
        return (<WidgetComponent key={mergeSchema.keys.join(".")} {...this.props}/>);
    }
}
//# sourceMappingURL=normal.jsx.map