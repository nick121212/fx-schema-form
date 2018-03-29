import propTypes from "prop-types";
export const DefaultPropsTypeCheck = {
    schemaId: propTypes.string.isRequired,
    uiSchema: propTypes.object,
    parentKeys: propTypes.array.isRequired,
    globalOptions: propTypes.object.isRequired,
    ajv: propTypes.object.isRequired,
    arrayIndex: propTypes.number,
    arrayLevel: propTypes.array,
    formItemData: propTypes.any,
    formItemMeta: propTypes.any,
    ArrayItemComponent: propTypes.any
};
//# sourceMappingURL=default.props.js.map