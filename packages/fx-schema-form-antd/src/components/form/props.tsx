import React from "react";

import { RC } from "../../types";

export interface SchemaFormProps {
    schemaKey: string;
    schema: any;
    uiSchema: Array<any>;
    globalOptions: any;
    RootComponent?: RC<any, any>;
    parentKeys?: Array<string>;
    schemaFormOptions?: any;

    arrayIndex?: number;
    formData?: any;
}
