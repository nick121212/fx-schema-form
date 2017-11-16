import { BaseFactory } from "fx-schema-form-core";
import { RC } from "./types";
import { nsFactory } from "./libs/ns.factory";
declare const defaultTheme: {
    tempFactory: BaseFactory<RC<any, any>>;
    fieldFactory: BaseFactory<RC<any, any>>;
    widgetFactory: BaseFactory<RC<any, any>>;
};
export { nsFactory, defaultTheme };
