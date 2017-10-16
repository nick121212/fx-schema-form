/// <reference types="react" />
import React from "react";
import { FormReducer } from "../../index";
import { FormExampleReducer } from "../reducer/schema";
declare let settings: FormExampleReducer<{}>;
declare let reducer: FormReducer<any>;
export declare class ArraySchemaFormComponent extends React.Component<any> {
    private doSubmit();
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
    render(): JSX.Element;
}
export { reducer, settings };
