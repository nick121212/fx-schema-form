import { compose, shouldUpdate } from "recompose";
import { hocFactory } from "../../factory";
export const hoc = compose(shouldUpdate(() => false), hocFactory.get("utils")(), hocFactory.get("merge")());
//# sourceMappingURL=container.js.map