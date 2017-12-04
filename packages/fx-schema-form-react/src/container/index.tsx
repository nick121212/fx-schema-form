import { BaseFactory } from "fx-schema-form-core";

import { ConBase } from "./icon";
import { JppCon } from "./jpp";
import { DefCon } from "./def";
import { ImmutableCon } from "./immutable";

export const conFactory = new BaseFactory<ConBase<any, any, any>>();

conFactory.add("jpp", new JppCon());
conFactory.add("immu", new ImmutableCon());
conFactory.add("default", new DefCon(conFactory));
