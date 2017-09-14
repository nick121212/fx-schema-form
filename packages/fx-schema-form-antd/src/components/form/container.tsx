import { compose, withHandlers, ComponentEnhancer, lifecycle } from "recompose";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { SchemaFormProps } from "./props";
import { MergeHoc } from "./hocs/merge";

export const mapStateToProps = (state: any, ownProps: any) => {
    return {
        formData: state[ownProps.schemaKey]
    };
};

export const hoc: ComponentEnhancer<SchemaFormProps, any> = compose<SchemaFormProps, any>(
    // connect(mapStateToProps),
    MergeHoc,
    // withHandlers({}),
    lifecycle({
        componentDidMount: function () {
            console.log("schema form mounted!");
        }
    })
);
