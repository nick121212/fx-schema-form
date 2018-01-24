import React from "react";
import ReactDOM from "react-dom";
import { MergeLib, ResolveLib } from "fx-schema-form-core";
// import ajv from "ajv";
import { createStore } from "redux";
import { combineReducers } from "redux-immutable";
import Immutable from "immutable";

import { TreeMap } from "./libs/tree";
// const curAjv = new ajv();

// let store = createStore<any>(combineReducers({

// }), Immutable.fromJS({}));

// store.subscribe(() => {
//     console.log(store.getState().toJS());
// });

// ReactDOM.render(
//     <span>
//         Hello World!
//     </span>,
//     document.getElementById("root"),
//     () => {
//         console.log("form has been ok!");
//     });

let data: any = {
    a: 1,
    b: {
        c: [1, 2, 3]
    },
    d: {
        e: 50,
        f: 60
    }
};

// 根节点
let tree = new TreeMap("root", {});

// console.log(tree.getCurrentKeys());

tree.addChild(["root", "b", "c"], { valid: true });
tree.addChild(["root", "b", "c", 1], { valid: true });
tree.addChild(["root", "b", "c", 0], { valid: false });

let c = tree.contains("b").contains("c");
let c0 = c.contains(0);
c.contains(1).removeFromParent();

console.log(tree);

console.log(tree.containPath(["root", "b", "c", 0]) === c0);
