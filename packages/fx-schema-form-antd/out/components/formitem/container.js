import { compose, onlyUpdateForKeys } from "recompose";
import { TempHoc } from "./hocs/temp";
import { FieldHoc } from "./hocs/field";
import { ThemeHoc } from "./hocs/theme";
import { ValidateHoc } from "./hocs/validate";
import { ArrayHoc } from "./hocs/array";
export const hoc = compose(onlyUpdateForKeys(["formItemData", "meta", "formData"]), ThemeHoc, FieldHoc, ValidateHoc, ArrayHoc, TempHoc);
//# sourceMappingURL=container.js.map