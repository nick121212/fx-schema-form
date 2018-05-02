/// <reference types="react" />
import { Ajv } from "ajv";
import Immutable from "immutable";
import { ValidationMap } from "prop-types";
import { FxUiSchema } from "../models";
export interface DefaultProps {
    schemaId: string;
    uiSchema?: FxUiSchema;
    parentKeys: string[];
    globalOptions: Immutable.Map<string, any>;
    ajv: Ajv;
    arrayIndex?: number;
    arrayLevel?: number[];
    formItemData?: any;
    formItemMeta?: any;
    ArrayItemComponent?: new () => React.PureComponent<DefaultProps>;
    reducerKey?: string;
}
export declare const DefaultPropsTypeCheck: ValidationMap<DefaultProps & {
    customProp: Function;
}>;
