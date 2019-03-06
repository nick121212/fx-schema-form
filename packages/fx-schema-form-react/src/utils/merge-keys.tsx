import { useMemo } from "react";

/**
 * 解析keys
 * 1. 遍历keys中的元素，如果遇到-，则替换成数字
 * @param   {string[]} originKeys 需要做替换的数据路径
 * @param   {string[]} indexList  当前传递过来的indexList
 * @returns {string[]}
 */
export default (originKeys: string[], indexList: number[]): string[] => {
    const arrayLevelCopy = [ ...indexList ];
    const keys = originKeys.reverse().map((key: string) => {
        if (key === "-") {
            const index = arrayLevelCopy.pop();

            return (typeof index === "undefined" ? "" : index).toString();
        }

        return key;
    });

    keys.reverse();

    return keys;
};
