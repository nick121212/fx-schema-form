import schemaFormReact from "fx-schema-form-react";

import conditionHoc from "./hocs/condition";
import resetKeyHoc from "./hocs/resetkey";
import oneOfHoc from "./hocs/oneof";
import showHoc from "./hocs/show";
import tempHoc from "./hocs/temp";
import dataToMetaHoc from "./hocs/datatometa";
import { DesignField } from "./fields/design";

const { hocFactory, defaultTheme } = schemaFormReact;

hocFactory.add("condition", conditionHoc.bind(conditionHoc, hocFactory));
hocFactory.add("resetKey", resetKeyHoc.bind(resetKeyHoc, hocFactory));
hocFactory.add("oneof", oneOfHoc.bind(oneOfHoc, hocFactory));
hocFactory.add("show", showHoc.bind(showHoc, hocFactory));
hocFactory.add("extraTemp", tempHoc.bind(tempHoc, hocFactory));
hocFactory.add("dataToMeta", dataToMetaHoc.bind(dataToMetaHoc, hocFactory));

defaultTheme.fieldFactory.add("design", DesignField as any);
