import { BaseFactory } from "fx-schema-form-core";
import { JppCon } from "./jpp";
import { DefCon } from "./def";
import { ImmutableCon } from "./immutable";
export var conFactory = new BaseFactory();
conFactory.add("jpp", new JppCon());
conFactory.add("immu", new ImmutableCon());
conFactory.add("default", new DefCon(conFactory));
//# sourceMappingURL=index.jsx.map