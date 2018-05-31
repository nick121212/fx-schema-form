export const warn = (message: string) => {
    console.error(message);
    throw new Error(message);
};

export const hasOwnProperty = Object.prototype.hasOwnProperty;
