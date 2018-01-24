
declare var __DEV__: boolean;
declare var __PROD__: boolean;
declare var __TEST__: boolean;
declare var __STAG__: boolean;

declare var __STATE__: string;
declare var __ENGINE__: string;

declare module '*.scss' {
    const content: any;
    export default content;
}
declare module '*.less' {
    const content: any;
    export default content;
}