"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CrudController_1 = require("@api/CrudController");
const router = (0, express_1.Router)();
router.get('/:crud', (req, res) => {
    CrudController_1.CrudController.get(req, res);
});
router.post("/:crud/insert", (req, res) => {
    CrudController_1.CrudController.insert(req, res);
});
exports.default = router;
//# sourceMappingURL=web.js.map