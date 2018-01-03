var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from "react";
import { connect } from "react-redux";
import { compose, shouldUpdate } from "recompose";
const mapDispatchToProps = (dispatch, ownProps) => {
    const { mergeSchema, actions, schemaFormOptions, schemaKey, formData } = ownProps;
    const { keys } = mergeSchema;
    const schema = Object.assign({}, mergeSchema, { $async: true });
    const validate = schemaFormOptions.ajv.compile(schema);
    const validateAsync = (data) => __awaiter(this, void 0, void 0, function* () {
        let result = {
            dirty: true,
            isValid: false,
            isLoading: false
        };
        let timeId = setTimeout(() => {
            actions.updateItemMeta({ keys, meta: { isLoading: true, isValid: false, errorText: false } });
        }, 200);
        try {
            yield validate(data);
            result.isValid = true;
            clearTimeout(timeId);
        }
        catch (err) {
            clearTimeout(timeId);
            result.errorText = err.errors ?
                schemaFormOptions.ajv.errorsText(err.errors, { dataVar: "/" + keys.join("/") })
                : err.message;
        }
        return result;
    });
    return {
        validate: validateAsync,
        updateItemData: (data, meta) => {
            actions.updateItem({ keys, data, meta });
        },
        updateItemMeta: (data) => __awaiter(this, void 0, void 0, function* () {
            let result = yield validateAsync(data);
            actions.updateItemMeta({ keys, meta: result });
        })
    };
};
export default (hocFactory, settings = {}) => {
    return (Component) => {
        let ValidateComponentHoc = class ValidateComponentHoc extends React.PureComponent {
            render() {
                return React.createElement(Component, Object.assign({}, this.props));
            }
        };
        ValidateComponentHoc = __decorate([
            compose(connect(null, mapDispatchToProps), shouldUpdate(() => false))
        ], ValidateComponentHoc);
        return ValidateComponentHoc;
    };
};
//# sourceMappingURL=validate.js.map