import * as tslib_1 from "tslib";
import React from "react";
import { connect } from "react-redux";
import { compose, shouldUpdate } from "recompose";
import { mapActionsStateToProps } from "../select";
/**
 * 处理actions,这里吧actions添加到dispatch
 * @param dispatch 方法
 * @param ownProps 自身属性
 */
var mapDispatchToProps = function (dispatch, ownProps) {
    var mergeSchema = ownProps.mergeSchema, actions = ownProps.actions, schemaFormOptions = ownProps.schemaFormOptions, schemaKey = ownProps.schemaKey, formData = ownProps.formData;
    var keys = mergeSchema.keys;
    var validate = schemaFormOptions.ajv.compile(Object.assign({}, mergeSchema, { $async: true, async: true }));
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
            if (!actions.updateItem) {
                console.error("没有更新的action！");
            }
            actions.updateItem({ keys: keys, data: data, meta: {} });
        },
        validate: function (data) {
            if (!actions.updateItem) {
                console.error("没有更新的action！");
            }
            // 验证操作
            var result = {
                dirty: true,
                isValid: false,
                isLoading: false,
                errorText: ""
            };
            actions.updateItemMeta({ keys: keys, meta: { isLoading: true, isValid: false, errorText: false } });
            validate(data).then(function () {
                result.isValid = true;
                actions.updateItemMeta({ keys: keys, meta: result });
            }).catch(function (err) {
                result.errorText = err.errors ? schemaFormOptions.ajv.errorsText(err.errors) : err.message;
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
    var Hoc = /** @class */ (function (_super) {
        tslib_1.__extends(Hoc, _super);
        function Hoc() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Hoc.prototype.render = function () {
            var ComponentWithHoc = compose(shouldUpdate(function (props, nextProps) {
                return false;
            }), connect(mapActionsStateToProps), connect(null, mapDispatchToProps))(Component);
            return React.createElement(ComponentWithHoc, tslib_1.__assign({}, this.props));
        };
        return Hoc;
    }(React.Component));
    return Hoc;
};
//# sourceMappingURL=validate.js.map