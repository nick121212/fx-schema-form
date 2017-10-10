import { compose, ComponentEnhancer, onlyUpdateForKeys } from "recompose";

import { SchemaFormItemBaseProps } from "./props";
import { hocFactory } from "../../hocs";
// import { MakeHoc } from "../../hocs/item/make";
// import { ThemeHoc } from "../../hocs/item/theme";

export const hoc: ComponentEnhancer<SchemaFormItemBaseProps, any> = compose<SchemaFormItemBaseProps, any>(
    onlyUpdateForKeys(["formItemData", "meta", "formData"]),
    hocFactory.get("make")
    // defaultTheme.get
    // MakeHoc,
    // ThemeHoc,
    // FieldHoc,
    // ValidateHoc,
    // ArrayHoc,
    // TempHoc
);
