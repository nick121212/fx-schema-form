export default {
    label: "CHECKBOX",

    temps: [{
        key: "div",
        uiSchemas: ["*"],
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
                    className: "ba pa1 ma1"
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
