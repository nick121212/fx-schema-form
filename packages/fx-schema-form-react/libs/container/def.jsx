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
import { ConBase } from "./icon";
import { SchemaFormCreate } from "../libs/create";
var DefCon = (function (_super) {
    __extends(DefCon, _super);
    function DefCon(conFactory) {
        var _this = _super.call(this) || this;
        _this.conFactory = conFactory;
        return _this;
    }
    DefCon.prototype.getContainer = function (props) {
        var meta = SchemaFormCreate.metas[props.schemaKey], key = meta.con;
        var container;
        if (this.conFactory.has(key)) {
            container = this.conFactory.get(key);
        }
        else {
            container = this.conFactory.get("default");
        }
        return container;
    };
    DefCon.prototype.getState = function (state, props) {
        var container = this.getContainer(props);
        return container.getState(state, props);
    };
    DefCon.prototype.getAllData = function (state, props) {
        var container = this.getContainer(props);
        return container.getAllData(state, props);
    };
    DefCon.prototype.getAllMeta = function (state, props) {
        var container = this.getContainer(props);
        return container.getAllMeta(state, props);
    };
    DefCon.prototype.getItemData = function (state, props) {
        var container = this.getContainer(props);
        return container.getItemData(state, props);
    };
    DefCon.prototype.getItemMeta = function (state, props) {
        var container = this.getContainer(props);
        return container.getItemMeta(state, props);
    };
    DefCon.prototype.updateState = function (state, props, data) {
        var container = this.getContainer(props);
        return container.updateState(state, props, data);
    };
    DefCon.prototype.mergeData = function (state, props, data) {
        var container = this.getContainer(props);
        return container.mergeData(state, props, data);
    };
    DefCon.prototype.getOriginData = function (state, props) {
        var container = this.getContainer(props);
        return container.getOriginData(state, props);
    };
    DefCon.prototype.initData = function (props, data) {
        var container = this.getContainer(props);
        return container.initData(props, data);
    };
    DefCon.prototype.updateItem = function (state, props, data, keyInfo) {
        var container = this.getContainer(props);
        return container.updateItem(state, props, data, keyInfo);
    };
    DefCon.prototype.addItem = function (state, props, data, keyInfo) {
        var container = this.getContainer(props);
        return container.addItem(state, props, data, keyInfo);
    };
    DefCon.prototype.removeItem = function (state, props, data, keyInfo) {
        var container = this.getContainer(props);
        return container.removeItem(state, props, data, keyInfo);
    };
    DefCon.prototype.switchItem = function (state, props, from, to, keyInfo) {
        var container = this.getContainer(props);
        return container.switchItem(state, props, from, to, keyInfo);
    };
    return DefCon;
}(ConBase));
export { DefCon };
//# sourceMappingURL=def.jsx.map