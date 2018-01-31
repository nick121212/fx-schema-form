"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var recompose_1 = require("recompose");
var factory_1 = require("../../factory");
exports.hoc = recompose_1.compose(factory_1.hocFactory.get("utils")(), factory_1.hocFactory.get("make")());
//# sourceMappingURL=container.js.map