
import React, { ComponentClass } from "react";
import { AppBar, Toolbar, IconButton, Typography, Divider, Grid } from "material-ui";
import classNames from "classnames";
import Cloud from "material-ui-icons/Cloud";
import SearchBar from "material-ui-search-bar";

import { hoc } from "./container";
import { Props } from "../constant";

const style = { padding: 0, margin: 0 };

export class Component extends React.PureComponent<Props> {
    public render() {
        const { classes, children } = this.props;

        return (
            <div className={classNames(classes.content, "overflow-hidden flex-auto")}>
                <Grid spacing={0} className="h-100 w-auto" justify="flex-start" container direction="column" alignItems="stretch">
                    <Grid item>
                        <div className={classes.toolbar} />
                    </Grid>
                    <Grid item xs={true} className={classNames("h-100 overflow-auto")}>
                        {children}
                    </Grid>
                </Grid>
            </div >
        );
    }
}

export default hoc(Component) as new () => React.PureComponent<Props, any>;
