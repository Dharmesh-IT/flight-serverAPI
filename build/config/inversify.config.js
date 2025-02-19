"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const auth_Service_1 = require("../services/auth.Service");
const M_APIUser_repository_1 = require("../features/M_APIUser.repository");
const user_Service_1 = require("../services/user.Service");
const auth_Controller_1 = require("../controllers/auth.Controller");
const user_Controller_1 = require("../controllers/user.Controller");
const container = new inversify_1.Container();
exports.container = container;
//Repositories
container.bind("IAPIUserRepository").to(M_APIUser_repository_1.APIUserRepository);
//Services
container.bind("IAuthService").to(auth_Service_1.AuthService);
container.bind("IUserService").to(user_Service_1.UserService);
//controllers
container.bind("IAuthController").to(auth_Controller_1.AuthController);
container.bind("IUserController").to(user_Controller_1.UserController);
//# sourceMappingURL=inversify.config.js.map