import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "../components";
import { RC } from "../models/index";
export interface ValidateHocOutProps {
    updateItemData: (props: DefaultProps, data: any, meta?: any) => void;
    updateItemMeta: (props: DefaultProps, data: any, meta?: any, noChange?: boolean) => Promise<void>;
    removeItemData: (props: DefaultProps, meta?: any) => void;
    validate: (props: DefaultProps, data: any, meta?: any) => Promise<any>;
}
export declare const name = "validate";
export declare const hoc: (hocFactory: BaseFactory<any>) => (settings?: any) => (Component: any) => RC<DefaultProps, any>;
declare const _default: {
    name: string;
    hoc: (hocFactory: BaseFactory<any>) => (settings?: any) => (Component: any) => RC<DefaultProps, any>;
};
export default _default;
