import React from "react";
import { BaseFactory } from "fx-schema-form-core";

import proxyHoc from "./proxy";

const hocs: Array<{ name: string, hoc: (hocFactory: BaseFactory<React.PureComponent>) => any }> =
    [proxyHoc];

export default hocs;
