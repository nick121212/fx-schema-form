import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "../components";
import { RC } from "../models/index";
export interface ValidateHocOutProps {
    updateItemData: (props: DefaultProps, data: any, meta?: any) => void;
    updateItemMeta: (props: DefaultProps, data: any, meta?: any) => void;
    validate: (props: DefaultProps, data: any, meta?: any) => Promise<any>;
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: any) => RC<DefaultProps, any>;
export default _default;
