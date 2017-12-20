import { compose, ComponentEnhancer, onlyUpdateForKeys, pure } from "recompose";

import { SchemaFormItemBaseProps } from "./props";
import { hocFactory } from "../../hocs";

export const hoc: ComponentEnhancer<SchemaFormItemBaseProps, any> = compose<SchemaFormItemBaseProps, any>(
    hocFactory.get("utils")(),
    hocFactory.get("make")()
);
