/// <reference types="recompose" />
import { ComponentEnhancer } from "recompose";
import { SchemaFormBaseProps } from "./props";
export declare const mapStateToProps: (state: any, ownProps: any) => {
    formData: any;
};
export declare const hoc: ComponentEnhancer<SchemaFormBaseProps, any>;
