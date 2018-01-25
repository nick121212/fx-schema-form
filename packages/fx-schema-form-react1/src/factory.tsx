import { BaseFactory } from "fx-schema-form-core";

import { FxReducer } from "./reducers/reducer";
import { SchemaFormReducer } from "./reducers/schema.form";
import { RC, DefaultProps, NsFactory, SchemaFormNs } from "./components";
import { utils, merge, field, theme, array, validate, make, temp, data } from "./hocs";
import { schemaFormReducer } from "./reducer";

export const reducerFactory = new BaseFactory<FxReducer>();
export const hocFactory = new BaseFactory<(settings?: any) => React.PureComponent<DefaultProps, any>>();
export const themeFactory = new BaseFactory<NsFactory>();

hocFactory.add("utils", utils.bind(utils, hocFactory));
hocFactory.add("merge", merge.bind(merge, hocFactory));
hocFactory.add("field", field.bind(field, hocFactory));
hocFactory.add("theme", theme.bind(theme, hocFactory));
hocFactory.add("array", array.bind(array, hocFactory));
hocFactory.add("validate", validate.bind(validate, hocFactory));
hocFactory.add("make", make.bind(make, hocFactory));
hocFactory.add("temp", temp.bind(temp, hocFactory));
hocFactory.add("data", data.bind(data, hocFactory));

reducerFactory.add("schemaForm", schemaFormReducer);

