import React, { ComponentClass } from "react";
import { createMuiTheme, MuiThemeProvider, Reboot, withStyles } from "material-ui";
import classNames from "classnames";

import { HeaderComponent } from "../header";
import { SideComponent } from "../side";
import { ContentComponent } from "../content";
import { stylesHoc, Props } from "../constant";
import { hoc } from "./container";

export class Component extends React.PureComponent<Props> {
    public render() {
        const { classes, type, children } = this.props;

        return (
            <MuiThemeProvider theme={createMuiTheme({
                palette: {
                    type: type
                }
            })}>
                <div className={classNames(classes.root, "h-100")}>
                    <HeaderComponent />
                    <SideComponent />
                    <ContentComponent children={children} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default hoc(Component) as new () => React.PureComponent<Props, any>;
