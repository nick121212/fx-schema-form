import React from "react";
import { connect } from "react-redux";
import { compose, shouldUpdate } from "recompose";
import { mapActionsStateToProps } from "../select";
/**
 * 处理actions,这里吧actions添加到dispatch
 * @param dispatch 方法
 * @param ownProps 自身属性
 */
const mapDispatchToProps = (dispatch, ownProps) => {
    const { mergeSchema, actions, schemaFormOptions, schemaKey, formData } = ownProps;
    const { keys } = mergeSchema;
    const validate = schemaFormOptions.ajv.compile(Object.assign({}, mergeSchema, { $async: true, async: true }));
    for (const key in actions) {
        if (actions.hasOwnProperty(key)) {
            const element = actions[key];
            if (!element.assigned(dispatch)) {
                element.assignTo(dispatch);
            }
        }
    }
    // 返回validae方法，这里更新字段的值
    return {
        updateItemData: (data) => {
            if (!actions.updateItem) {
                console.error("没有更新的action！");
            }
            actions.updateItem({ keys, data, meta: {} });
        },
        validate: (data) => {
            if (!actions.updateItem) {
                console.error("没有更新的action！");
            }
            // 验证操作
            let result = {
                dirty: true,
                isValid: false,
                isLoading: false,
                errorText: ""
            };
            actions.updateItemMeta({ keys, meta: { isLoading: true, isValid: false, errorText: false } });
            validate(data).then(() => {
                result.isValid = true;
                actions.updateItemMeta({ keys, meta: result });
            }).catch((err) => {
                result.errorText = err.errors ? schemaFormOptions.ajv.errorsText(err.errors) : err.message;
                actions.updateItemMeta({ keys, meta: result });
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
export const ValidateHoc = (hocFactory, Component) => {
    class Hoc extends React.Component {
        render() {
            const ComponentWithHoc = compose(shouldUpdate((props, nextProps) => {
                return false;
            }), connect(mapActionsStateToProps), connect(null, mapDispatchToProps))(Component);
            return React.createElement(ComponentWithHoc, Object.assign({}, this.props));
        }
    }
    return Hoc;
};
//# sourceMappingURL=validate.js.map