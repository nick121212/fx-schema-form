
import React from "react";
import {
    Drawer, Toolbar, IconButton, Typography, Divider, List, SvgIcon, Checkbox, Icon,
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
import { MenuComponent } from "./menu";
import { Props } from "./constant";

const menus = [{
    key: "email",
    icon: "mail_outline",
    title: "Send mail"
}, {
    key: "draft",
    icon: "drafts",
    title: "Draft"
}, {
    key: "inbox",
    icon: "inbox",
    title: "inbox"
}, {
    key: "starred",
    icon: "star",
    title: "Starred",
    subHeader: "Starred",
    children: [{
        key: "starred-1",
        icon: "star_border",
        title: "Starred1",
        children: [{
            key: "starred-11",
            icon: "star_half",
            title: "Starred11",
        }]
    }]
}];

export class Component extends React.PureComponent<Props> {
    public render() {
        const { classes, opened, toggleOpen, setTheme, type, title = "Yun" } = this.props;

        return (
            <Drawer
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

                <MenuComponent menus={menus} opened={opened}>
                    <List component="nav"
                        subheader={opened ? <ListSubheader component="div">设置</ListSubheader> : undefined}>
                        <ListItem button dense={true} onClick={() => {
                            setTheme(type === "dark" ? "light" : "dark");
                        }}>
                            <ListItemIcon>
                                <Icon>{type === "dark" ? "brightness_high" : "brightness_low"}</Icon>
                            </ListItemIcon>
                            <ListItemText primary="主题样式" secondary={type} />
                        </ListItem>
                    </List>
                </MenuComponent>
            </Drawer>
        );
    }
}

export default hoc(Component);
