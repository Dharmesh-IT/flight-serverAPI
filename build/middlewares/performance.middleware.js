"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.performanceMiddleware = void 0;
const response_time_1 = __importDefault(require("response-time"));
const logger_1 = require("../utils/logger/logger");
exports.performanceMiddleware = (0, response_time_1.default)((req, res, time) => {
    logger_1.logger.info({
        method: req.method,
        url: req.url,
        responseTime: `${time.toFixed(2)}ms`
    });
});
//# sourceMappingURL=performance.middleware.js.map