import React from "react";
import merge from "lodash.merge";
import resolvePathname from "resolve-pathname";
export default (hocFactory, settings = {}) => {
    return (Component) => {
        class ComponentHoc extends React.PureComponent {
            render() {
                return React.createElement(Component, Object.assign({ getHocOptions: this.getHocOptions, getFieldOptions: this.getFieldOptions, getWidgetOptions: this.getWidgetOptions, getTitle: this.getTitle, getTempOptions: this.getTempOptions, getPathKeys: this.getPathKeys }, this.props));
            }
            getFieldOptions(props, field) {
                const { mergeSchema, globalOptions } = props;
                const { uiSchema = { options: {} } } = mergeSchema;
                const uiSchemaOptions = uiSchema.options || {};
                const fieldOptions = uiSchemaOptions.field || {};
                const fieldDefaultOptions = globalOptions.field || {};
                return merge({}, fieldDefaultOptions[field] || {}, fieldOptions[field] || {});
            }
            getTempOptions(props, temp) {
                const { mergeSchema = {}, globalOptions = {}, uiSchemaOptions = {} } = props;
                const { options = { template: {} } } = mergeSchema.uiSchema;
                const uiOptions = uiSchemaOptions.template || {};
                const widgetOptions = options.template || {};
                const widgetGlobalOptions = globalOptions.template || {};
                return merge({}, widgetGlobalOptions[temp] || {}, uiOptions[temp] || {}, widgetOptions[temp] || {});
            }
            getWidgetOptions(props, widget) {
                const { mergeSchema = {}, globalOptions = {}, uiSchemaOptions = {} } = props;
                const { options = { widget: {} } } = mergeSchema.uiSchema;
                const uiOptions = uiSchemaOptions.widget || {};
                const widgetOptions = options.widget || {};
                const widgetGlobalOptions = globalOptions.widget || {};
                return merge({}, widgetGlobalOptions[widget] || {}, uiOptions[widget] || {}, widgetOptions[widget] || {});
            }
            getHocOptions(props, hoc) {
                const { mergeSchema, globalOptions } = props;
                const { uiSchema = { options: {} } } = mergeSchema;
                const uiSchemaOptions = uiSchema.options || {};
                const hocOptions = merge({}, globalOptions.hoc || {}, uiSchemaOptions.hoc || {});
                if (hoc) {
                    return hocOptions[hoc] || {};
                }
                return hocOptions;
            }
            getTitle(props) {
                const { mergeSchema } = props;
                const { uiSchema, title, keys } = mergeSchema;
                return uiSchema.title || title || [].concat(keys).pop();
            }
            getPathKeys(keys, path) {
                let keys1 = resolvePathname(path, "/" + keys.join("/")).split("/");
                keys1.shift();
                if (keys1.length && !keys1[keys1.length - 1]) {
                    keys1.pop();
                }
                return keys1;
            }
        }
        return ComponentHoc;
    };
};
//# sourceMappingURL=utils.js.map