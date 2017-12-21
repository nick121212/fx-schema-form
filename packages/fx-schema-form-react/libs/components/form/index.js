import React from "react";
import { hoc } from "./container";
import { SchemaFormItem } from "../../index";
import { SchemaFormBlock } from "../block";
class SchemaFormComponent extends React.PureComponent {
    render() {
        const { children, mergeSchemaList, schemaKey, ItemButtons, arrayIndex, arrayLevel, globalOptions, RootComponent, schemaFormOptions, reducerKeys, formDefaultData, getCurrentState, actions } = this.props;
        let RootComponentHock = RootComponent;
        if (!RootComponentHock) {
            RootComponentHock = SchemaFormBlock;
        }
        return (React.createElement(RootComponentHock, null,
            mergeSchemaList.map((mergeSchema, idx) => {
                mergeSchema.keys = this.mergeKeys(mergeSchema);
                return React.createElement(SchemaFormItem, { key: `${schemaKey}-${idx.toString()}}`, getCurrentState: getCurrentState, schemaKey: schemaKey, arrayIndex: arrayIndex, reducerKeys: reducerKeys, arrayLevel: arrayLevel, ItemButtons: ItemButtons, actions: actions, formDefaultData: formDefaultData, mergeSchemaList: mergeSchemaList, mergeSchema: mergeSchema, schemaFormOptions: schemaFormOptions, globalOptions: globalOptions });
            }),
            children || null));
    }
    mergeKeys(mergeSchema) {
        const { arrayLevel = [] } = this.props;
        let arrayLevelCopy = arrayLevel.concat([]);
        mergeSchema.originKeys = mergeSchema.keys.concat([]);
        return mergeSchema.keys.map((key) => {
            if (key === "-") {
                return arrayLevelCopy.shift();
            }
            return key;
        });
    }
}
export const SchemaForm = hoc(SchemaFormComponent);
//# sourceMappingURL=index.js.map