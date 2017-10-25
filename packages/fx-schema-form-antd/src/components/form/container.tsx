import { compose, ComponentEnhancer, pure } from "recompose";
import { connect } from "react-redux";

import { SchemaFormBaseProps } from "./props";
import { hocFactory } from "../../hocs";

export const hoc: ComponentEnhancer<SchemaFormBaseProps, any> = compose<SchemaFormBaseProps, any>(
    // connect((state: any, props: SchemaFormBaseProps) => {
    //     let { meta, data } = state[props.schemaKey];

    //     return {
    //         isValid: meta.data.isValid,
    //         isLoading: meta.data.isLoading
    //     };
    // }),
    hocFactory.get("merge"),
    pure
);
