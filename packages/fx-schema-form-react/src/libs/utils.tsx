import jpp from "json-pointer";
import isEqual from "lodash.isequal";
import merge from "lodash.merge";

export const shadowEqual = (obj: any, obj1: any): boolean => {
    return isEqual(obj, obj1);
};

export { merge };
