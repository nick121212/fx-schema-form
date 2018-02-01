import React, { PureComponent } from "react";
import { compose } from "recompose";
export default (hocFactory, settings = {
        tempField: "temps",
        templates: []
    }) => {
    return (Component) => {
        class TempComponentHoc extends PureComponent {
            render() {
                const { uiSchema, getOptions } = this.props;
                const { options: uiSchemaOptions, keys } = uiSchema;
                const TempComponents = this.getTemplates();
                return TempComponents.reduce((prev, { key, Temp }) => {
                    const tempOptions = getOptions(this.props, "temp", key), TempWithHoc = compose(...(tempOptions.tempHocs || []))(Temp);
                    return React.createElement(TempWithHoc, { tempKey: key, ajv: this.props.ajv, uiSchema: this.props.uiSchema, schemaId: this.props.schemaId, arrayLevel: this.props.arrayLevel, arrayIndex: this.props.arrayIndex, globalOptions: this.props.globalOptions, ArrayComponent: this.props.ArrayComponent, ArrayItemComponent: this.props.ArrayItemComponent, initArrayComponent: this.props.initArrayComponent, parentKeys: this.props.parentKeys, getTitle: this.props.getTitle, getOptions: this.props.getOptions, getPathKeys: this.props.getPathKeys, children: prev });
                }, React.createElement(Component, Object.assign({}, this.props)));
            }
            getTemplates() {
                const { uiSchema, currentTheme, getOptions } = this.props, { keys, type } = uiSchema, typeDefaultOptions = getOptions(this.props, "field", type), TempComponent = [];
                let template;
                if (settings.templates && settings.templates.length > 0) {
                    template = settings.templates;
                }
                else {
                    template = typeDefaultOptions[settings.tempField] || "default";
                }
                const getTemplate = (tmp) => {
                    switch (tmp.constructor) {
                        case String:
                            if (!currentTheme.tempFactory.has(tmp)) {
                                console.error(`不存在${tmp}的temp！`);
                            }
                            else {
                                TempComponent.push({
                                    key: tmp,
                                    Temp: currentTheme.tempFactory.get(tmp)
                                });
                            }
                            break;
                        case Object:
                            TempComponent.push({
                                key: tmp.name,
                                Temp: tmp
                            });
                            break;
                        case Array:
                            [...template].reverse().forEach((tml, idx) => {
                                getTemplate(tml);
                            });
                            break;
                    }
                };
                getTemplate(template);
                return TempComponent;
            }
        }
        return TempComponentHoc;
    };
};
//# sourceMappingURL=temp.js.map