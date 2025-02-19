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
const express_1 = __importDefault(require("express"));
const inversify_config_1 = require("../../config/inversify.config");
const authRouter = (0, express_1.default)();
authRouter.get("/healthcheck", (req, res) => {
    res.sendStatus(200);
});
const authController = inversify_config_1.container.get("IAuthController");
authRouter.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield authController.authenticate(req, res);
}));
// const authController = require("../../controllers/auth.Controller");
// router.post("/", authController.auth);
exports.default = authRouter;
//# sourceMappingURL=auth.js.map