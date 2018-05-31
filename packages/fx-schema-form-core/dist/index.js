
if (process.env.NODE_ENV === "production") {
    module.exports = require("./index.prd");
} else {
    module.exports = require("./index.dev");
}