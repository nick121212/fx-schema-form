import { BaseFactory } from "fx-schema-form-core";
import { hocs } from "./hocs";
import { schemaFormReducer } from "./reducer";
export const reducerFactory = new BaseFactory();
export const hocFactory = new BaseFactory();
export const themeFactory = new BaseFactory();
hocs.forEach((hoc) => {
    hocFactory.add(hoc.name, hoc.hoc(hocFactory));
});
reducerFactory.add("schemaForm", schemaFormReducer);
//# sourceMappingURL=factory.js.map