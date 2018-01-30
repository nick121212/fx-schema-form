import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps, RC } from "../components";
export interface UtilsHocOutProps {
    getOptions: (props: DefaultProps, category: string, field: string) => any;
    getTitle(props: DefaultProps): () => any;
    getPathKeys: (keys: string[], path: string) => string[];
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: any) => RC<DefaultProps, any>;
export default _default;
