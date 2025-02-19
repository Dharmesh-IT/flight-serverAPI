"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const ResultJson_1 = __importDefault(require("../models/ResultJson"));
const logger_1 = require("../utils/logger/logger");
const inversify_1 = require("inversify");
let UserController = class UserController {
    constructor(userService) {
        this._userService = userService;
    }
    getUserProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = new ResultJson_1.default();
            try {
                const username = req.body;
                const userProfile = yield this._userService.getUserProfile(username);
                if (userProfile == null) {
                    result.isSuccess = false;
                    result.message = 'User not found';
                }
                else {
                    result.isSuccess = true;
                    result.data = userProfile;
                }
                return res.json(result);
            }
            catch (error) {
                logger_1.logger.error('Error fetching users:', error);
                return res.status(500).json({
                    message: "Internal Server Error"
                });
            }
        });
    }
};
exports.UserController = UserController;
exports.UserController = UserController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)("IUserService")),
    __metadata("design:paramtypes", [Object])
], UserController);
//# sourceMappingURL=user.Controller.js.map