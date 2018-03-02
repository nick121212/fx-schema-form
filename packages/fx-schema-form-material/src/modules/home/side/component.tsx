
import React from "react";
import {
    Drawer, Toolbar, IconButton, Typography, Divider, List,
    ListSubheader, ListItem, ListItemIcon, ListItemText, Collapse, ListItemSecondaryAction, Switch
} from "material-ui";
import classNames from "classnames";
import Cloud from "material-ui-icons/Cloud";
import ChevronLeftIcon from "material-ui-icons/ChevronLeft";
import ChevronRightIcon from "material-ui-icons/ChevronRight";
import InboxIcon from "material-ui-icons/MoveToInbox";
import DraftsIcon from "material-ui-icons/Drafts";
import SendIcon from "material-ui-icons/Send";
import ExpandLess from "material-ui-icons/ExpandLess";
import ExpandMore from "material-ui-icons/ExpandMore";
import LightbulbOutline from "material-ui-icons/LightbulbOutline";
import StarBorder from "material-ui-icons/StarBorder";

import { hoc } from "./container";

export class Component extends React.PureComponent<any> {
    public render() {
        const { classes, opened, toggleOpen, setTheme, type, theme, title = "Yun" } = this.props;

        console.log(this.props.theme);

        return (
            <Drawer
                theme={theme}
                variant="permanent"
                classes={{
                    paper: classNames(classes.drawerPaper, !opened && classes.drawerPaperClose),
                }}
                open={opened}>
                <Toolbar disableGutters={true}>
                    <IconButton
                        aria-label="open drawer"
                        onClick={toggleOpen.bind(this)}>
                        <Cloud />
                    </IconButton>
                    <Typography variant="title" className="flex-auto">
                        {title}
                    </Typography>
                </Toolbar>
                <Divider />

                <List component="nav"
                    subheader={opened ? <ListSubheader component="div">Nested List Items</ListSubheader> : undefined}>
                    <ListItem button dense={true}>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Sent mail" />
                    </ListItem>
                    <ListItem button dense={true}>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Drafts" />
                    </ListItem>
                    <ListItem button dense={true}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Inbox" />
                        {opened ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={opened} timeout="auto" unmountOnExit>
                        <List component="div" dense={true}>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText inset primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem>
                        <ListItemIcon>
                            <LightbulbOutline />
                        </ListItemIcon>
                        <ListItemText primary="Bluetooth" />
                        <ListItemSecondaryAction>
                            <Switch
                                onChange={() => {
                                    setTheme(type === "dark" ? "light" : "dark");
                                }}
                                checked={type === "dark"}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </Drawer>
        );
    }
}

export default hoc(Component);
