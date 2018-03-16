export default {
    label: "CHECKBOX",
    temps: [{
            key: "div",
            type: "temp",
            uiSchemas: ["className"],
            schemaId: "dnd-div",
        }],
    widget: {
        key: "checkbox",
        type: "widget",
        uiSchemas: ["*"],
        schemaId: "dnd-checkbox",
    },
    options: {
        temp: {
            div: {
                options: {
                    className: "ba pa3 ma1 b--dashed"
                }
            }
        },
        widget: {
            checkbox: {
                options: {
                    checked: false
                }
            }
        }
    }
};
//# sourceMappingURL=checkbox.js.map