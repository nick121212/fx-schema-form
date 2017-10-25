import { compose, onlyUpdateForKeys, pure } from "recompose";
import { hocFactory } from "../../hocs";
export var hoc = compose(onlyUpdateForKeys(["formItemData", "meta", "formData", "mergeSchema"]), hocFactory.get("make"), pure);
//# sourceMappingURL=container.js.map