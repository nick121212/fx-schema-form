import React from "react";
import { SchemaForm } from "../index";
/**
 * 数组字段的生成规则
 */
export class ArrayField extends React.Component {
    /**
     * 遍历数据，生成子表单
     * @param idx 数组的索引
     */
    renderItem(idx, maxLen) {
        const { mergeSchema, schemaKey, globalOptions, schemaFormOptions, arrayItems, createItemChildButtons } = this.props;
        const { uiSchema, keys } = mergeSchema;
        return (React.createElement(SchemaForm, { key: keys.join(".") + idx, schema: mergeSchema, arrayIndex: idx, arrayItems: createItemChildButtons ? createItemChildButtons.bind(null, idx, maxLen) : null, parentKeys: mergeSchema.keys, RootComponent: null, schemaKey: schemaKey, uiSchema: uiSchema.items, schemaFormOptions: schemaFormOptions, globalOptions: globalOptions }));
    }
    /**
     * 渲染页面
     */
    render() {
        const { mergeSchema, currentTheme, WidgetComponent, schemaKey, globalOptions, schemaFormOptions, formItemData, meta = { dirty: false, isValid: true, isShow: true } } = this.props;
        const { uiSchema, title } = mergeSchema;
        let child;
        child = formItemData && formItemData.map((data, idx) => {
            return this.renderItem(idx, formItemData.length);
        });
        return React.createElement("div", null, child || null);
    }
}
//# sourceMappingURL=array.js.map