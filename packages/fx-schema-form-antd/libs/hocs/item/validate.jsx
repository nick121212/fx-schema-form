var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { connect } from "react-redux";
import { compose, shouldUpdate } from "recompose";
import { mapActionsStateToProps } from "../select";
const mapDispatchToProps = (dispatch, ownProps) => {
    const { mergeSchema, actions, schemaFormOptions, schemaKey, formData } = ownProps;
    const { keys } = mergeSchema;
    const validate = schemaFormOptions.ajv.compile(Object.assign({}, mergeSchema, { $async: true, id: null }));
    for (const key in actions) {
        if (actions.hasOwnProperty(key)) {
            const element = actions[key];
            if (!element.assigned(dispatch)) {
                element.assignTo(dispatch);
            }
        }
    }
    return {
        updateItemData: (data) => {
            actions.updateItem({ keys, data, meta: {} });
        },
        validate: (data) => {
            let result = {
                dirty: true,
                isValid: false,
                isLoading: false,
                errorText: ""
            };
            let timeId = setTimeout(() => {
                actions.updateItemMeta({ keys, meta: { isLoading: true, isValid: false, errorText: false } });
            }, 50);
            validate(data).then(() => {
                clearTimeout(timeId);
                result.isValid = true;
                actions.updateItemMeta({ keys, meta: result });
            }).catch((err) => {
                clearTimeout(timeId);
                result.errorText = err.errors ?
                    schemaFormOptions.ajv.errorsText(err.errors, { dataVar: "/" + keys.join("/") })
                    : err.message;
                actions.updateItemMeta({ keys, meta: result });
            });
        }
    };
};
export const ValidateHoc = (hocFactory, Component) => {
    let ValidateComponentHoc = class ValidateComponentHoc extends React.PureComponent {
        render() {
            return <Component {...this.props}/>;
        }
    };
    ValidateComponentHoc = __decorate([
        compose(connect(mapActionsStateToProps), connect(null, mapDispatchToProps), shouldUpdate(() => false))
    ], ValidateComponentHoc);
    return ValidateComponentHoc;
};
//# sourceMappingURL=validate.jsx.map