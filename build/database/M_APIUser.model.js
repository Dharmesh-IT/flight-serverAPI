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
Object.defineProperty(exports, "__esModule", { value: true });
exports.m_apiuser = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let m_apiuser = class m_apiuser extends sequelize_typescript_1.Model {
};
exports.m_apiuser = m_apiuser;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        field: "id"
    }),
    __metadata("design:type", Number)
], m_apiuser.prototype, "ID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, field: "username" }),
    __metadata("design:type", String)
], m_apiuser.prototype, "UserName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, field: "password" }),
    __metadata("design:type", String)
], m_apiuser.prototype, "Password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, field: "isactive" }),
    __metadata("design:type", Boolean)
], m_apiuser.prototype, "IsActive", void 0);
exports.m_apiuser = m_apiuser = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "m_apiuser",
        timestamps: true, // Disable timestamps
    })
], m_apiuser);
exports.default = m_apiuser;
//# sourceMappingURL=M_APIUser.model.js.map