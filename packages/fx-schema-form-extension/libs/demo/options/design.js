import Immutable from "immutable";
import schemaFormReact from "fx-schema-form-react";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import { globalOptions } from "./normal";
export const globalOptionsOfDesign = Immutable.fromJS({
    field: {
        object: {},
        design: {
            hocs: ["theme", "field", "validate", "array", "dataToMeta", "extraTemp", "extraWidget"],
            formHocs: [schemaFormReact.hocFactory.get("resetKey")({
                    excludeKeys: ["formItemData", "formItemMeta"]
                })],
            formItemHocs: [],
            fieldHocs: [schemaFormReact.hocFactory.get("data")({
                    data: true,
                    dataLength: true
                })]
        }
    },
    temp: {
        div: {
            tempHocs: [schemaFormReact.hocFactory.get("data")({
                    meta: true,
                    metaKeys: ["options"]
                }), immutableRenderDecorator],
            options: {
                className: "ba b--dashed"
            }
        }
    },
    hoc: {
        extraForm: {
            globalOptions: globalOptions,
            excludeKeys: ["formItemData", "formItemMeta", "formItemNode"]
        },
        extraWidget: {
            globalOptions: globalOptions,
            excludeKeys: ["formItemData", "formItemMeta", "formItemNode"]
        },
        extraTemp: {
            excludeKeys: ["formItemData", "formItemMeta", "formItemNode"]
        },
        data: {
            rootReducerKey: ["schemaForm"]
        },
        dataToMeta: {
            excludeKeys: ["formItemData", "formItemMeta", "formItemNode"]
        }
    }
});
export const globalOptionsOfDesign1 = Immutable.fromJS({
    field: {
        object: {},
        design: {
            hocs: ["theme", "field", "validate", "array", "dataToMeta", "extraForm"],
            formHocs: [schemaFormReact.hocFactory.get("resetKey")({
                    excludeKeys: ["formItemData", "formItemMeta"]
                })],
            formItemHocs: [],
            fieldHocs: [schemaFormReact.hocFactory.get("data")({
                    data: true,
                    dataLength: true
                })]
        }
    },
    temp: {
        div: {
            tempHocs: [schemaFormReact.hocFactory.get("data")({
                    meta: true,
                    metaKeys: ["options"]
                }), immutableRenderDecorator],
            options: {
                className: "ba b--dashed"
            }
        }
    },
    hoc: {
        extraForm: {
            globalOptions: globalOptions,
            excludeKeys: ["formItemData", "formItemMeta", "formItemNode"]
        },
        extraWidget: {
            globalOptions: globalOptions,
            excludeKeys: ["formItemData", "formItemMeta", "formItemNode"]
        },
        extraTemp: {
            excludeKeys: ["formItemData", "formItemMeta", "formItemNode"]
        },
        data: {
            rootReducerKey: ["schemaForm"]
        },
        dataToMeta: {
            excludeKeys: ["formItemData", "formItemMeta", "formItemNode"]
        }
    }
});
//# sourceMappingURL=design.js.map