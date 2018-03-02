
import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Divider } from "material-ui";
import classNames from "classnames";
import Cloud from "material-ui-icons/Cloud";
import SearchBar from "material-ui-search-bar";

import { hoc } from "./container";

export class Component extends React.PureComponent<any> {
    public render() {
        const { classes } = this.props;

        return (
            <div className={classes.content}>
                <div className={classes.toolbar} />
                <Typography noWrap>{"You think water moves fast? You should see ice."}</Typography>
            </div>
        );
    }
}

export default hoc(Component);
