var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { SchemaForm } from "../index";
import { shouldUpdate } from "recompose";
let ObjectField = class ObjectField extends React.PureComponent {
    render() {
        const { mergeSchema, currentTheme, WidgetComponent, arrayIndex, ItemButtons, arrayLevel, getCurrentState, globalOptions, schemaFormOptions, schemaKey, getFieldOptions, reducerKeys } = this.props;
        const { uiSchema } = mergeSchema;
        return (React.createElement(SchemaForm, { arrayIndex: arrayIndex, schemaFormOptions: schemaFormOptions, getCurrentState: getCurrentState, schemaKey: schemaKey, arrayLevel: arrayLevel, reducerKeys: reducerKeys, schema: mergeSchema, parentKeys: mergeSchema.originKeys, RootComponent: getFieldOptions("object").root, uiSchema: uiSchema.items || ["*"], globalOptions: globalOptions }));
    }
};
ObjectField = __decorate([
    shouldUpdate(() => false)
], ObjectField);
export { ObjectField };
//# sourceMappingURL=object.js.map