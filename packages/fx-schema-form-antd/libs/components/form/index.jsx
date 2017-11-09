import React from "react";
import { hoc } from "./container";
import { SchemaFormItem } from "../../index";
import { SchemaFormBlock } from "../block";
class SchemaFormComponent extends React.PureComponent {
    render() {
        const { children, mergeSchemaList, schemaKey, ItemButtons, arrayIndex, arrayLevel, globalOptions, RootComponent, schemaFormOptions, formDefaultData, getCurrentState } = this.props;
        let RootComponentHock = RootComponent;
        if (!RootComponentHock) {
            RootComponentHock = SchemaFormBlock;
        }
        return (<RootComponentHock>
                {mergeSchemaList.map((mergeSchema, idx) => {
            mergeSchema.keys = this.mergeKeys(mergeSchema);
            return <SchemaFormItem key={`${schemaKey}-${idx.toString()}}`} getCurrentState={getCurrentState} schemaKey={schemaKey} arrayIndex={arrayIndex} arrayLevel={arrayLevel} ItemButtons={ItemButtons} formDefaultData={formDefaultData} mergeSchemaList={mergeSchemaList} mergeSchema={mergeSchema} schemaFormOptions={schemaFormOptions} globalOptions={globalOptions}>
                        </SchemaFormItem>;
        })}
                {children}
            </RootComponentHock>);
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
//# sourceMappingURL=index.jsx.map