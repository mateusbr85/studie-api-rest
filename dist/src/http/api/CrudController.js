"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudController = void 0;
const isModelCrud = async (crud) => {
    var _a;
    return (_a = (await require('@models/' + crud))) === null || _a === void 0 ? void 0 : _a.default;
};
class CrudController {
    static async get(req, res) {
        res.status(200).json('hello');
    }
    static async insert(req, res) {
        let query = null;
        const model = await isModelCrud(req.params.crud);
        console.log(model);
        const data = req.body.data ? req.body.data : null;
        if (model !== null) {
            query = await model.insertMany({ ...data })
                .then((response) => { return response; })
                .catch((err) => { console.log(err); });
        }
        res.status(200).json('Acessando nova rota');
    }
}
exports.CrudController = CrudController;
//# sourceMappingURL=CrudController.js.map