import React from "react";
import {
    hocFactory,
    reducerFactory
} from "../dist";
import { ResolveLib } from "fx-schema-form-core";
import Ajv from "ajv";
import Immutable from "immutable";
import ShallowRenderer, { createRenderer } from "react-test-renderer/shallow";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { createStore } from "redux";
import { combineReducers } from "redux-immutable";
import undoable from "redux-undo-immutable";

Enzyme.configure({ adapter: new Adapter() });

export const design = {
    $async: true,
    type: "object",
    $id: "design",
    required: ["name", "dsModelIds"],
    properties: {
        name: {
            type: "string",
            title: "面板名称",
            $async: true,
            idExists: { "table": "users" },
            description: "远程验证字段，输入nick试试看"
        },
        description: {
            type: "string",
            title: "面板详情"
        },
        appType: {
            type: "string",
            title: "应用类型"
        },
        dsModelIds: {
            type: "array",
            maxItems: 3,
            minItems: 1,
            default: [],
            items: {
                type: "object",
                required: ["age", "name", "password"],
                default: {},
                properties: {
                    age: {
                        type: "string",
                        default: "25"
                    },
                    name: {
                        type: "string",
                        minLength: 10,
                        errorMessage: {
                            minLength: "必须10个字符及以上"
                        }
                    },
                    password: { type: "string" }
                }
            }
        },
        dsModelData: {
            type: "object",
            properties: {
                data: {
                    type: "object"
                },
                ids: {
                    type: "array",
                    items: {
                        type: "string"
                    }
                }
            }
        },
        infoOptions: {
            type: "array",
            items: {
                type: "object",
                default: {},
                properties: {
                    label: {
                        type: "string"
                    },
                    data: {
                        oneOf: [{
                            $id: "design-object",
                            type: "object",
                        }, {
                            $id: "design-string",
                            type: "string"
                        }]
                    },
                    infoOptions: {
                        $ref: "design#/properties/infoOptions"
                    }
                }
            }
        }
    }
};

export const gloabelOptions = Immutable.fromJS({
    field: {
        default: {
            temps: ["formitem"],
            widgetHocs: [hocFactory.get("data")({
                rootReducerKey: ["schemaForm"],
                data: true
            })]
        },
        array: {
            temps: ["card"],
            fieldHocs: [hocFactory.get("data")({
                rootReducerKey: ["schemaForm"],
                data: true,
                dataLength: true
            })]
        },
        normal: {
        },
        object: {
            temps: ["card"]
        }
    },
    temp: {
        card: {
            tempHocs: [hocFactory.get("data")({
                rootReducerKey: ["schemaForm"],
                meta: true
            })],
            a: 1
        },
        formitem: {
            tempHocs: [hocFactory.get("data")({
                rootReducerKey: ["schemaForm"],
                meta: true
            })],
            options: {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 8 },
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 16 },
                },
            }
        }
    },
    hoc: {
        array: {

        }
    }
});

export const curAjv = new Ajv({
    allErrors: true,
    jsonPointers: true,
    useDefaults: true,
    format: "full",
    $data: true,
    errorDataPath: "property",
    removeAdditional: true,
});

export const uiSchema = {};

export const designResolve = new ResolveLib(curAjv, design);

export const shallowRender = (Component, props) => {
    const renderer = new ShallowRenderer();
    renderer.render(<Component {...props} />);
    return renderer.getRenderOutput();
}

export class AppCom extends React.PureComponent {
    render() {
        return <span>hello world</span>;
    }
}

export const store = createStore(combineReducers({
    "schemaForm1": undoable(reducerFactory.get("schemaForm").reducer, {

    }),
}), Immutable.fromJS({}));

reducerFactory.get("schemaForm").init(store);

export const actions = reducerFactory.get("schemaForm").actions;

