"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/moduleAlias");
const express_1 = __importDefault(require("express"));
const viewHandler_1 = __importDefault(require("./config/viewHandler"));
const body_parser_1 = __importDefault(require("body-parser"));
const database_1 = __importDefault(require("./config/database"));
const web_1 = __importDefault(require("./routes/web"));
const connection_1 = __importDefault(require("@bootstrap/connection"));
const path = __importStar(require("path"));
const files = path.resolve(__dirname);
database_1.default;
const app = (0, express_1.default)();
(0, connection_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.engine('handlebars', viewHandler_1.default.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(files, './resource/views'));
app.use('/api/v1/', web_1.default);
app.listen(process.env.PORT, () => {
    console.log(`Servidor Rodando na porta ${process.env.PORT}`);
});
//# sourceMappingURL=app.js.map