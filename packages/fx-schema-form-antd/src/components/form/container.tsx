import { compose, withHandlers, ComponentEnhancer, lifecycle } from "recompose";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { SchemaFormBaseProps } from "./props";
import { MergeHoc } from "./hocs/merge";

export const mapStateToProps = (state: any, ownProps: any) => {
    return {
        formData: state[ownProps.schemaKey]
    };
};

export const hoc: ComponentEnhancer<SchemaFormBaseProps, any> = compose<SchemaFormBaseProps, any>(
    MergeHoc
);
