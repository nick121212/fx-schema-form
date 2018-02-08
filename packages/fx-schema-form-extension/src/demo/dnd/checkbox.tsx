export default {
    label: "CHECKBOX",

    temps: [{
        key: "div",
        uiSchemas: ["className"],
        schemaId: "dnd-div",
    }],
    widget: {
        key: "checkbox",
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
