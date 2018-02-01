import { Ajv } from "ajv";
import { UiSchema } from "../models/uischema";
export default class MergeLib {
    private schemaPath;
    parent: UiSchema | null;
    private uiSchemas;
    mergeUiSchemaList: UiSchema[];
    private curSchema;
    constructor(ajv: Ajv, schemaPath: string, parent?: UiSchema | null, uiSchemas?: Array<UiSchema | string>);
    private getParentSchemaKeys();
    private getUiSchemaKeyRecursion(uiSchemaKeys, parentKeys);
    private getCurrentSchemaKey(uiSchema);
    private initUiSchema(uiSchema);
    private mergeUiSchemaToArray(uiSchema);
    private mergeUiSchema();
}
