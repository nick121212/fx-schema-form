import React from "react";
import merge from "lodash.merge";
import resolvePathname from "resolve-pathname";
export default (hocFactory, settings = {}) => {
    return (Component) => {
        class ComponentHoc extends React.PureComponent {
            render() {
                return React.createElement(Component, Object.assign({ getHocOptions: this.getHocOptions.bind(this), getFieldOptions: this.getFieldOptions.bind(this), getWidgetOptions: this.getWidgetOptions.bind(this), getTitle: this.getTitle.bind(this), getTempOptions: this.getTempOptions, getPathKeys: this.getPathKeys.bind(this) }, this.props));
            }
            getFieldOptions(field) {
                const { mergeSchema, globalOptions } = this.props;
                const { uiSchema } = mergeSchema;
                const uiSchemaOptions = uiSchema.options || {};
                const fieldOptions = uiSchemaOptions.field || {};
                const fieldDefaultOptions = globalOptions.field || {};
                return merge({}, fieldDefaultOptions[field] || {}, fieldOptions[field] || {});
            }
            getTempOptions(temp) {
                const { mergeSchema, globalOptions } = this.props;
                const { uiSchema } = mergeSchema;
                const uiSchemaOptions = uiSchema.options || {};
                const tempOptions = uiSchemaOptions[temp] || {};
                const fieldDefaultOptions = globalOptions[temp] || {};
                return merge({}, tempOptions, fieldDefaultOptions);
            }
            getWidgetOptions(widget) {
                const { mergeSchema = {}, globalOptions = {}, uiSchemaOptions = {} } = this.props;
                const { options = { widget: {} } } = mergeSchema.uiSchema;
                const uiOptions = uiSchemaOptions.widget || {};
                const widgetOptions = options.widget || {};
                const widgetGlobalOptions = globalOptions.widget || {};
                return merge({}, widgetGlobalOptions[widget] || {}, uiOptions[widget] || {}, widgetOptions[widget] || {});
            }
            getHocOptions(hoc) {
                const { mergeSchema, globalOptions } = this.props;
                const { uiSchema } = mergeSchema;
                const uiSchemaOptions = uiSchema.options || {};
                const hocOptions = merge({}, globalOptions.hoc || {}, uiSchemaOptions.hoc || {});
                if (hoc) {
                    return hocOptions[hoc] || {};
                }
                return hocOptions;
            }
            getTitle() {
                const { mergeSchema } = this.props;
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