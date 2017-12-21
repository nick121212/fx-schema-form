import { SchemaFormCreate } from "../libs/create";
export class ConBase {
    getActions(state, props) {
        const { schemaKey } = props;
        const metaData = SchemaFormCreate.metas[schemaKey];
        if (props.schemaFormOptions && props.schemaFormOptions.ajv) {
            metaData.init(props.schemaFormOptions, props.schemaKey);
        }
        return metaData.actions;
    }
}
//# sourceMappingURL=icon.js.map