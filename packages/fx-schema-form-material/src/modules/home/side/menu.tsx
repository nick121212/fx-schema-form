import React from "react";

export class MenuComponent extends React.PureComponent<any, any> {
    public render() {
        const { menus } = this.props;

        return (
            <div>
                Hello World
            </div>
        );
    }
}
