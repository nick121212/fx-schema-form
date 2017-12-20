import { compose } from "recompose";
import { hocFactory } from "../../hocs";
export var hoc = compose(hocFactory.get("utils")(), hocFactory.get("make")());
//# sourceMappingURL=container.jsx.map