/// <reference types="react" />
import { Ajv } from "ajv";
import Immutable from "immutable";
import { FxUiSchema } from "../models";
export interface DefaultProps {
    schemaId: string;
    formId?: string;
    uiSchema?: FxUiSchema;
    parentKeys: string[];
    globalOptions: Immutable.Map<string, any>;
    ajv: Ajv;
    arrayIndex?: number;
    arrayLevel?: number[];
    formItemData?: any;
    formItemMeta?: any;
    ArrayItemComponent?: new () => React.PureComponent<DefaultProps>;
}
export declare const props = 1;
