/// <reference types="react" />
import React from "react";
import { SchemaFormItemBaseProps } from "./props";
import { FieldHocOutProps } from "../../hocs/item/field";
import { ThemeHocOutProps } from "../../hocs/item/theme";
import { ValidateHocOutProps } from "../../hocs/item/validate";
import { ArrayHocOutProps } from "../../hocs/item/array";
export interface SchemaFormItemProps extends SchemaFormItemBaseProps, FieldHocOutProps, ThemeHocOutProps, ValidateHocOutProps, ArrayHocOutProps {
}
export declare const SchemaFormItem: React.ComponentClass<any>;
