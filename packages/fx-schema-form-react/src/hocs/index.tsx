import React from "react";

import { default as merge } from "./merge";
import { default as utils } from "./utils";
import { default as theme } from "./theme";
import { default as field } from "./field";
import { default as array } from "./array";
import { default as validate } from "./validate";
import { default as make } from "./make";
import { default as temp } from "./temp";
import { default as data } from "./data";
import { BaseFactory } from "fx-schema-form-core";

export const hocs: Array<{ name: string, hoc: (hocFactory: BaseFactory<React.PureComponent>) => any }> =
    [merge, utils, theme, field, array, validate, make, temp, data];
