import React from "react";
import { createMuiTheme, MuiThemeProvider, Reboot, withStyles } from "material-ui";

import { HeaderComponent } from "../header";
import { SideComponent } from "../side";
import { ContentComponent } from "../content";
import { stylesHoc } from "../constant";
import { hoc } from "./container";

// const theme = createMuiTheme({
//     palette: {
//     }
// });

export class Component extends React.PureComponent<any, any> {
    public render() {
        const { classes, type } = this.props;

        return (
            <MuiThemeProvider theme={createMuiTheme({
                palette: {
                    type
                }
            })}>
                <div className={classes.root}>
                    <Reboot />
                    <HeaderComponent />
                    <SideComponent />
                    <ContentComponent />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default hoc(Component);
