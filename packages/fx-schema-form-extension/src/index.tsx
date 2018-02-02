import schemaFormReact from "fx-schema-form-react";

import conditionHoc from "./hocs/condition";
import resetKeyHoc from "./hocs/resetkey";
import consoleHoc from "./hocs/console";
import oneOfHoc from "./hocs/oneof";


const { hocFactory } = schemaFormReact;

hocFactory.add("condition", conditionHoc.bind(conditionHoc, hocFactory));
hocFactory.add("resetKey", resetKeyHoc.bind(resetKeyHoc, hocFactory));
hocFactory.add("console", consoleHoc.bind(consoleHoc, hocFactory));
hocFactory.add("oneof", oneOfHoc.bind(oneOfHoc, hocFactory));

console.log(hocFactory);
