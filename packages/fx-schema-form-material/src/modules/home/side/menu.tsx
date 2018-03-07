import React from "react";
import {
    List, ListSubheader, ListItem, ListItemIcon,
    ListItemText, Collapse, ListItemSecondaryAction, Checkbox, Grid, IconButton, Icon, Hidden, Tooltip
} from "material-ui";
import ChevronLeftIcon from "material-ui-icons/ChevronLeft";
import ChevronRightIcon from "material-ui-icons/ChevronRight";
import InboxIcon from "material-ui-icons/MoveToInbox";
import DraftsIcon from "material-ui-icons/Drafts";
import SendIcon from "material-ui-icons/Send";
import ExpandLess from "material-ui-icons/ExpandLess";
import ExpandMore from "material-ui-icons/ExpandMore";
import LightbulbOutline from "material-ui-icons/LightbulbOutline";
import StarBorder from "material-ui-icons/StarBorder";

export class MenuComponent extends React.PureComponent<any, any> {

    private renderItem(children: JSX.Element[], element: any, padding = 0, level = 0): any {
        const hasChild = element.children && element.children.length;
        const { opened } = this.props;

        children.push(
            <ListItem key={element.key}
                button={true}
                dense={true}
                style={level ? {
                    paddingLeft: padding * 2 * level,
                } : {}}>
                    <Tooltip title={element.title}>
                        <ListItemIcon>
                            <Icon children={element.icon} />
                        </ListItemIcon>
                    </Tooltip>
                <ListItemText inset primary={element.title} />
                {
                    (hasChild && opened) ? <ListItemSecondaryAction>
                        <IconButton aria-label={element.title}
                            onClick={() => {
                                element.opened = !!!element.opened;
                                this.forceUpdate();
                            }}>
                            {element.opened ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                    </ListItemSecondaryAction> : null
                }
            </ListItem>);

        if (hasChild) {
            let child = this.renderMenu(element.children, padding, level + 1);
            let subHeader = <ListSubheader style={level ? {
                paddingLeft: padding * 2 * level,
            } : {}} component="div">{element.subHeader}</ListSubheader>;

            children.push(
                <Collapse key={element.key + "-children" + opened} in={element.opened && opened} timeout="auto" unmountOnExit>
                    <List component="div"
                        subheader={(element.subHeader && opened) ?
                            subHeader
                            : undefined}>
                        {child}
                    </List>
                </Collapse>
            );
        }

        return children;
    }

    private renderMenu(menus: any[], padding = 0, level = 0): JSX.Element[] {
        const children: JSX.Element[] = [];

        menus.forEach((menu: any) => {
            this.renderItem(children, menu, padding, level);
        });

        return children;
    }


    public render() {
        const { menus, opened, children } = this.props;
        const list = this.renderMenu(menus, 16);

        return (
            <Grid container
                spacing={0}
                wrap="nowrap"
                alignItems={"stretch"}
                direction={"column"}
                justify={"space-around"}>
                <Grid item>
                    <List component="nav"
                        subheader={opened ? <ListSubheader component="div">菜单</ListSubheader> : undefined}>
                        {list}
                    </List>
                </Grid>
                <Grid item>
                    {children}
                </Grid>
            </Grid>
        );
    }
}
