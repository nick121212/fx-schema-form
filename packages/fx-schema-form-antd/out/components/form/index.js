import React from "react";
import { hoc } from "./container";
import { SchemaFormItem } from "../../index";
import { SchemaFormBlock } from "../block";
/**
 * SchemaForm组件
 * 通过schema和uiSchea生成表单元素
 */
class SchemaFormComponent extends React.Component {
    render() {
        const { children, mergeSchemaList, schemaKey, formData, arrayItems, arrayIndex, globalOptions, RootComponent, schemaFormOptions } = this.props;
        let RootComponentHock = RootComponent;
        console.log("---------------SchemaForm rendered");
        // 计算顶部容器，如果有RootComponent，则使用，否则使用默认的容器组件
        if (!RootComponentHock) {
            RootComponentHock = SchemaFormBlock;
        }
        // 验证一次，设置默认值
        schemaFormOptions.ajv.validate(schemaKey, formData);
        return (React.createElement(RootComponentHock, null,
            mergeSchemaList.map((mergeSchema, idx) => {
                let find = false;
                if (typeof arrayIndex === "number") {
                    mergeSchema.keys = mergeSchema.keys.map((key) => {
                        if (find) {
                            return key;
                        }
                        if (key === "-") {
                            return arrayIndex;
                        }
                        return key;
                    });
                }
                return React.createElement(SchemaFormItem, { key: `${schemaKey}-${idx.toString()}`, schemaKey: schemaKey, arrayIndex: arrayIndex, arrayItems: arrayItems, mergeSchemaList: mergeSchemaList, mergeSchema: mergeSchema, schemaFormOptions: schemaFormOptions, globalOptions: globalOptions });
            }),
            children));
    }
}
export const SchemaForm = hoc(SchemaFormComponent);
//# sourceMappingURL=index.js.map