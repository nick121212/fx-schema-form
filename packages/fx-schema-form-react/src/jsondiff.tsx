import * as jsondiffpatch from "jsondiffpatch";

export const jsonDiffPatch: jsondiffpatch.DiffPatcher = (jsondiffpatch as any).create({
    objectHash: function(obj: any, index: number) {
        if (typeof obj._id !== "undefined") {
            return obj._id;
        }
        if (typeof obj.id !== "undefined") {
            return obj.id;
        }
        if (typeof obj.name !== "undefined") {
            return obj.name;
        }
        return "$$index:" + index;
    },
    arrays: {
        detectMove: true,
        includeValueOnMove: false
    },
    propertyFilter: function(name: string, context: any) {
        return name.slice(0, 1) !== "$";
    },
    cloneDiffValues: false
});
