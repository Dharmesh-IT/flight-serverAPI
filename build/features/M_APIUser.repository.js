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
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIUserRepository = void 0;
const BaseSquelizeRepository_1 = require("../core/repository/BaseSquelizeRepository");
const M_APIUser_model_1 = require("../database/M_APIUser.model");
class APIUserRepository extends BaseSquelizeRepository_1.BaseSequelizeRepository {
    constructor() {
        super(M_APIUser_model_1.m_apiuser);
    }
    findbyUsername(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.findOne({ username: userName });
        });
    }
    singInUser(userName, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.findOne({ username: userName, password: password });
        });
    }
}
exports.APIUserRepository = APIUserRepository;
//# sourceMappingURL=M_APIUser.repository.js.map