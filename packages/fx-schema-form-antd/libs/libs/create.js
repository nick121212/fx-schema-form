"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var form_1 = require("../reducer/form");
var meta_1 = require("./meta");
var SchemaFormCreate = /** @class */ (function () {
    function SchemaFormCreate() {
    }
    /**
     * 创建一个schema form reducer
     * @param key             唯一标志
     * @param data            数据
     * @param curJjv          当前的ajv实例
     * @param schema          当前的json schema
     * @param updateState     更新state的方法
     */
    SchemaFormCreate.prototype.createOne = function (key, data, curJjv, schema, getOriginState, updateState) {
        var meta = new meta_1.MetaData();
        var defaultValue = curJjv.validate(schema, data).catch(function () { return 1; });
        var reducer = new form_1.FormReducer(updateState ? updateState({}, {
            data: data,
            meta: meta.data
        }) : {
            data: data,
            meta: meta.data
        }, meta, getOriginState, updateState);
        meta.actions = reducer.actions;
        SchemaFormCreate.metas[key] = meta;
        return reducer;
    };
    SchemaFormCreate.metas = {};
    return SchemaFormCreate;
}());
exports.SchemaFormCreate = SchemaFormCreate;
exports.default = new SchemaFormCreate();
//# sourceMappingURL=create.js.map