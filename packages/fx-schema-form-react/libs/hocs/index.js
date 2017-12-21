import { BaseFactory } from "fx-schema-form-core";
import MergeHoc from "./form/merge";
import TempHoc from "./item/temp";
import FieldHoc from "./item/field";
import ThemeHoc from "./item/theme";
import ValidateHoc from "./item/validate";
import ArrayHoc from "./item/array";
import MakeHoc from "./item/make";
import UtilsHoc from "./item/utils";
const hocFactory = new BaseFactory();
const hocs = {
    merge: MergeHoc.bind(MergeHoc, hocFactory),
    temp: TempHoc.bind(TempHoc, hocFactory),
    field: FieldHoc.bind(FieldHoc, hocFactory),
    theme: ThemeHoc.bind(ThemeHoc, hocFactory),
    validate: ValidateHoc.bind(ValidateHoc, hocFactory),
    array: ArrayHoc.bind(ArrayHoc, hocFactory),
    make: MakeHoc.bind(MakeHoc, hocFactory),
    utils: UtilsHoc.bind(UtilsHoc, hocFactory),
};
for (let key in hocs) {
    if (hocs.hasOwnProperty(key)) {
        let hoc = hocs[key];
        hocFactory.add(key, hoc);
        hocFactory.lock(key);
    }
}
export { hocFactory };
//# sourceMappingURL=index.js.map