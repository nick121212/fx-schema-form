import { fromJS } from "immutable";

import { SchemaFormReducer } from "./reducers/schema.form";

export const schemaFormReducer = new SchemaFormReducer(fromJS({}));
