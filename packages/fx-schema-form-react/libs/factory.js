import { BaseFactory } from "fx-schema-form-core";
import { hocs } from "./hocs";
import { schemaFormReducer } from "./reducer";
export const reducerFactory = new BaseFactory();
export const hocFactory = new BaseFactory();
export const themeFactory = new BaseFactory();
export const errorFactory = new BaseFactory();
hocs.forEach((hoc) => {
    hocFactory.add(hoc.name, hoc.hoc(hocFactory));
});
reducerFactory.add("schemaForm", schemaFormReducer);
errorFactory.add("default", (element, dataKeys) => {
    return dataKeys.pop() + " " + element.message;
});
//# sourceMappingURL=factory.js.map