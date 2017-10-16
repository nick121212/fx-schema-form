import { compose, onlyUpdateForKeys } from "recompose";
import { hocFactory } from "../../hocs";
export const hoc = compose(onlyUpdateForKeys(["formItemData", "meta", "formData", "mergeSchema"]), hocFactory.get("make"));
//# sourceMappingURL=container.js.map