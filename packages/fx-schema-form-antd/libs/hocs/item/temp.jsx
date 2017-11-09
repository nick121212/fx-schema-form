var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { compose, shouldUpdate, onlyUpdateForKeys } from "recompose";
import isEqual from "lodash.isequal";
import { connect } from "react-redux";
import { mapMetaStateToProps, mapFormItemDataProps } from "../select";
const metaConnect = compose(connect(mapMetaStateToProps), onlyUpdateForKeys(["meta"]), shouldUpdate((curProps, nextProps) => {
    return !isEqual(curProps.meta, nextProps.meta);
}));
export const TempHoc = (hocFactory, Component) => {
    let TempComponentHoc = class TempComponentHoc extends React.PureComponent {
        constructor() {
            super(...arguments);
            this.tempField = "ui:temp";
        }
        render() {
            const { mergeSchema, globalOptions } = this.props;
            const { uiSchema = { options: {} }, keys } = mergeSchema;
            const TempComponents = this.getTemplates();
            const uiSchemaOptions = uiSchema.options || {};
            const ComponentWithHoc = compose(connect(mapFormItemDataProps))(Component);
            let index = 0;
            return TempComponents.reduce((prev, { key, Temp }) => {
                let TempWithHoc = metaConnect(Temp);
                return <TempWithHoc globalOptions={globalOptions} tempKey={key} uiSchemaOptions={uiSchemaOptions} key={keys.join(".") + key + index++} {...this.props} children={prev}/>;
            }, <ComponentWithHoc key={keys.join(".")} uiSchemaOptions={uiSchemaOptions} {...this.props}/>);
        }
        getTemplates() {
            const { mergeSchema, globalOptions, currentTheme } = this.props;
            const { uiSchema = { options: {} }, keys, type } = mergeSchema;
            const typeDefaultOptions = globalOptions[type] || {};
            const template = uiSchema[this.tempField] ||
                typeDefaultOptions[this.tempField] ||
                globalOptions[this.tempField] || "default", TempComponent = [];
            if (typeof template === "string") {
                TempComponent.push({
                    key: template,
                    Temp: (currentTheme.tempFactory.get(template))
                });
            }
            else {
                [].concat(template).reverse().forEach((tml, idx) => {
                    if (!currentTheme.tempFactory.has(tml || "default")) {
                        console.error(`不存在${tml}的temp！`);
                    }
                    else {
                        TempComponent.push({
                            key: tml,
                            Temp: currentTheme.tempFactory.get(tml || "default")
                        });
                    }
                });
            }
            return TempComponent;
        }
    };
    TempComponentHoc = __decorate([
        compose(shouldUpdate(() => false))
    ], TempComponentHoc);
    return TempComponentHoc;
};
//# sourceMappingURL=temp.jsx.map