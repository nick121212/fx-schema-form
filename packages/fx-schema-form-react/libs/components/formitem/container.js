import { compose } from "recompose";
import { hocFactory } from "../../hocs";
export const hoc = compose(hocFactory.get("utils")(), hocFactory.get("make")());
//# sourceMappingURL=container.js.map