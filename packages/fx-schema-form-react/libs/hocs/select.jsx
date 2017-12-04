import { createSelector } from "reselect";
import { conFactory } from "../container";
var contaienr = conFactory.get("default");
export var mapFormDataToProps = createSelector([contaienr.getAllData.bind(contaienr)], function (formData) {
    return { formData: formData };
});
export var mapMetaStateToProps = createSelector([contaienr.getItemMeta.bind(contaienr)], function (meta) {
    return { meta: meta };
});
export var mapFormItemDataProps = createSelector([contaienr.getItemData.bind(contaienr)], function (formItemData) {
    return { formItemData: formItemData };
});
export var mapActionsStateToProps = createSelector([contaienr.getActions.bind(contaienr)], function (actions) {
    return { actions: actions };
});
export var mapActionsDispatchToProps = function (dispatch, ownProps) {
    var actions = ownProps.actions;
    for (var key in actions) {
        if (actions.hasOwnProperty(key)) {
            var element = actions[key];
            if (!element.assigned(dispatch)) {
                element.assignTo(dispatch);
            }
        }
    }
    return { actions: actions };
};
//# sourceMappingURL=select.jsx.map