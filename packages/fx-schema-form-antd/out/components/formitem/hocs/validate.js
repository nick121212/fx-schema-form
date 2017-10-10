import React from "react";
import { connect } from "react-redux";
import { compose, shouldUpdate } from "recompose";
import { mapActionsStateToProps } from "../../select";
/**
 * 处理actions,这里吧actions添加到dispatch
 * @param dispatch 方法
 * @param ownProps 自身属性
 */
const mapDispatchToProps = (dispatch, ownProps) => {
    const { mergeSchema, actions, schemaFormOptions, schemaKey, formData } = ownProps;
    const { keys } = mergeSchema;
    const validate = schemaFormOptions.ajv.getSchema(mergeSchema.schemaPathKey.join("/"));
    for (const key in actions) {
        if (actions.hasOwnProperty(key)) {
            const element = actions[key];
            if (!element.assigned(dispatch)) {
                element.assignTo(dispatch);
            }
        }
    }
    actions.initItemMeta({
        keys,
        meta: {
            type: mergeSchema.type
        }
    });
    // 返回validae方法，这里更新字段的值
    return {
        validate: (data) => {
            if (!actions.updateItem) {
                console.error("没有更新的action！");
            }
            // 验证操作
            let isValid = validate(data);
            let result = {
                dirty: true,
                isValid: isValid,
                errorText: schemaFormOptions.ajv.errorsText(validate.errors)
            };
            actions.updateItem({ keys, data, meta: result });
        }
    };
};
/**
 * 包装theme的组件HOC
 * @param Component 需要包装的组件
 * @param options   参数
 * 加入属性
 * currentTheme 当前的命名空间
 */
export const ValidateHoc = (Component) => {
    class Hoc extends React.Component {
        render() {
            const ComponentWithHoc = compose(connect(mapActionsStateToProps), connect(null, mapDispatchToProps), shouldUpdate((props, nextProps) => {
                return false;
            }))(Component);
            return React.createElement(ComponentWithHoc, Object.assign({}, this.props));
        }
    }
    return Hoc;
};
//# sourceMappingURL=validate.js.map