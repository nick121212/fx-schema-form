"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var recompose_1 = require("recompose");
var hocs_1 = require("../../hocs");
exports.hoc = recompose_1.compose(recompose_1.onlyUpdateForKeys(["formItemData", "meta"]), hocs_1.hocFactory.get("make"));
//# sourceMappingURL=container.js.map