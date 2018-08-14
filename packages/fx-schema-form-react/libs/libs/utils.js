export const isProd = () => {
    const { NODE_ENV } = process.env;
    return typeof NODE_ENV !== "undefined" &&
        NODE_ENV === `"production"`;
};
//# sourceMappingURL=utils.js.map