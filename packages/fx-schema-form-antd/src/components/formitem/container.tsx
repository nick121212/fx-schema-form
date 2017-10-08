import { compose, ComponentEnhancer, lifecycle, onlyUpdateForKeys, shouldUpdate, shallowEqual } from "recompose";
import pick from "recompose/utils/pick";

import { SchemaFormItemBaseProps } from "./props";
import { TempHoc } from "./hocs/temp";
import { FieldHoc } from "./hocs/field";
import { ThemeHoc } from "./hocs/theme";
import { ValidateHoc } from "./hocs/validate";
import { ArrayHoc } from "./hocs/array";

export const hoc: ComponentEnhancer<SchemaFormItemBaseProps, any> = compose<SchemaFormItemBaseProps, any>(
    onlyUpdateForKeys(["formItemData", "meta", "formData"]),
    ThemeHoc,
    FieldHoc,
    ValidateHoc,
    ArrayHoc,
    TempHoc
);
