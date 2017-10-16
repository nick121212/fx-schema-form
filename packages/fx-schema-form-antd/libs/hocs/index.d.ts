/// <reference types="recompose" />
import { BaseFactory } from "fx-schema-form-core";
import { ComponentEnhancer } from "recompose";
import { MergeHocOutProps } from "./form/merge";
import { FieldHocOutProps } from "./item/field";
import { ThemeHocOutProps } from "./item/theme";
import { ValidateHocOutProps } from "./item/validate";
import { ArrayHocOutProps } from "./item/array";
import { MakeHocOutProps } from "./item/make";
declare const hocFactory: BaseFactory<ComponentEnhancer<any, any>>;
export { hocFactory, MergeHocOutProps, FieldHocOutProps, ThemeHocOutProps, ValidateHocOutProps, ArrayHocOutProps, MakeHocOutProps };
