import React from "react";
import { connect } from "react-redux";
import * as jpp from "json-pointer";
import { createSelector } from "reselect";
const getData = (state, props) => {
    const { schemaKey, mergeSchema } = props;
    const { keys = [] } = mergeSchema;
    let { data = {}, meta = {} } = state[props.schemaKey];
    return jpp.has(data, jpp.compile(keys)) ? jpp.get(data, jpp.compile(keys)) : undefined;
};
const getMetaData = (state, props) => {
    const { schemaKey, mergeSchema } = props;
    const { keys = [] } = mergeSchema;
    let { meta = {} } = state[props.schemaKey];
    return jpp.has(meta, jpp.compile(keys)) ? jpp.get(meta, jpp.compile(keys)) : { dirty: false };
};
const mapStateToProps = createSelector([getData, getMetaData], (formData, meta) => {
    return { formData, meta };
});
/**
 * 包装theme的组件HOC
 * @param Component 需要包装的组件
 * @param options   参数
 * 加入属性
 * currentTheme 当前的命名空间
 */
export const DataHoc = (Component) => {
    class Hoc extends React.Component {
        render() {
            const ComponentWithHoc = connect(mapStateToProps)(Component);
            console.log("data hoc rendred");
            return React.createElement(ComponentWithHoc, Object.assign({}, this.props));
        }
    }
    return Hoc;
};
//# sourceMappingURL=data.js.map