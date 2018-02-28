! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.SFC = e() : t.SFC = e()
}("undefined" != typeof self ? self : this, function () {
    return function (t) {
        var e = {};

        function n(r) {
            if (e[r]) return e[r].exports;
            var i = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        return n.m = t, n.c = e, n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 4)
    }([function (t, e, n) {
        "use strict";
        n.d(e, "b", function () {
            return a
        }), n.d(e, "c", function () {
            return u
        });
        var r = n(2),
            i = n.n(r),
            c = n(1),
            o = /#$/g,
            a = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return t.split("/").map(function (t, n) {
                    return 0 === n && o.test(t) ? (o.lastIndex = 0, e ? t.replace(o, "") : null) : "properties" === t ? null : "items" === t ? "-" : t
                }).filter(function (t) {
                    return null !== t
                })
            },
            u = function (t) {
                var e = t.split("/");
                return e.length ? e[0].replace(o, "") : ""
            },
            s = function () {
                function t(e, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    i()(this, t), this.ajv = e, this.$id = r, this.mergeSchema = {}, r || this.initSchema(e, n), this.compileSchema(n, r || n.$ref || "")
                }
                return t.prototype.initSchema = function (t, e) {
                    var n = e.$id;
                    if (!n && !e.$ref) return e;
                    if (!t.validateSchema(e)) throw t.errors;
                    return n && !t.getSchema(n) && t.addSchema(e), e
                }, t.prototype.compileSchema = function (t, e) {
                    if (t = c.e.get("undefined")(t, e || t.$id + "#", this.ajv), this.mergeSchema = t, t.type && !t.$ref && t.type.constructor === String) {
                        var n = t.type.toString();
                        c.e.has(n) && (this.mergeSchema = c.e.get(n)(t, e || t.$id + "#", this.ajv))
                    }
                }, t
            }();
        e.a = s
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () {
            return i
        }), n.d(e, "c", function () {
            return c
        }), n.d(e, "e", function () {
            return o
        }), n.d(e, "d", function () {
            return a
        }), n.d(e, "a", function () {
            return u
        });
        var r = n(3),
            i = new r.a,
            c = new r.a,
            o = new r.a,
            a = new r.a,
            u = function (t, e) {
                return c.forEach(function (n, r) {
                    t = r(t, e)
                }), t
            }
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0, e.default = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return c
        });
        var r = n(2),
            i = n.n(r),
            c = function () {
                function t() {
                    i()(this, t), this.i = {}, this.pi = {}
                }
                return t.prototype.add = function (t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!this.pi.hasOwnProperty(t) && (n || !this.has(t))) return this.i[t] = e, !0
                }, t.prototype.has = function (t) {
                    return this.i.hasOwnProperty(t)
                }, t.prototype.get = function (t) {
                    return this.has(t) ? this.i[t] : null
                }, t.prototype.lock = function (t) {
                    this.has(t) && (this.pi[t] = !0)
                }, t.prototype.unLock = function (t) {
                    this.has(t) && delete this.pi[t]
                }, t.prototype.forEach = function (t) {
                    if (t)
                        for (var e in this.i) {
                            if (this.i.hasOwnProperty(e))
                                if (!1 === t(e, this.i[e])) break
                        }
                }, t.prototype.clear = function () {
                    this.i = {}, this.pi = {}
                }, t
            }()
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(5),
            i = n(9),
            c = n(3),
            o = n(1),
            a = n(0);
        n.d(e, "ResolveLib", function () {
            return a.a
        }), n.d(e, "getSchemaId", function () {
            return a.c
        }), n.d(e, "getDataKeys", function () {
            return a.b
        });
        var u = n(13);
        n.d(e, "MergeLib", function () {
            return u.a
        }), n.d(e, "BaseFactory", function () {
            return c.a
        }), n.d(e, "schemaKeysFactory", function () {
            return o.d
        }), n.d(e, "schemaFieldFactory", function () {
            return o.b
        }), n.d(e, "schemaKeyWordFactory", function () {
            return o.c
        }), n.d(e, "schemaTypeFactory", function () {
            return o.e
        }), o.c.add("ref", r.c), o.c.add("oneof", r.b), o.c.add("anyof", r.a), o.e.add("array", i.a), o.e.add("string", i.b), o.e.add("undefined", i.b), o.e.add("number", i.b), o.e.add("null", i.b), o.e.add("any", i.b), o.e.add("integer", i.b), o.e.add("boolean", i.b), o.e.add("object", i.c)
    }, function (t, e, n) {
        "use strict";
        var r = n(6);
        n.d(e, "c", function () {
            return r.a
        });
        var i = n(7);
        n.d(e, "b", function () {
            return i.a
        });
        var c = n(8);
        n.d(e, "a", function () {
            return c.a
        })
    }, function (t, e, n) {
        "use strict";
        var r = n(0);
        e.a = function (t, e) {
            if (t && t.$ref) {
                var n = e.getSchema(t.$ref);
                if (n && n.schema) {
                    var i = Object.assign({}, n.schema);
                    return i.$ref = t.$ref, delete i.$id, Object.assign(i, {
                        refKeys: Object(r.b)(t.$ref)
                    }), i
                }
            }
            return t
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(0);
        e.a = function (t, e) {
            if (!t) return t;
            var n = t.oneOf;
            return n && n.constructor === Array && (t.oneOf = n.map(function (t) {
                return new r.a(e, t).mergeSchema
            })), t
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(0);
        e.a = function (t, e) {
            if (!t) return t;
            var n = t.anyOf;
            return n && n.constructor === Array && (t.anyOf = n.map(function (t) {
                return new r.a(e, t).mergeSchema
            })), t
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(10);
        n.d(e, "a", function () {
            return r.a
        });
        var i = n(11);
        n.d(e, "c", function () {
            return i.a
        });
        var c = n(12);
        n.d(e, "b", function () {
            return c.a
        })
    }, function (t, e, n) {
        "use strict";
        var r = n(0),
            i = "items";
        e.a = function (t, e, n) {
            if (t.items) {
                var c = new r.a(n, t.items, [e, i].join("/")),
                    o = Object(r.b)([e, i].join("/"));
                Object.assign(c.mergeSchema, {
                    keys: o
                })
            }
            return t
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(0),
            i = "properties";
        e.a = function (t, e, n) {
            return t.properties && !t.$ref && Object.keys(t.properties).forEach(function (c) {
                if (!([i, "items"].indexOf(c) >= 0) && t.properties && t.properties[c]) {
                    var o = new r.a(n, t.properties[c], [e, i, c].join("/")),
                        a = Object(r.b)([e, i, c].join("/"));
                    Object.assign(o.mergeSchema, {
                        keys: a
                    })
                }
            }), t
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(1),
            i = n(0);
        e.a = function (t, e, n) {
            var c = Object(r.a)(t, n),
                o = Object(i.b)(e),
                a = Object(i.c)(e);
            return r.b.has(e) ? (c && (c.resolve = !0), c || t) : (r.b.add(e, Object.assign({}, c || t, {
                keys: o,
                schemaPath: e
            })), r.d.add([a].concat(o).join("/"), e), c || t)
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(2),
            i = n.n(r),
            c = n(14),
            o = n(1),
            a = n(0),
            u = function (t, e) {
                for (; t.length;) {
                    var n = t.shift() || "",
                        r = n ? e.concat([n]) : e,
                        i = r.join("/").replace(/\/$/, "");
                    if (!o.d.has(i)) return "";
                    var c = o.b.get(o.d.get(i));
                    e = c.$ref ? Object(a.b)(c.$ref, !0) : r
                }
                return e.join("/")
            },
            s = function (t) {
                if (!o.d.has(t.key)) return t;
                var e = o.d.get(t.key),
                    n = o.b.get(e);
                return Object.assign({}, n, t)
            },
            f = function (t, e, n) {
                var r;
                return r = function (t) {
                    return t && t.keys ? t.keys : []
                }(t).concat(n.key ? n.key.split("/") : []), Object.assign({}, n, {
                    key: function (t, e, n) {
                        var r = Object(a.c)(e),
                            i = n.key.split("/");
                        return t && Object(a.c)(t.key) === r ? u(i, t.key.split("/")) : u(i, [r])
                    }(t, e, n),
                    keys: r
                })
            },
            d = function (t, e, n) {
                t.concat(e).filter(function (t) {
                    return t.key === n.key
                }).length || (n = s(n), t.push(n))
            };
        e.a = function t(e, n, r, u) {
            if (i()(this, t), this.mergeUiSchemaList = [], u = u || ["*"], !e.validate(c.a, u)) throw e.errors;
            var h = Object(a.b)(n, !0).join("/");
            if (o.d.has(h)) {
                var p = o.b.get(o.d.get(h));
                p.$id && (p.$ref = p.$id, p.$id = void 0, delete p.$id), this.mergeUiSchemaList = function (t, e, n, r) {
                    var i = n.indexOf("*"),
                        c = [],
                        o = [],
                        u = ["object", "array"];
                    if (n.lastIndexOf("*") !== i) return [];
                    if (i < 0) return n.slice(i + 1).map(function (n) {
                        var r = f(t, e, n.constructor === String ? {
                            key: n
                        } : n);
                        c.push(s(r))
                    }), c;
                    if (n.slice(0, i).forEach(function (n) {
                            var r = f(t, e, n.constructor === String ? {
                                key: n
                            } : n);
                            c.push(s(r))
                        }), n.slice(i + 1).forEach(function (n) {
                            var r = f(t, e, n.constructor === String ? {
                                key: n
                            } : n);
                            o.push(s(r))
                        }), r.type === u[0] && r.properties && Object.keys(r.properties).forEach(function (n) {
                            var r = f(t, e, {
                                key: n
                            });
                            d(c, o, r)
                        }), r.type === u[1] && r.items) {
                        var h = f(t, e, {
                            key: Object(a.b)(r.schemaPath || "").join("/")
                        });
                        d(c, o, h)
                    }
                    if (u.indexOf(r.type) < 0) {
                        var p = f(t, e, {
                            key: Object(a.b)(r.schemaPath || "", !1).join("/")
                        });
                        d(c, o, p)
                    }
                    return c.concat(o)
                }(r, n, u, p)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        var r = {
            type: "array",
            items: {
                anyOf: [{
                    type: "string",
                    minLength: n(15).a
                }, {
                    type: "object",
                    required: ["key"],
                    properties: {
                        key: {
                            type: "string"
                        }
                    }
                }]
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        var r = 1
    }])
});
//# sourceMappingURL=index.prd.js.map