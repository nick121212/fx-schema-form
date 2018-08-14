import React from "react";

export class ArrayFieldComponent extends React.PureComponent {
    public render() {
        return (
            <>
                {this.props.children}
            </>
        );
    }
}
