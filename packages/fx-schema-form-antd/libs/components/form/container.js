import { compose } from "recompose";
import { hocFactory } from "../../hocs";
export var hoc = compose(hocFactory.get("utils"), hocFactory.get("merge"));
//# sourceMappingURL=container.js.map