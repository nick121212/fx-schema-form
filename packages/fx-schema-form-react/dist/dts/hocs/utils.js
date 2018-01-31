import React, { PureComponent } from "react";
import Immutable from "immutable";
import resolvePathname from "resolve-pathname";
export default (hocFactory, settings = {}) => {
    return (Component) => {
        class ComponentHoc extends PureComponent {
            render() {
                return React.createElement(Component, Object.assign({ getTitle: this.getTitle, getPathKeys: this.getPathKeys, getOptions: this.getOptions }, this.props));
            }
            getOptions(props, category, field) {
                const { uiSchema, globalOptions } = props;
                const { options } = uiSchema;
                const optionsArray = [];
                if (globalOptions && globalOptions.hasIn([category, "default"])) {
                    optionsArray.push(globalOptions.getIn([category, "default"]));
                }
                if (globalOptions && globalOptions.hasIn([category, field])) {
                    optionsArray.push(globalOptions.getIn([category, field]));
                }
                if (options && options.hasIn([category, field])) {
                    optionsArray.push(options.getIn([category, field]));
                }
                let opts = optionsArray.reverse().reduce((prev, next) => {
                    if (next) {
                        return next.merge(prev);
                    }
                    return prev;
                }, Immutable.fromJS({})).toJS();
                return opts;
            }
            getTitle(props) {
                const { uiSchema } = props;
                const { title, keys } = uiSchema;
                if (title !== undefined) {
                    return title;
                }
                if (keys && keys.length) {
                    let keysCopy = [...keys], keyTitle = keysCopy.pop();
                    return keyTitle ? keyTitle.toString() : "";
                }
                if (props.arrayIndex) {
                    return props.arrayIndex.toString();
                }
                return "";
            }
            getPathKeys(keys, path) {
                let keysCopy = [""].concat(keys.concat([""]));
                let keysResolve = resolvePathname(path, keysCopy.join("/")).split("/");
                keysResolve.shift();
                if (keysResolve.length && !keysResolve[keysResolve.length - 1]) {
                    keysResolve.pop();
                }
                return keysResolve;
            }
        }
        return ComponentHoc;
    };
};
//# sourceMappingURL=utils.js.map