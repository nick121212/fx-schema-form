var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import jpp from "json-pointer";
import { ConBase } from "./icon";
import { SchemaFormCreate } from "../libs/create";
var JppCon = (function (_super) {
    __extends(JppCon, _super);
    function JppCon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JppCon.prototype.getState = function (state, props) {
        var key = jpp.compile(props.reducerKeys), jState = jpp(state);
        if (!jState.has(key)) {
            return {};
        }
        return jState.get(key);
    };
    JppCon.prototype.getAllData = function (state, props) {
        var curState = this.getState(state, props);
        return curState.data;
    };
    JppCon.prototype.getAllMeta = function (state, props) {
        var curState = this.getState(state, props);
        return curState.meta;
    };
    JppCon.prototype.getItemData = function (state, props) {
        var jData = jpp(this.getAllData(state, props));
        var schemaKey = props.schemaKey, mergeSchema = props.mergeSchema;
        var _a = mergeSchema.keys, keys = _a === void 0 ? [] : _a;
        var key = jpp.compile(keys);
        if (!jData.has(key)) {
            return undefined;
        }
        return jData.get(key);
    };
    JppCon.prototype.getItemMeta = function (state, props) {
        var schemaKey = props.schemaKey, mergeSchema = props.mergeSchema;
        var _a = mergeSchema.keys, keys = _a === void 0 ? [] : _a;
        var metaData = SchemaFormCreate.metas[schemaKey];
        return metaData.getMeta(keys);
    };
    JppCon.prototype.updateState = function (state, props, data) {
        return Object.assign({}, state, data);
    };
    JppCon.prototype.mergeData = function (state, props, data) {
        return Object.assign({}, state, data);
    };
    JppCon.prototype.getOriginData = function (state, props) {
        return this.getAllData(state, props);
    };
    JppCon.prototype.initData = function (props, data) {
        return data;
    };
    JppCon.prototype.updateItem = function (state, props, data, keyInfo) {
        var jAllData = jpp(this.getAllData(state, props));
        jAllData.set(keyInfo.normalKey, data);
        return jAllData;
    };
    JppCon.prototype.addItem = function (state, props, data, keyInfo) {
        var formItemData = this.getItemData(state, props) || [];
        var jAllData = jpp(this.getAllData(state, props));
        jAllData.set(keyInfo.normalKey, formItemData.concat([data]));
        return jAllData;
    };
    JppCon.prototype.removeItem = function (state, props, data, keyInfo) {
        var formItemData = this.getItemData(state, props) || [];
        var jAllData = jpp(this.getAllData(state, props));
        formItemData.splice(formItemData, 1);
        jAllData.set(keyInfo.normalKey, formItemData);
        return jAllData;
    };
    JppCon.prototype.switchItem = function (state, props, from, to, keyInfo) {
        var formItemData = this.getItemData(state, props) || [];
        var jAllData = jpp(this.getAllData(state, props));
        _a = [formItemData[to], formItemData[from]], formItemData[from] = _a[0], formItemData[to] = _a[1];
        jAllData.set(keyInfo.normalKey, formItemData);
        return jAllData;
        var _a;
    };
    return JppCon;
}(ConBase));
export { JppCon };
//# sourceMappingURL=jpp.jsx.map