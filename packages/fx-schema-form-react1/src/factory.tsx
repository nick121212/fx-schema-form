import { BaseFactory } from "fx-schema-form-core";
import Immutbale from "immutable";

import { FxReducer } from "./reducers/reducer";
import { SchemaFormReducer } from "./reducers/schema.form";

export const reducerFactory = new BaseFactory<FxReducer>();

reducerFactory.add("schemaForm", new SchemaFormReducer(Immutbale.fromJS({})));
