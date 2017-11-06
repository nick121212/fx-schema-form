import { compose, onlyUpdateForKeys } from "recompose";
import { hocFactory } from "../../hocs";
export var hoc = compose(onlyUpdateForKeys(["formItemData", "meta"]), hocFactory.get("make"));
//# sourceMappingURL=container.js.map