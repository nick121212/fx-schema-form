import Immutable from "immutable";
import { assert, expect } from "chai";
import { store, actions } from "../data";


// private moveToItem: SimpleActionCreator<{ parentKeys: string[], keys: string[], curIndex: number, toIndex: number }>
// private removeItemData: SimpleActionCreator<{ parentKeys: string[], keys: string[], meta?: boolean }>

describe("测试schemaReducer", () => {
    let data = Immutable.fromJS({
        a: 1,
        b: 2,
        c: [1, 2, 3],
        d: {
            e: 4,
            f: 5
        }
    });

    beforeEach(() => {
        actions.createForm({
            key: "test",
            data: data
        });
    });
    it("createForm,创建一个表单数据", () => {
        // 从store取出表单数据，与原始数据做比较
        expect(store.getState().getIn(["schemaForm1", "present", "test", "data"])).to.eq(data);
        // 从store取出meta数据，应该是空对象
        expect(store.getState().getIn(["schemaForm1", "present", "test", "meta"]).value).to.eq(Immutable.fromJS({}));
    });
    it("updateItemData,更新一个表单数据", () => {
        let meta = Immutable.fromJS({
            isValid: false
        });

        actions.updateItemData({
            parentKeys: ["test"],
            keys: ["a"],
            data: 11,
            meta
        });

        // 从store取出表单数据，与原始数据做比较
        expect(store.getState().getIn(["schemaForm1", "present", "test", "data", "a"])).to.eq(11);

        let rootNode = store.getState().getIn(["schemaForm1", "present", "test", "meta"]);
        let childNode = rootNode.contains("a");

        expect(childNode).to.be.a("object");
        expect(childNode.value).to.eq(meta);
    });
    it("updateItemMeta,更新一个元素的meta数据", () => {
        let meta = Immutable.fromJS({
            isValid: true
        });

        actions.updateItemData({
            parentKeys: ["test"],
            keys: ["b"],
            meta
        });

        let rootNode = store.getState().getIn(["schemaForm1", "present", "test", "meta"]);
        let childNode = rootNode.contains("b");

        expect(childNode).to.be.a("object");
        expect(childNode.value).to.eq(meta);

        actions.updateItemData({
            parentKeys: ["test"],
            keys: ["b"],
            meta: {
                showPassword: true
            }
        });

        rootNode = store.getState().getIn(["schemaForm1", "present", "test", "meta"]);
        childNode = rootNode.contains("b");

        expect(childNode.value.get("showPassword")).to.eq(true);
    });
    it("addItem,添加一个元素到数组", () => {
        expect(store.getState().getIn(["schemaForm1", "present", "test", "data", "c"]).size).to.eq(3);
        actions.addItem({
            parentKeys: ["test"],
            keys: ["c"],
            data: 4
        });
        expect(store.getState().getIn(["schemaForm1", "present", "test", "data", "c"]).size).to.eq(4);
    });
    it("removeItem,删除一个元素到数组", () => {
        expect(store.getState().getIn(["schemaForm1", "present", "test", "data", "c"]).size).to.eq(3);
        actions.removeItem({
            parentKeys: ["test"],
            keys: ["c"],
            index: 0
        });
        expect(store.getState().getIn(["schemaForm1", "present", "test", "data", "c"]).size).to.eq(2);

        actions.removeItem({
            parentKeys: ["test"],
            keys: ["b"],
            index: 0
        });

        expect(store.getState().getIn(["schemaForm1", "present", "test", "data", "b"])).to.eq(2);
    });
    it("moveToItem,更换数组元素的位置,[1,2,3]=>[2,3,1]", () => {
        let rootNode = store.getState().getIn(["schemaForm1", "present", "test", "meta"]);

        actions.updateItemMeta({
            parentKeys: ["test"],
            keys: ["c", 0],
            meta: {
                oldIndex: 0
            }
        });
        actions.updateItemMeta({
            parentKeys: ["test"],
            keys: ["c", 1],
            meta: {
                oldIndex: 1
            }
        });
        actions.updateItemMeta({
            parentKeys: ["test"],
            keys: ["c", 2],
            meta: {
                oldIndex: 2
            }
        });

        actions.moveToItem({
            parentKeys: ["test"],
            keys: ["c"],
            curIndex: 0,
            toIndex: 2
        });

        expect(store.getState().getIn(["schemaForm1", "present", "test", "data", "c"]).size).to.eq(3);
        expect(store.getState().getIn(["schemaForm1", "present", "test", "data", "c", 0])).to.eq(2);
        expect(store.getState().getIn(["schemaForm1", "present", "test", "data", "c", 2])).to.eq(1);

        expect(rootNode.contains("c").contains(0).value.get("oldIndex")).to.eq(1);
        expect(rootNode.contains("c").contains(2).value.get("oldIndex")).to.eq(0);
    });
    it("removeItemData,清除一个元素的数据以及meta", () => {
        let meta = Immutable.fromJS({
            isValid: true
        });
        let rootNode = store.getState().getIn(["schemaForm1", "present", "test", "meta"]);
        let childNode = rootNode.contains("c");

        actions.updateItemMeta({
            parentKeys: ["test"],
            keys: ["c"],
            meta
        });

        childNode = rootNode.contains("c");

        expect(store.getState().getIn(["schemaForm1", "present", "test", "data", "c"]).size).to.eq(3);
        expect(childNode).to.be.a("object");
        expect(childNode.value).to.eq(meta);

        actions.removeItemData({
            parentKeys: ["test"],
            keys: ["c"],
            meta: true
        });

        expect(store.getState().getIn(["schemaForm1", "present", "test", "data", "c"])).to.eq(undefined);
        expect(rootNode.contains("c")).to.eq(null);
    });
});
