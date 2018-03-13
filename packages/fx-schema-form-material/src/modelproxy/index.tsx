import { ModelProxy } from "modelproxy";
import { FetchEngine } from "modelproxy-engine-fetch";
import { IProxyCtx } from "modelproxy/out/models/proxyctx";
import { InterfaceFactory } from "modelproxy/out/libs/interface.factory";

import sfSchemaConfig from "./common.json";
import { IInterfaceModel } from "modelproxy/out/models/interface";

/**
 * 接口的配置以及初始化
 * 这里有fetch和jsonp的接口转发器
 */
let proxy = new ModelProxy();
let fetchEngine = new FetchEngine();
let fetchSchemaEngine = new FetchEngine();

/**
 * fetch接口引擎初始化
 */
fetchEngine.init();
// 如果有http错误，则抛出错误
fetchEngine.use(async (ctx: IProxyCtx, next: Function) => {
    if (!ctx.result.ok || ctx.result.status !== 200) {
        throw new Error(ctx.result.statusText);
    }

    ctx.result = await ctx.result.json();

    await next();
});
// 如果有服务器端约定错误，测抛出错误
fetchEngine.use(async (ctx: IProxyCtx, next: Function) => {
    if (ctx.result.code !== undefined && ctx.result.code !== 200) {
        // if (ctx.result.code === 432 && ctx.result.data) {
        //     location.href = ctx.result.data;
        // }

        throw new Error(ctx.result.message);
    }
    ctx.result = ctx.result.data;

    await next();
});

fetchSchemaEngine.init();
fetchSchemaEngine.use(async (ctx: IProxyCtx, next: Function) => {
    if (!ctx.result.ok || ctx.result.status !== 200) {
        throw new Error(ctx.result.statusText);
    }

    ctx.result = await ctx.result.json();

    // await new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve();
    //     }, 2000);
    // });

    await next();
});

let state = "dev";

// if (__PROD__) {
//     state = "prd";
// }

// if (__STAG__) {
//     state = "stg";
// }

// 加载接口配置
proxy.loadConfig(sfSchemaConfig, { engine: "json", state });
// proxy.loadConfig(fetchSchemaEngine, { engine: "jsonp", state });

// 加载引擎
proxy.addEngines({
    "fetch": fetchEngine,
    "json": fetchSchemaEngine
});

export const schemaNs = proxy.getNs("sf") as InterfaceFactory;

export const getSchema = schemaNs.get("schema") as IInterfaceModel;

export default proxy;
