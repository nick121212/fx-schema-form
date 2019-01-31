import { UiSchema } from "../models/uischema";
export default class MergeLib {
    public mergeUiSchemaList: UiSchema[];
    constructor(schemaPath: string, parent?: UiSchema, uiSchemas?: Array<UiSchema | string>);
}
