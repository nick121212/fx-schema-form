import React from "react";

/**
 * block组建
 */
export class SchemaFormBlock extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
