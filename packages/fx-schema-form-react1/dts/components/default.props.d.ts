import { Ajv } from "ajv";
import Immutable from "immutable";
import { FxUiSchema } from "./index";
export interface DefaultProps {
    schemaId: string;
    formId?: string;
    uiSchema?: Array<string | FxUiSchema> | FxUiSchema;
    parentKeys: string[];
    globalOptions: Immutable.Map<string, any>;
    ajv: Ajv;
    arrayIndex?: number;
    arrayLevel?: number[];
    formItemData?: any;
    formItemMeta?: any;
}
