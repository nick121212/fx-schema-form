import { SchemaFormCreate } from "../libs/create";
var ConBase = (function () {
    function ConBase() {
    }
    ConBase.prototype.getActions = function (state, props) {
        var schemaKey = props.schemaKey;
        var metaData = SchemaFormCreate.metas[schemaKey];
        if (props.schemaFormOptions && props.schemaFormOptions.ajv) {
            metaData.init(props.schemaFormOptions, props.schemaKey);
        }
        return metaData.actions;
    };
    return ConBase;
}());
export { ConBase };
//# sourceMappingURL=icon.jsx.map