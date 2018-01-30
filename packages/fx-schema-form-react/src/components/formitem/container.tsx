import { compose, ComponentEnhancer } from "recompose";

import { DefaultProps } from "../index";
import { hocFactory } from "../../factory";

export const hoc: ComponentEnhancer<DefaultProps, any> = compose<DefaultProps, any>(
    hocFactory.get("utils")(),
    hocFactory.get("make")()
);
