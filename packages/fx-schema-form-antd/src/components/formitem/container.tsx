import { compose, ComponentEnhancer, lifecycle, onlyUpdateForKeys, shouldUpdate, shallowEqual } from "recompose";
import pick from "recompose/utils/pick";

import { SchemaFormItemBaseProps } from "./props";
import { TempHoc } from "./hocs/temp";
import { FieldHoc } from "./hocs/field";
import { ThemeHoc } from "./hocs/theme";
import { ValidateHoc } from "./hocs/validate";

export const hoc: ComponentEnhancer<SchemaFormItemBaseProps, any> = compose<SchemaFormItemBaseProps, any>(
    onlyUpdateForKeys(["formData", "meta"]),
    ThemeHoc,
    FieldHoc,
    ValidateHoc,
    TempHoc,
    shouldUpdate<SchemaFormItemBaseProps>((prevProps: SchemaFormItemBaseProps, nextProps: SchemaFormItemBaseProps): boolean => {
        return !shallowEqual(pick(prevProps, ["formData"]).formData, pick(nextProps, ["formData"]).formData) ||
            !shallowEqual(pick(prevProps, ["meta"]).meta, pick(nextProps, ["meta"]).meta);
    }),
    lifecycle({
        shouldComponentUpdate: function (nextProps, nextState) {
            return !shallowEqual(pick(this.props, ["formData", "meta"]), pick(nextProps, ["formData", "meta"]));
        },
        componentDidMount: function () {
            console.log("form item mounted!", this.props);
        }
    })
);
