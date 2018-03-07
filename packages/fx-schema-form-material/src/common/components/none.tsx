import React from "react";

export class NoneComponent extends React.PureComponent<any> {
    public render() {
        return (
            <>
                {this.props.children}
            </>
        );
    }
}
