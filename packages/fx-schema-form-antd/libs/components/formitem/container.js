import { compose, onlyUpdateForKeys } from "recompose";
import { hocFactory } from "../../hocs";
export var hoc = compose(onlyUpdateForKeys(["formItemData", "meta", "formData", "mergeSchema"]), hocFactory.get("make"));
//# sourceMappingURL=container.js.map