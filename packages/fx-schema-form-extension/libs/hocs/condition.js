import React from "react";
import { compose, onlyUpdateForKeys } from "recompose";
import { connect } from "react-redux";
import Immutable, { is } from "immutable";
import { createSelectorCreator, defaultMemoize } from "reselect";
import schemaFormReact from "fx-schema-form-react";
const { schemaFormTypes } = schemaFormReact;
const fxSelectorCreator = createSelectorCreator(defaultMemoize, is);
export const name = "condition";
export const hoc1 = (hocFactory) => {
    const getFormItemData = (rootReducerKey, parentKeys, keys) => {
        return (state) => {
            let dataKeys = [...rootReducerKey, ...parentKeys, "data", ...keys], formItemData = state.getIn(dataKeys);
            if (formItemData !== undefined) {
                return Immutable.fromJS({
                    [[...keys].join("/")]: formItemData
                });
            }
            return "";
        };
    };
    return (settings = { paths: [] }) => {
        return (Component) => {
            class ComponentHoc extends React.PureComponent {
                constructor(props) {
                    super(props);
                    this.ComponentWithHoc = Component;
                    this.$condition = Immutable.fromJS({});
                    this.getConditionHocs();
                }
                getConditionHocs() {
                    const { getPathKeys, uiSchema, getOptions, parentKeys } = this.props, options = getOptions(this.props, schemaFormTypes.hoc, name), dataHocOptions = getOptions(this.props, schemaFormTypes.hoc, "data"), { keys = [] } = uiSchema || {}, funcs = [], conditionOptions = Immutable.fromJS(settings || {}).merge(options).toJS(), { paths, hoc } = conditionOptions;
                    if (paths && paths.length && hoc) {
                        paths.forEach((path) => {
                            let pathKeys = getPathKeys(keys, path.path);
                            funcs.push(getFormItemData(dataHocOptions.rootReducerKey, parentKeys, pathKeys));
                        });
                    }
                    if (funcs.length) {
                        this.ComponentWithHoc = compose(connect(fxSelectorCreator.apply(fxSelectorCreator, [funcs, function () {
                                let formItemData = Array.prototype.splice.call(arguments, 0);
                                if (!formItemData || !formItemData.length) {
                                    return {};
                                }
                                return {
                                    condition: formItemData.reduce((prev, next) => {
                                        if (!next) {
                                            return prev;
                                        }
                                        return prev.merge(next);
                                    }, Immutable.fromJS({}))
                                };
                            }])), onlyUpdateForKeys([name]), hoc.constructor === String ? hocFactory.get(hoc)({}) : hoc, hocFactory.get("resetKey")({
                            excludeKeys: [name]
                        }))(Component);
                    }
                }
                render() {
                    const { getPathKeys, uiSchema } = this.props, { keys = [] } = uiSchema || {}, ComponentWithHoc = this.ComponentWithHoc || Component;
                    return React.createElement(ComponentWithHoc, Object.assign({}, this.props));
                }
            }
            return ComponentHoc;
        };
    };
};
export default {
    name,
    hoc: hoc1
};
//# sourceMappingURL=condition.js.map