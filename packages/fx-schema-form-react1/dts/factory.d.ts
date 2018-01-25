import { BaseFactory } from "fx-schema-form-core";
import { FxReducer } from "./reducers/reducer";
import { RC, DefaultProps, SchemaFormNs } from "./components";
export declare const reducerFactory: BaseFactory<FxReducer>;
export declare const hocFactory: BaseFactory<(settings?: any) => RC<DefaultProps, any>>;
export declare const themeFactory: BaseFactory<SchemaFormNs<RC<any, any>, RC<any, any>, RC<any, any>>>;
