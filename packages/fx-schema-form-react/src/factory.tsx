import React from "react";
import { BaseFactory } from "fx-schema-form-core";

import { FxReducer } from "./reducers/reducer";
import { DefaultProps } from "./components";
import { FxUiSchema, RC, NsFactory, SchemaFormNs } from "./models";
import { hocs } from "./hocs";
import { schemaFormReducer } from "./reducer";

export const reducerFactory = new BaseFactory<FxReducer>();
export const hocFactory = new BaseFactory<(settings?: any) => new () => React.PureComponent<DefaultProps, any>>();
export const themeFactory = new BaseFactory<NsFactory>();

hocs.forEach((hoc: { name: string, hoc: (hocFactory: BaseFactory<any>) => any }) => {
    hocFactory.add(hoc.name, hoc.hoc(hocFactory));
});

reducerFactory.add("schemaForm", schemaFormReducer);

