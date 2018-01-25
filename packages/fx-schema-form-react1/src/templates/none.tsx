import React from "react";
import { DefaultProps } from "../components/default.props";
import { UtilsHocOutProps } from "../hocs/utils";

export interface DivTempProps extends DefaultProps, UtilsHocOutProps {
    tempKey: string;
}

export class NoneTemp extends React.PureComponent<DivTempProps, any> {
    public render(): any {
        const { children, tempKey, getOptions } = this.props;
        const { className, ...tempOptions } = getOptions(this.props, "temp", tempKey);

        return <div>
            {children}
        </div>;
    }
}
