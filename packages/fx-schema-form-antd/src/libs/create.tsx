
import { FormReducer } from "../reducer/form";

export default (forms: { [id: string]: any } = {}) => {
    let reducers: any = {};

    for (let key in forms) {
        if (forms.hasOwnProperty(key)) {
            let element = forms[key];
            let meta: any = {};
            let reducer = new FormReducer({
                data: element,
                meta: meta
            });

            meta.actions = reducer.actions;

            if (element) {
                reducers[key] = reducer.reducer;
            }
        }
    }

    return reducers;
};
