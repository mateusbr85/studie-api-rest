"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_handlebars_1 = require("express-handlebars");
const hbs = (0, express_handlebars_1.create)({
    defaultLayout: 'main',
    helpers: {
        console: function (value) {
        }
    }
});
exports.default = hbs;
//# sourceMappingURL=viewHandler.js.map