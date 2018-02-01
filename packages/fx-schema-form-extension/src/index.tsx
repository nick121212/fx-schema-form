import schemaFormReact from "fx-schema-form-react";

import conditionHoc from "./hocs/condition";
import clearHoc from "./hocs/clear";
import consoleHoc from "./hocs/console";

const { hocFactory } = schemaFormReact;

hocFactory.add("condition", conditionHoc.bind(conditionHoc, hocFactory));
hocFactory.add("clear", clearHoc.bind(clearHoc, hocFactory));
hocFactory.add("console", consoleHoc.bind(consoleHoc, hocFactory));

console.log(hocFactory);
