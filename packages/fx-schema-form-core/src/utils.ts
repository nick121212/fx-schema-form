export const warn = (message: string) => {
    console.error(message);

    throw new Error(message);
};
