import { Ajv } from "ajv";
import { UiSchema } from "../models/uischema";
export default class MergeLib {
    mergeUiSchemaList: UiSchema[];
    constructor(ajv: Ajv, schemaPath: string, parent: UiSchema, uiSchemas?: Array<UiSchema | string>);
}
