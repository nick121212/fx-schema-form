import { compose, withHandlers, ComponentEnhancer } from "recompose";
import Immutable from "immutable";
import { connect } from "react-redux";
import { withTheme } from "material-ui/styles";

import { stylesHoc, reducerKeys, reducerKey } from "./constant";
import { homeActions } from "./actions";

export const mapStateToProps = (state: Immutable.Map<string, any>, ownProps: any) => {
    return {
        type: state.getIn(reducerKeys.concat([reducerKey, "type"]))
    };
};

export const hoc = compose<any, any>(
    connect(mapStateToProps),
    withTheme(),
    stylesHoc,
    withHandlers({
        toggleOpen: (props: any) => {
            return () => {
                homeActions.toggleSideBar();
            };
        },
        setTheme: (props: any) => {
            return (type: "dark" | "light") => {
                homeActions.setTheme({ type });
            };
        }
    })
);
