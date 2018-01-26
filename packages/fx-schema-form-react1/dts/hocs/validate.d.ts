import { BaseFactory } from "fx-schema-form-core";
import { MakeHocOutProps } from "./make";
import { DefaultProps, RC } from "../components";
export interface ValidateHocOutProps extends DefaultProps, MakeHocOutProps {
    updateItemData: (props: DefaultProps, data: any) => void;
    updateItemMeta: (props: DefaultProps, meta: any) => void;
    validate: (props: DefaultProps, data: any, meta?: any) => Promise<any>;
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: any) => RC<DefaultProps, any>;
export default _default;
