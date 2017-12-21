import { createSelector } from "reselect";
import { conFactory } from "../container";
const contaienr = conFactory.get("default");
export const mapFormDataToProps = createSelector([contaienr.getAllData.bind(contaienr)], (formData) => {
    return { formData };
});
export const mapMetaStateToProps = createSelector([contaienr.getItemMeta.bind(contaienr)], (meta) => {
    return { meta };
});
export const mapFormItemDataProps = createSelector([contaienr.getItemData.bind(contaienr)], (formItemData) => {
    return { formItemData };
});
export const mapActionsStateToProps = createSelector([contaienr.getActions.bind(contaienr)], (actions) => {
    return { actions };
});
export const mapActionsDispatchToProps = (dispatch, ownProps) => {
    const { actions } = ownProps;
    for (const key in actions) {
        if (actions.hasOwnProperty(key)) {
            const element = actions[key];
            if (!element.assigned(dispatch)) {
                element.assignTo(dispatch);
            }
        }
    }
    return { actions };
};
//# sourceMappingURL=select.js.map