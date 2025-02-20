"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import './config/otel-setup';
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const auth_1 = __importDefault(require("./v1/routes/auth"));
const User_1 = __importDefault(require("./v1/routes/User"));
const error_middleware_1 = require("./middlewares/error.middleware");
const logger_1 = require("./utils/logger/logger");
const pino_http_1 = __importDefault(require("pino-http"));
const config_1 = require("./config");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use((0, pino_http_1.default)({ logger: logger_1.logger }));
// *** Routes ***
app.use(body_parser_1.default.json());
app.use("/api/v1/auth", auth_1.default);
app.use("/api/v1/user", User_1.default);
// Error handling
app.use(error_middleware_1.errorHandler);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = new config_1.Database();
        if (db.sequelize) {
            yield db.sequelize.sync();
        }
        app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
            console.log(`Server running on port ${PORT}`);
        }));
    }
    catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1);
    }
});
start();
//# sourceMappingURL=index.js.map