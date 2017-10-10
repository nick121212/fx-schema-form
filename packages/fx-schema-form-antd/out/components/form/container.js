import { compose } from "recompose";
import { MergeHoc } from "./hocs/merge";
export const mapStateToProps = (state, ownProps) => {
    return {
        formData: state[ownProps.schemaKey]
    };
};
export const hoc = compose(MergeHoc);
//# sourceMappingURL=container.js.map