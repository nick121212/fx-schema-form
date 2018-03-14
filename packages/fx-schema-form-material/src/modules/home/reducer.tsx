


import { createAction, createReducer, EmptyActionCreator, SimpleActionCreator } from "redux-act";
import { Reducer } from "redux";
import Immutable from "immutable";

export interface SetThemeData {
    type: string;
}


/**
 *
 * actions
 */
export class HomeReducer<T> {
    private isInit = false;

    private toggleSideBar: EmptyActionCreator = createAction("打开侧边栏");
    private setTheme: SimpleActionCreator<SetThemeData> = createAction<SetThemeData>("打开侧边栏");

    /**
     * 构造函数
     * @param initialState state的初始值
     */
    constructor(protected initialState: Immutable.Map<string, any>) { }

    /**
     * 返回当前的actions
     */
    public get actions(): {
        toggleSideBar: EmptyActionCreator,
        setTheme: SimpleActionCreator<SetThemeData>
    } {
        return {
            toggleSideBar: this.toggleSideBar,
            setTheme: this.setTheme
        };
    }

    /**
     * 返回当前的reducers
     */
    public get reducer(): Reducer<Immutable.Map<string, any>> {
        return createReducer<Immutable.Map<string, any>>({
            [this.toggleSideBar as any]: (state: Immutable.Map<string, any>) => {
                return state.update("opened", (opened: boolean) => {
                    return !!!opened;
                });
            },
            [this.setTheme as any]: (state: Immutable.Map<string, any>, data: SetThemeData) => {
                return state.set("type", data.type);
            }
        }, this.initialState);
    }
}
