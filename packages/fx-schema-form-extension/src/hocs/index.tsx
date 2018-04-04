import React from "react";
import { BaseFactory } from "fx-schema-form-core";

import conditionHoc from "./condition";
import resetKeyHoc from "./resetkey";
import oneOfHoc from "./oneof";
import showHoc from "./show";
import tempHoc from "./temp";
import formHoc from "./form";
import widgetHoc from "./widget";
import dataToMetaHoc from "./datatometa";
import formatHoc from "./format";
import wrapperHoc from "./wrapper";

export const hocs: Array<{ name: string, hoc: (hocFactory: BaseFactory<React.PureComponent>) => any }> =
    [conditionHoc, resetKeyHoc, oneOfHoc, showHoc, tempHoc, formHoc, widgetHoc, dataToMetaHoc, wrapperHoc, formatHoc];
