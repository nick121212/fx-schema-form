import { BaseFactory } from "fx-schema-form-core";
import Immutable from "immutable";
import { DefaultProps } from "../components";
import { RC } from "../models/index";
export declare const name = "utils";
export interface UtilsHocOutProps {
    getOptions: (props: DefaultProps, category: string, field: string, ...extraSettings: Immutable.Map<string, any>[]) => {
        [key: string]: any;
    };
    getTitle(props: DefaultProps, ...extraSettings: Immutable.Map<string, any>[]): () => string;
    getPathKeys: (keys: string[], path: string) => Array<string | number>;
    normalizeDataPath: (schemaId: string, dataPath: string) => Array<string | number>;
    getRequiredKeys: (props: DefaultProps, include: string[], exclude: string[]) => {
        [key: string]: any;
    };
}
export declare const hoc: (hocFactory: BaseFactory<any>) => () => (Component: any) => RC<DefaultProps, any>;
declare const _default: {
    name: string;
    hoc: (hocFactory: BaseFactory<any>) => () => (Component: any) => RC<DefaultProps, any>;
};
export default _default;
