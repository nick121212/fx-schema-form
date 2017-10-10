/// <reference types="react" />
import React from "react";
import { SchemaFormItemBaseProps } from "./props";
import { FieldHocOutProps } from "./hocs/field";
import { ThemeHocOutProps } from "./hocs/theme";
import { ValidateHocOutProps } from "./hocs/validate";
import { ArrayHocOutProps } from "./hocs/array";
export interface SchemaFormItemProps extends SchemaFormItemBaseProps, FieldHocOutProps, ThemeHocOutProps, ValidateHocOutProps, ArrayHocOutProps {
}
export declare const SchemaFormItem: React.ComponentClass<any>;
