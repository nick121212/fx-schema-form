import { compose } from "recompose";
import { hocFactory } from "../../factory";
export const hoc = compose(hocFactory.get("utils")(), hocFactory.get("make")());
//# sourceMappingURL=container.js.map