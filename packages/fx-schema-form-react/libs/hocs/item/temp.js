import React from "react";
import { compose, shouldUpdate } from "recompose";
import isEqual from "lodash.isequal";
import { connect } from "react-redux";
import { mapMetaStateToProps } from "../select";
const metaConnect = compose(shouldUpdate(() => false), connect(mapMetaStateToProps), shouldUpdate((curProps, nextProps) => {
    return !isEqual(curProps.meta, nextProps.meta);
}));
export default (hocFactory, settings = {
        tempField: "ui:temp",
        templates: [],
        tempHoc: (TempComponent) => TempComponent
    }) => {
    return (Component) => {
        class TempComponentHoc extends React.PureComponent {
            render() {
                const { mergeSchema, globalOptions } = this.props;
                const { uiSchema = { options: {} }, keys } = mergeSchema;
                const TempComponents = this.getTemplates();
                const uiSchemaOptions = uiSchema.options || {};
                return TempComponents.reduce((prev, { key, Temp }) => {
                    let TempWithHoc = settings.tempHoc(Temp);
                    return React.createElement(TempWithHoc, Object.assign({ globalOptions: globalOptions, tempKey: key, uiSchemaOptions: uiSchemaOptions, key: keys.join(".") + key }, this.props, { children: prev }));
                }, React.createElement(Component, Object.assign({ key: keys.join("."), uiSchemaOptions: uiSchemaOptions }, this.props)));
            }
            getTemplates() {
                const { mergeSchema, globalOptions, currentTheme } = this.props;
                const { uiSchema = { options: {} }, keys, type } = mergeSchema;
                const { field = {} } = globalOptions || {};
                const typeDefaultOptions = field[type] || {};
                let template = uiSchema[settings.tempField] ||
                    typeDefaultOptions[settings.tempField] || "default", TempComponent = [];
                if (settings.templates && settings.templates.length > 0) {
                    template = settings.templates;
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
                            [].concat(template).reverse().forEach((tml, idx) => {
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