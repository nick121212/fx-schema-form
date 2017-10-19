import React from "react";

import { RC } from "../../types";

export interface SchemaFormBaseProps {
    schemaKey: string;
    schema: any;
    uiSchema: Array<any>;
    globalOptions: any;
    RootComponent?: RC<any, any>;
    parentKeys?: Array<string>;
    schemaFormOptions?: any;

    actions?: any;

    getCurrentState?: (state: any, props: any) => any;

    arrayIndex?: number;
    arrayItems?: Array<JSX.Element>;
    arrayItemItems?: Array<JSX.Element>;
    formData?: any;
}
