import { compose, ComponentEnhancer, pure } from "recompose";
import { connect } from "react-redux";

import { SchemaFormBaseProps } from "./props";
import { hocFactory } from "../../hocs";

export const hoc: ComponentEnhancer<SchemaFormBaseProps, any> = compose<SchemaFormBaseProps, any>(
    hocFactory.get("utils")(),
    hocFactory.get("merge")()
);
