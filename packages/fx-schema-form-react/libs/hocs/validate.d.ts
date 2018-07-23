import { ErrorObject } from "ajv";
import { BaseFactory } from "fx-schema-form-core";
import { Action } from "redux-act";
import { DefaultProps } from "../components";
import { RC } from "../models";
export interface ValidateHocOutProps {
    updateItemData: (props: DefaultProps, data: any, meta?: any) => void;
    updateItemMeta: (props: DefaultProps, data: any, meta?: any, noChange?: boolean) => Promise<void>;
    removeItemData: (props: DefaultProps, meta?: any) => void;
    updateItemDataRaw: (props: DefaultProps, data: any, meta?: any) => void;
    updateItemMetaRaw: (props: DefaultProps, data: any, meta?: any, noChange?: boolean) => Promise<void>;
    removeItemDataRaw: (props: DefaultProps, meta?: any) => void;
    combineActions: (...actions: Action<any>[]) => void;
    validate: (props: DefaultProps, data: any, meta?: any) => Promise<any>;
}
export interface ValidateHocSetting {
    root?: boolean;
    errorsText?: (errors: ErrorObject[], props: DefaultProps) => string;
}
export declare const name = "validate";
export declare const hoc: (hocFactory: BaseFactory<any>) => (settings?: ValidateHocSetting) => (Component: any) => RC<DefaultProps, any>;
declare const _default: {
    name: string;
    hoc: (hocFactory: BaseFactory<any>) => (settings?: ValidateHocSetting) => (Component: any) => RC<DefaultProps, any>;
};
export default _default;
