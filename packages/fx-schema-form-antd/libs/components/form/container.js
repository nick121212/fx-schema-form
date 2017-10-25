import { compose, pure } from "recompose";
import { hocFactory } from "../../hocs";
export var hoc = compose(
// connect((state: any, props: SchemaFormBaseProps) => {
//     let { meta, data } = state[props.schemaKey];
//     return {
//         isValid: meta.data.isValid,
//         isLoading: meta.data.isLoading
//     };
// }),
hocFactory.get("merge"), pure);
//# sourceMappingURL=container.js.map