import { compose, ComponentEnhancer, shouldUpdate } from "recompose";

import { DefaultProps } from "../index";
import { hocFactory } from "../../factory";

export const hoc: ComponentEnhancer<DefaultProps, any> = compose<DefaultProps, any>(
    shouldUpdate(() => false),
    hocFactory.get("utils")(),
    hocFactory.get("merge")()
);
