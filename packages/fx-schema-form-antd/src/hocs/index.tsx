
import { BaseFactory } from "fx-schema-form-core";
import { ComponentEnhancer } from "recompose";

import { MergeHoc, MergeHocOutProps } from "./form/merge";
import { TempHoc } from "./item/temp";
import { FieldHoc, FieldHocOutProps } from "./item/field";
import { ThemeHoc, ThemeHocOutProps } from "./item/theme";
import { ValidateHoc, ValidateHocOutProps } from "./item/validate";
import { ArrayHoc, ArrayHocOutProps } from "./item/array";
import { MakeHoc, MakeHocOutProps } from "./item/make";

const hocFactory = new BaseFactory<ComponentEnhancer<any, any>>();

const hocs = {
    merge: MergeHoc.bind(MergeHoc, hocFactory),
    temp: TempHoc.bind(TempHoc, hocFactory),
    field: FieldHoc.bind(FieldHoc, hocFactory),
    theme: ThemeHoc.bind(ThemeHoc, hocFactory),
    validate: ValidateHoc.bind(ValidateHoc, hocFactory),
    array: ArrayHoc.bind(ArrayHoc, hocFactory),
    make: MakeHoc.bind(MakeHoc, hocFactory),
};

for (let key in hocs) {
    if (hocs.hasOwnProperty(key)) {
        let hoc = hocs[key];

        hocFactory.add(key, hoc);
        hocFactory.lock(key);
    }
}

export {
    hocFactory,
    MergeHocOutProps,
    FieldHocOutProps,
    ThemeHocOutProps,
    ValidateHocOutProps,
    ArrayHocOutProps,
    MakeHocOutProps
};
