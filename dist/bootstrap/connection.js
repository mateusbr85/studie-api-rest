"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connection = {};
async function mongononnect() {
    if (connection === null || connection === void 0 ? void 0 : connection.isConnected) {
        return;
    }
    mongoose_1.default.Promise = global.Promise;
    const db = await mongoose_1.default.connect("mongodb://localhost:27017", {
        keepAlive: true,
        dbName: "appNode"
    });
    console.log("CONEXAO COM O BANCO DE DADOS ", db.connections[0].readyState == 1 ? true : false);
    connection.isConnected = db.connections[0].readyState;
}
exports.default = mongononnect;
//# sourceMappingURL=connection.js.map