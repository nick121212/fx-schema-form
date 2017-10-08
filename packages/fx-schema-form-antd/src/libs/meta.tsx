
import uuid from "uuid";
import jpp from "json-pointer";

export class MetaData {
    public data: { map: any, meta: any; } = { map: {}, meta: {} };
    public actions: any = {};

    public setMeta(keys: Array<string>, meta: any, strick = true): void {
        let { normalKey, escapeKey } = this.getKey(keys);
        let curUuid = this.getCurMetaUuid(escapeKey, strick) || uuid();
        let curMeta = this.getCurMetaData(curUuid);

        if (strick) {
            this.setCurMetaUuid(keys, escapeKey, curUuid);
        }
        this.setCurMetaData(curUuid, Object.assign({}, curMeta, meta));
    }

    public getMeta(keys: Array<string>, strick = true) {
        let { normalKey, escapeKey } = this.getKey(keys);
        let curUuid = this.getCurMetaUuid(escapeKey, strick);

        return this.getCurMetaData(curUuid);
    }

    public removeMeta(keys: Array<string>) {
        let { normalKey, escapeKey } = this.getKey(keys);
        let curUuid = this.getCurMetaUuid(escapeKey);

        this.removeCurMetaData(curUuid, escapeKey);
    }

    /**
     * 获得当前字段的key
     * @param keys    当前字段的Keys
     */
    public getKey(keys: Array<string>): { normalKey: string; escapeKey: string; } {
        const key = jpp.compile(keys);

        return {
            normalKey: key,
            escapeKey: key
        };
    }

    public switchMeta(keys: Array<string>, curIndex: number, switchIndex: number): void {
        let { normalKey, escapeKey } = this.getKey(keys);

        if (!jpp(this.data.meta).has(escapeKey)) {
            return;
        }

        let curMeta = jpp(this.data.meta).get(escapeKey);

        // 向上移动
        if (curIndex > switchIndex) {
            curMeta = [
                ...[].concat(curMeta).splice(0, switchIndex),
                curMeta[curIndex],
                curMeta[switchIndex],
                ...[].concat(curMeta).splice(curIndex + 1)
            ];
        } else {
            // 向下移动
            curMeta = [
                ...[].concat(curMeta).splice(0, curIndex),
                curMeta[switchIndex],
                curMeta[curIndex],
                ...[].concat(curMeta).splice(switchIndex + 1)
            ];
        }

        jpp(this.data.meta).set(escapeKey, curMeta);
    }

    private getCurMetaUuid(escapeKey: string, strict = true): string {
        let curUuid: string;

        if (jpp(this.data.meta).has(escapeKey)) {
            curUuid = jpp(this.data.meta).get(escapeKey);
        }

        if (!strict || typeof curUuid === "object") {
            curUuid = jpp.parse(escapeKey).join("/");
        }

        return curUuid;
    }

    private getCurMetaData(curUuid: string) {
        if (jpp(this.data.map).has(`/${curUuid}`)) {
            return jpp(this.data.map).get(`/${curUuid}`);
        }

        return null;
    }

    private setCurMetaData(curUuid: string, meta: any) {
        jpp(this.data.map).set(`/${curUuid}`, meta);
    }

    private removeCurMetaData(curUuid: string, escapeKey: string) {
        if (jpp(this.data.map).has(`/${curUuid}`)) {
            jpp(this.data.map).remove(`/${curUuid}`);
        }
        if (jpp(this.data.meta).has(escapeKey)) {
            jpp(this.data.meta).remove(escapeKey);
        }
    }

    private setCurMetaUuid(keys: string[], key: string, curUuid: string) {
        // console.log("-----------------", key, curUuid);
        let parentKeys = [].concat(keys).splice(0, keys.length - 1);
        let metaJpp = jpp(this.data.meta);

        if (parentKeys.length) {
            let { escapeKey: pescapeKey } = this.getKey(parentKeys);
            let curMeta = metaJpp.has(key) ? metaJpp.get(key) : null;

            if (!curMeta) {
                metaJpp.set(pescapeKey, {});
            }
        }

        metaJpp.set(key, curUuid);
    }

}
