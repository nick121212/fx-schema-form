!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SFC=t():e.SFC=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o});var r=n(3),i=n.n(r),c=n(2),a=(n(1),function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.split("/").map(function(e,n){var r=/#$/g;return 0===n&&r.test(e)?(r.lastIndex=0,t?e.replace(r,""):null):"properties"===e?null:"items"===e?"-":e}).filter(function(e){return null!==e})}),o=function(e){var t=e.split("/");return t.length?t[0].replace(/#$/g,""):""},u=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";i()(this,e),this.ajv=t,this.$id=r,this.mergeSchema={},r||this.initSchema(t,n),this.compileSchema(n,r||n.$ref||"")}return e.prototype.initSchema=function(e,t){var n=t.$id;if(!n&&!t.$ref)return t;if(!e.validateSchema(t))throw e.errors;return n&&!e.getSchema(n)&&e.addSchema(t),t},e.prototype.compileSchema=function(e,t){if(e=c.e.get("undefined")(e,t||(e.$id||"")+"#",this.ajv),this.mergeSchema=e,e.type&&!e.$ref&&e.type.constructor===String){var n=e.type.toString();c.e.has(n)&&(this.mergeSchema=c.e.get(n)(e,t||(e.$id||"")+"#",this.ajv))}},e}();t.a=u},function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=Object.prototype.hasOwnProperty},function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"c",function(){return c}),n.d(t,"e",function(){return a}),n.d(t,"d",function(){return o}),n.d(t,"a",function(){return u});var r=n(4),i=new r.a,c=new r.a,a=new r.a,o=new r.a,u=function(e,t,n){return c.forEach(function(r,i){t=i(e,t,n)}),t}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(3),i=n.n(r),c=n(1),a=function(){function e(){i()(this,e),this.i={},this.pi={}}return e.prototype.add=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return!(c.a.call(this.pi,e)||!n&&this.has(e))&&(this.i[e]=t,!0)},e.prototype.has=function(e){return c.a.call(this.i,e)},e.prototype.get=function(e){return this.has(e)?this.i[e]:null},e.prototype.lock=function(e){this.has(e)&&(this.pi[e]=!0)},e.prototype.unLock=function(e){this.has(e)&&delete this.pi[e]},e.prototype.forEach=function(e){if(e)for(var t in this.i){if(this.has(t))if(!1===e(t,this.i[t]))break}},e.prototype.clear=function(){this.i={},this.pi={}},e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),i=n(11),c=n(4),a=n(2),o=n(0);n.d(t,"ResolveLib",function(){return o.a}),n.d(t,"getSchemaId",function(){return o.c}),n.d(t,"getDataKeys",function(){return o.b});var u=n(15);n.d(t,"MergeLib",function(){return u.a}),n.d(t,"BaseFactory",function(){return c.a}),n.d(t,"schemaKeysFactory",function(){return a.d}),n.d(t,"schemaFieldFactory",function(){return a.b}),n.d(t,"schemaKeyWordFactory",function(){return a.c}),n.d(t,"schemaTypeFactory",function(){return a.e}),a.c.add("definitions",r.b),a.c.add("ref",r.d),a.c.add("oneof",r.c),a.c.add("anyof",r.a),a.e.add("array",i.a),a.e.add("string",i.b),a.e.add("undefined",i.b),a.e.add("number",i.b),a.e.add("null",i.b),a.e.add("any",i.b),a.e.add("integer",i.b),a.e.add("boolean",i.b),a.e.add("object",i.c)},function(e,t,n){"use strict";var r=n(7);n.d(t,"d",function(){return r.a});var i=n(8);n.d(t,"c",function(){return i.a});var c=n(9);n.d(t,"a",function(){return c.a});var a=n(10);n.d(t,"b",function(){return a.a})},function(e,t,n){"use strict";var r=n(0);n(1);t.a=function(e,t,n){if(t&&t.$ref){var i=Object(r.c)(t.$ref);t.$id?t.$ref=t.$id+t.$ref:i||(t.$ref=Object(r.c)(e)+t.$ref);var c=n.getSchema(t.$ref);if(c&&c.schema){var a=Object.assign({},c.schema);return a.$ref=t.$ref,delete a.$id,Object.assign(a,{refKeys:Object(r.b)(t.$ref)}),a}0}return t}},function(e,t,n){"use strict";var r=n(0);t.a=function(e,t,n){if(!t)return t;var i=t.oneOf;return i&&i.constructor===Array&&(t.oneOf=i.map(function(e){return new r.a(n,e).mergeSchema})),t}},function(e,t,n){"use strict";var r=n(0);t.a=function(e,t,n){if(!t)return t;var i=t.anyOf;return i&&i.constructor===Array&&(t.anyOf=i.map(function(i,c){return new r.a(n,i,t.$id||Object(r.c)(t.$ref||"")?void 0:Object(r.c)(e)).mergeSchema})),t}},function(e,t,n){"use strict";var r=n(0);t.a=function(e,t,n){if(!t)return t;var i=t.definitions;if(i)for(var c in i)if(i.hasOwnProperty(c)){var a=i[c];!1!==a&&!0!==a&&new r.a(n,a,t.$id+"#/definitions/"+c)}return t}},function(e,t,n){"use strict";var r=n(12);n.d(t,"a",function(){return r.a});var i=n(13);n.d(t,"c",function(){return i.a});var c=n(14);n.d(t,"b",function(){return c.a})},function(e,t,n){"use strict";var r=n(0),i="items";t.a=function(e,t,n){var c=e.items;if(c){var a=new r.a(n,c,[t,i].join("/")),o=Object(r.b)([t,i].join("/"));Object.assign(a.mergeSchema,{keys:o})}return e}},function(e,t,n){"use strict";var r=n(0),i=(n(1),"properties");t.a=function(e,t,n){return e.properties&&!e.$ref&&Object.keys(e.properties).forEach(function(c){if(!([i,"items"].indexOf(c)>=0)){var a=e.properties,o=e.required,u=void 0===o?[]:o;if(a&&a[c]){Object.assign(a[c],{isRequired:u.indexOf(c)>=0});var f=new r.a(n,a[c],[t,i,c].join("/")),s=Object(r.b)([t,i,c].join("/"));Object.assign(f.mergeSchema,{keys:s})}}}),e}},function(e,t,n){"use strict";var r=n(2),i=n(0);t.a=function(e,t,n){var c=Object(i.b)(t,!1),a=Object(i.c)(t),o=Object(r.a)(t,e,n);return r.b.has(t)?o||e:(a||(a=e.$id||""),e.$id&&e.$ref&&r.d.add(e.$id,e.$ref),r.b.add(t,Object.assign({},o||e,{keys:c,schemaPath:t})),r.d.add([a].concat(c).join("/"),t),o||e)}},function(e,t,n){"use strict";var r=n(3),i=n.n(r),c=n(16),a=n(2),o=n(0),u=(n(1),function(e,t){for(var n=Object(o.b)(t,!0);e.length;){var r=e.shift()||"",i=(n=n.concat(r?[r]:[])).join("/").replace(/\/$/,"");if(!a.d.has(i))return"";var c=a.b.get(a.d.get(i));n=c.$ref?Object(o.b)(c.$ref,!0):n}return n.join("/")}),f=function(e){if(!a.d.has(e.key))return e;var t=a.d.get(e.key),n=a.b.get(t);return Object.assign({},n,e)},s=function(e,t,n){var r,i=function(e){return e&&e.keys?e.keys:[]}(e),c=function(e,t,n){var r=Object(o.c)(t),i=n.key.split("/");return e&&Object(o.c)(e.key)===r?u(i,e.schemaPath||""):u(i,t)}(e,t,n);return r=i.concat(n.key?n.key.split("/"):[]),Object.assign({},n,{key:c,isRequired:!1,keys:r})},d=function(e,t,n){e.concat(t).filter(function(e){return e.key===n.key}).length||(n=f(n),e.push(n))};t.a=function e(t,n,r,u){if(i()(this,e),this.mergeUiSchemaList=[],u=u||["*"],!t.validate(c.a,u))throw t.errors;var h=Object(o.b)(n,!0).join("/");if(a.d.has(h)){var p=a.b.get(a.d.get(h));p.$id&&(p.$ref||(p.$ref=p.$id),p.$id=void 0,delete p.$id),this.mergeUiSchemaList=function(e,t,n,r){var i=n.indexOf("*"),c=[],a=[],u=["object","array"];if(n.lastIndexOf("*")!==i)return[];if(i<0)return n.slice(i+1).map(function(n){var r=s(e,t,n.constructor===String?{key:n}:n);c.push(f(r))}),c;if(n.slice(0,i).forEach(function(n){var i=s(e,r.schemaPath||t,n.constructor===String?{key:n}:n);c.push(f(i))}),n.slice(i+1).forEach(function(n){var i=s(e,r.schemaPath||t,n.constructor===String?{key:n}:n);a.push(f(i))}),r.type===u[0]&&r.properties&&Object.keys(r.properties).forEach(function(n){var i=s(e,r.schemaPath||t,{key:n,isRequired:!!r.required&&r.required.indexOf(n)>=0});d(c,a,i)}),r.type===u[1]&&r.items){var h=s(e,r.schemaPath||t,{key:"-"});d(c,a,h)}if(u.indexOf(r.type)<0){var p=s(e,t,{key:Object(o.b)(r.schemaPath||"",!1).join("/")});d(c,a,p)}return c.concat(a)}(r,n,u,p)}}},function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={type:"array",items:{anyOf:[{type:"string",minLength:n(17).a},{type:"object",required:["key"],properties:{key:{type:"string"}}}]}}},function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=1}])});
//# sourceMappingURL=index.prd.js.map