import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { RC } from "fx-schema-form-react/dist/typings/models";
import { ValidateHocOutProps } from "fx-schema-form-react/dist/typings/hocs/validate";
import { TreeMap } from "fx-schema-form-react/dist/typings/libs/tree";
export interface Props extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
    formItemNode?: TreeMap;
}
export declare const name = "dataToMeta";
export declare const hoc: (hocFactory: BaseFactory<any>) => () => (Component: any) => RC<Props, any>;
declare const _default: {
    name: string;
    hoc: (hocFactory: BaseFactory<any>) => () => (Component: any) => RC<Props, any>;
};
export default _default;
