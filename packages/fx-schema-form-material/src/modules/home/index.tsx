import { homeActions, default as reducer } from "./actions";
export { MainComponent as HomeComponent } from "./main";

export const initActions = (store: any) => {
    homeActions.toggleSideBar.assignTo(store);
    homeActions.setTheme.assignTo(store);
};

export {
    reducer
};
