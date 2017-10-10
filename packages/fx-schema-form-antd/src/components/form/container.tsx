import { compose, ComponentEnhancer } from "recompose";

import { SchemaFormBaseProps } from "./props";
import { hocFactory } from "../../hocs";

export const hoc: ComponentEnhancer<SchemaFormBaseProps, any> = compose<SchemaFormBaseProps, any>(
    hocFactory.get("merge")
);
