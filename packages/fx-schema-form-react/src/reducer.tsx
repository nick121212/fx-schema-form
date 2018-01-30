import Immutable from "immutable";

import { SchemaFormReducer } from "./reducers/schema.form";

export const schemaFormReducer = new SchemaFormReducer(Immutable.fromJS({}));
