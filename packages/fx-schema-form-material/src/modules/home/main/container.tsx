import { connect } from "react-redux";
import { compose, ComponentEnhancer } from "recompose";
import Immutable from "immutable";

import { reducerKeys, reducerKey, Props } from "../constant";
import { hoc as mainHoc } from "../container";

export const mapStateToProps = (state: Immutable.Map<string, any>, ownProps: any) => {
    return {
        type: state.getIn(reducerKeys.concat([reducerKey, "type"]))
    };
};

export const hoc = compose<Props, any>(
    mainHoc,
    connect(mapStateToProps)
);
