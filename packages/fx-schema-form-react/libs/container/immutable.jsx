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
import Immutable from "immutable";
import { ConBase } from "./icon";
import { SchemaFormCreate } from "../libs/create";
var ImmutableCon = (function (_super) {
    __extends(ImmutableCon, _super);
    function ImmutableCon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImmutableCon.prototype.resolveKeys = function (data, keys) {
        if (data.hasIn(keys)) {
            return data;
        }
        for (var i = 0, n = keys.length; i < n; i++) {
            var mKeys = [].concat(keys).splice(0, i + 1);
            if (!data.hasIn(mKeys)) {
                mKeys.pop();
                if (!data.hasIn(mKeys)) {
                    if (keys[i].constructor === Number) {
                        data = data.setIn(mKeys, Immutable.List());
                    }
                    else {
                        data = data.setIn(mKeys, Immutable.Map());
                    }
                }
            }
        }
        return data;
    };
    ImmutableCon.prototype.getState = function (state, props) {
        return state.getIn(props.reducerKeys || []) || Immutable.Map();
    };
    ImmutableCon.prototype.getAllData = function (state, props) {
        var curState = this.getState(state, props);
        return curState.get("data");
    };
    ImmutableCon.prototype.getAllMeta = function (state, props) {
        var curState = this.getState(state, props);
        return curState.get("meta").toJS();
    };
    ImmutableCon.prototype.getItemData = function (state, props) {
        var jData = this.getAllData(state, props);
        var schemaKey = props.schemaKey, mergeSchema = props.mergeSchema;
        var _a = mergeSchema.keys, keys = _a === void 0 ? [] : _a;
        return jData.getIn(keys);
    };
    ImmutableCon.prototype.getItemMeta = function (state, props) {
        var schemaKey = props.schemaKey, mergeSchema = props.mergeSchema;
        var _a = mergeSchema.keys, keys = _a === void 0 ? [] : _a;
        var metaData = SchemaFormCreate.metas[schemaKey];
        return metaData.getMeta(keys);
    };
    ImmutableCon.prototype.updateState = function (state, props, data) {
        return Immutable.fromJS(data);
    };
    ImmutableCon.prototype.mergeData = function (state, props, data) {
        var newState = state;
        if (data.data) {
            newState = newState.set("data", data.data);
        }
        if (data.meta) {
            if (!Immutable.Map.isMap(data.meta)) {
                data.meta = Immutable.fromJS(data.meta);
            }
            newState = newState.set("meta", data.meta);
        }
        return newState;
    };
    ImmutableCon.prototype.getOriginData = function (state, props) {
        return this.getAllData(state, props);
    };
    ImmutableCon.prototype.initData = function (props, data) {
        return Immutable.fromJS(data);
    };
    ImmutableCon.prototype.updateItem = function (state, props, data, keyInfo) {
        var jAllData = this.getAllData(state, props);
        jAllData = this.resolveKeys(jAllData, keyInfo.keys);
        if (!Immutable.Map.isMap(data)) {
            data = Immutable.fromJS(data);
        }
        jAllData = jAllData.removeIn(keyInfo.keys);
        return jAllData.setIn(keyInfo.keys, data);
    };
    ImmutableCon.prototype.addItem = function (state, props, data, keyInfo) {
        var formItemData = this.getItemData(state, props) || Immutable.List();
        var jAllData = this.getAllData(state, props);
        jAllData = this.resolveKeys(jAllData, keyInfo.keys);
        return jAllData.setIn(keyInfo.keys, formItemData.push(Immutable.fromJS(data)));
    };
    ImmutableCon.prototype.removeItem = function (state, props, data, keyInfo) {
        var formItemData = this.getItemData(state, props) || Immutable.List();
        var jAllData = this.getAllData(state, props);
        jAllData = this.resolveKeys(jAllData, keyInfo.keys);
        return jAllData.setIn(keyInfo.keys, formItemData.remove(data));
    };
    ImmutableCon.prototype.switchItem = function (state, props, from, to, keyInfo) {
        var formItemData = this.getItemData(state, props) || Immutable.List();
        var jAllData = this.getAllData(state, props);
        var cur = formItemData.get(from);
        jAllData = this.resolveKeys(jAllData, keyInfo.keys);
        formItemData = formItemData.set(from, formItemData.get(to));
        formItemData = formItemData.set(to, cur);
        return jAllData.setIn(keyInfo.keys, formItemData);
    };
    return ImmutableCon;
}(ConBase));
export { ImmutableCon };
//# sourceMappingURL=immutable.jsx.map