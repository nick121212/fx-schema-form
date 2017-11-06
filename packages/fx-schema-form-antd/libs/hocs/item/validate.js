import * as tslib_1 from "tslib";
import React from "react";
import { connect } from "react-redux";
import { compose, pure } from "recompose";
import { mapActionsStateToProps } from "../select";
/**
 * 处理actions,这里吧actions添加到dispatch
 * @param dispatch 方法
 * @param ownProps 自身属性
 */
var mapDispatchToProps = function (dispatch, ownProps) {
    var mergeSchema = ownProps.mergeSchema, actions = ownProps.actions, schemaFormOptions = ownProps.schemaFormOptions, schemaKey = ownProps.schemaKey, formData = ownProps.formData;
    var keys = mergeSchema.keys;
    var validate = schemaFormOptions.ajv.compile(Object.assign({}, mergeSchema, { $async: true, id: null }));
    for (var key in actions) {
        if (actions.hasOwnProperty(key)) {
            var element = actions[key];
            if (!element.assigned(dispatch)) {
                element.assignTo(dispatch);
            }
        }
    }
    // 返回validae方法，这里更新字段的值
    return {
        updateItemData: function (data) {
            actions.updateItem({ keys: keys, data: data, meta: {} });
        },
        validate: function (data) {
            // 验证操作
            var result = {
                dirty: true,
                isValid: false,
                isLoading: false,
                errorText: ""
            };
            var timeId = setTimeout(function () {
                actions.updateItemMeta({ keys: keys, meta: { isLoading: true, isValid: false, errorText: false } });
            }, 50);
            validate(data).then(function () {
                clearTimeout(timeId);
                result.isValid = true;
                actions.updateItemMeta({ keys: keys, meta: result });
            }).catch(function (err) {
                clearTimeout(timeId);
                result.errorText = err.errors ?
                    schemaFormOptions.ajv.errorsText(err.errors, { dataVar: "/" + keys.join("/") })
                    : err.message;
                actions.updateItemMeta({ keys: keys, meta: result });
            });
        }
    };
};
/**
 * 包装theme的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 * 加入属性
 * currentTheme 当前的命名空间
 */
export var ValidateHoc = function (hocFactory, Component) {
    var ValidateComponentHoc = /** @class */ (function (_super) {
        tslib_1.__extends(ValidateComponentHoc, _super);
        function ValidateComponentHoc() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ValidateComponentHoc.prototype.render = function () {
            return React.createElement(Component, tslib_1.__assign({}, this.props));
        };
        ValidateComponentHoc = tslib_1.__decorate([
            compose(connect(mapActionsStateToProps), connect(null, mapDispatchToProps), pure)
        ], ValidateComponentHoc);
        return ValidateComponentHoc;
    }(React.PureComponent));
    return ValidateComponentHoc;
};
//# sourceMappingURL=validate.js.map