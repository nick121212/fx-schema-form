import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Divider } from "material-ui";
import classNames from "classnames";
import Cloud from "material-ui-icons/Cloud";
import SearchBar from "material-ui-search-bar";

import { hoc } from "./container";

export class HeaderComponent extends React.PureComponent<any> {

    public render() {
        const { classes, opened, toggleOpen, title = "Yun" } = this.props;

        return (
            <AppBar
                elevation={0}
                position="absolute"
                color="default"
                className={classNames(classes.appBar, opened && classes.appBarShift)}>
                <Toolbar disableGutters={true}>
                    <IconButton
                        aria-label="open drawer"
                        onClick={toggleOpen.bind(this)}
                        className={classNames(classes.menuButton, opened && classes.hide)}>
                        <Cloud />
                    </IconButton>
                    <Typography className="flex-auto" variant="title" noWrap>
                        {!opened ? title : ""}
                    </Typography>
                    <SearchBar
                        onChange={() => console.log("onChange")}
                        onRequestSearch={() => console.log("onRequestSearch")}
                        style={{
                            margin: "0 20px",
                            boxShadow: "none",
                            height: 40,
                            maxWidth: 800
                        }} />
                </Toolbar>
                <Divider />
            </AppBar>
        );
    }
}

export default hoc(HeaderComponent);
