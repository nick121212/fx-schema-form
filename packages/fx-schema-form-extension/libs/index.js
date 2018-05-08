import schemaFormReact from "fx-schema-form-react";
import { fields } from "./fields";
import { hocs } from "./hocs";
const { hocFactory, defaultTheme } = schemaFormReact;
hocs.forEach((hoc) => {
    hocFactory.add(hoc.name, hoc.hoc(hocFactory));
});
fields.forEach((field) => {
    for (const key in field) {
        if (field.hasOwnProperty(key)) {
            defaultTheme.fieldFactory.add(key, field[key]);
        }
    }
});
//# sourceMappingURL=index.js.map