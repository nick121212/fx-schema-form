"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = require("./input");
var checkbox_1 = require("./checkbox");
var switch_1 = require("./switch");
var null_1 = require("./null");
exports.default = {
    input: input_1.AntdInputWidget,
    string: input_1.AntdInputWidget,
    checkbox: checkbox_1.AntdCheckboxWidget,
    boolean: switch_1.AntdSwitchWidget,
    switch: switch_1.AntdSwitchWidget,
    null: null_1.NullWidget
};
//# sourceMappingURL=index.js.map