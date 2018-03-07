import { connect } from "react-redux";
import { compose, ComponentEnhancer } from "recompose";
import Immutable from "immutable";

import { reducerKeys, reducerKey } from "../constant";
import { hoc as mainHoc } from "../container";
import { Props } from "../constant";

export const mapStateToProps = (state: Immutable.Map<string, any>, ownProps: any) => {
    return {
        opened: state.getIn(reducerKeys.concat([reducerKey, "opened"]))
    };
};

export const hoc = compose<Props, any>(
    mainHoc,
    connect(mapStateToProps)
);
