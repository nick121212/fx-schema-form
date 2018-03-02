import { connect } from "react-redux";
import { compose, ComponentEnhancer } from "recompose";
import Immutable from "immutable";

import { reducerKeys, reducerKey } from "../constant";
import { hoc as mainHoc } from "../container";

export const mapStateToProps = (state: Immutable.Map<string, any>, ownProps: any) => {
    return {
        opened: state.getIn(reducerKeys.concat([reducerKey, "opened"])),
        type: state.getIn(reducerKeys.concat([reducerKey, "type"]))
    };
};

export const hoc = compose<any, any>(
    mainHoc,
    connect(mapStateToProps)
);
