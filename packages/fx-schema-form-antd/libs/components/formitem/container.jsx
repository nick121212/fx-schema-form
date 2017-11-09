import { compose, onlyUpdateForKeys } from "recompose";
import { hocFactory } from "../../hocs";
export const hoc = compose(onlyUpdateForKeys(["formItemData", "meta"]), hocFactory.get("make"));
//# sourceMappingURL=container.jsx.map