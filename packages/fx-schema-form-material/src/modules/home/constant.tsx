import React from "react";
import { fromJS } from "immutable";
import withStyles, { StyledComponentProps } from "material-ui/styles/withStyles";
import { Theme, WithStyles, PaletteType } from "material-ui";
import { ComponentEnhancer } from "recompose";

export const sideBarWidth = 240;

export const $initialState = fromJS({
    opened: false,
    type: "light"
});

export interface Props {
    classes: any;
    opened: boolean;
    toggleOpen: () => void;
    setTheme: (type: "light" | "dark") => void;
    title: string;
    type: PaletteType;
}

export const reducerKey = "index";

export const reducerKeys = ["modules", "home"];

export const styles = (theme: Theme) => {
    return ({
        root: {
            flexGrow: 1,
            zIndex: 1,
            overflow: "hidden",
            position: "relative",
            display: "flex",
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: sideBarWidth,
            width: `calc(100% - ${sideBarWidth}px)`,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            // marginLeft: 12,
            // marginRight: 12,
        },
        hide: {
            display: "none",
        },
        drawerPaper: {
            position: "relative",
            width: sideBarWidth,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerPaperClose: {
            width: 70,
            [theme.breakpoints.down("xs")]: {
                width: 0
            },
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        toolbar: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 8px",
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            // padding: theme.spacing.unit * 3
        },
        contentMain: {
            padding: 0
        }
    });
};

export const stylesHoc = withStyles(styles as any, { withTheme: false });
