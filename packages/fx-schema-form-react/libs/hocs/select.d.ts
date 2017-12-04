import Reselect from "reselect";
export declare const mapFormDataToProps: Reselect.OutputSelector<{}, {
    formData: any;
}, (res: any) => {
    formData: any;
}>;
export declare const mapMetaStateToProps: Reselect.OutputSelector<{}, {
    meta: any;
}, (res: any) => {
    meta: any;
}>;
export declare const mapFormItemDataProps: Reselect.OutputSelector<{}, {
    formItemData: any;
}, (res: any) => {
    formItemData: any;
}>;
export declare const mapActionsStateToProps: Reselect.OutputSelector<{}, {
    actions: any;
}, (res: any) => {
    actions: any;
}>;
export declare const mapActionsDispatchToProps: (dispatch: any, ownProps: any) => {
    actions: any;
};
