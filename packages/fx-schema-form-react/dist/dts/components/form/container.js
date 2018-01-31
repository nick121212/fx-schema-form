"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var recompose_1 = require("recompose");
var factory_1 = require("../../factory");
exports.hoc = recompose_1.compose(recompose_1.shouldUpdate(function () { return false; }), factory_1.hocFactory.get("utils")(), factory_1.hocFactory.get("merge")());
//# sourceMappingURL=container.js.map