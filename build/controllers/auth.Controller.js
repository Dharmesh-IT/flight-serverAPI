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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const logger_1 = require("../utils/logger/logger");
const ResultJson_1 = require("../models/ResultJson");
const jwt = __importStar(require("jsonwebtoken"));
const inversify_1 = require("inversify");
let AuthController = class AuthController {
    constructor(service) {
        this._service = service;
    }
    authenticate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            // const tracer = trace.getTracer('default');
            // const span = tracer.startSpan('GET /query'); // Track request duration
            const result = new ResultJson_1.ResultJson();
            try {
                // const mockData = this.getMockData();
                const { username, password } = req.body;
                const authResult = yield this._service.authenticate(username, password);
                if (authResult == null) {
                    result.isSuccess = false;
                    result.message = 'Invalid username or password';
                }
                else {
                    const payload = { id: (_a = authResult === null || authResult === void 0 ? void 0 : authResult.id) === null || _a === void 0 ? void 0 : _a.toString() };
                    const token = jwt.sign(payload, process.env.JWT_SECRETKEY, { expiresIn: process.env.JWT_EXPIRES_IN });
                    result.isSuccess = true;
                    result.message = 'Authentication successful';
                    result.data = token;
                }
                return res.json(result);
            }
            catch (error) {
                logger_1.logger.error('Error fetching users:', error);
                return res.status(500).json({
                    message: "Internal Server Error"
                });
            }
            finally {
                // span.end(); // End span for tracking
            }
        });
    }
    profile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = new ResultJson_1.ResultJson();
            try {
            }
            catch (error) {
            }
        });
    }
    getMockData() {
        return {
            userId: 1,
            name: 'John Doe',
            email: 'johndoe@example.com',
            orders: [
                { orderId: 101, item: 'Laptop', price: 1200 },
                { orderId: 102, item: 'Smartphone', price: 800 },
            ],
        };
    }
};
exports.AuthController = AuthController;
exports.AuthController = AuthController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)("IAuthService")),
    __metadata("design:paramtypes", [Object])
], AuthController);
//# sourceMappingURL=auth.Controller.js.map