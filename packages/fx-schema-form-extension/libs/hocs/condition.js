import React from "react";
import { compose, onlyUpdateForKeys } from "recompose";
import { connect } from "react-redux";
import Immutable, { is } from "immutable";
import { createSelectorCreator, defaultMemoize } from "reselect";
import schemaFormReact from "fx-schema-form-react";
const { schemaFormTypes } = schemaFormReact;
const fxSelectorCreator = createSelectorCreator(defaultMemoize, is);
export const name = "condition";
export const innerHoc = (hocFactory) => {
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
    const getFormItemMeta = (rootReducerKey, parentKeys, keys, metaKey) => {
        return (state) => {
            let dataKeys = [...rootReducerKey, ...parentKeys, "meta"], rootNode = state.getIn(dataKeys), childNode = rootNode.containPath(keys);
            if (childNode && childNode.value && childNode.value.has(metaKey)) {
                return Immutable.fromJS({
                    [[...keys].join("/")]: childNode.value.get(metaKey)
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
                    const { getPathKeys, uiSchema, getOptions, parentKeys, schemaId } = this.props, options = getOptions(this.props, schemaFormTypes.hoc, name), dataHocOptions = getOptions(this.props, schemaFormTypes.hoc, "data"), { keys = [] } = uiSchema || {}, funcs = [], conditionOptions = Immutable.fromJS(settings || {}).merge(options).toJS(), { paths, hoc } = conditionOptions;
                    if (paths && paths.length && hoc) {
                        paths.forEach((path) => {
                            let pathKeys = getPathKeys(keys, path.path, schemaId);
                            if (path.meta) {
                                if (!path.metaKey) {
                                    console.warn("没有配置metaKkey");
                                }
                                else {
                                    funcs.push(getFormItemMeta(dataHocOptions.rootReducerKey, parentKeys, pathKeys, path.metaKey));
                                }
                            }
                            else {
                                funcs.push(getFormItemData(dataHocOptions.rootReducerKey, parentKeys, pathKeys));
                            }
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
                    const { uiSchema } = this.props, { keys = [] } = uiSchema || {}, ComponentWithHoc = this.ComponentWithHoc || Component;
                    return React.createElement(ComponentWithHoc, Object.assign({}, this.props));
                }
            }
            return ComponentHoc;
        };
    };
};
export default {
    name,
    hoc: innerHoc
};
//# sourceMappingURL=condition.js.map