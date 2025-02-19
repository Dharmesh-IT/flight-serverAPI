import "reflect-metadata";
import { Container } from "inversify";
import { IAuthService } from "../services/Iauth.Service";
import { AuthService } from "../services/auth.Service";
import { IAPIUserRepository } from "../features/IAPIUser.Repository";
import { APIUserRepository } from "../features/M_APIUser.repository";
import { IUserService } from "../services/IUser.Service";
import { UserService } from "../services/user.Service";
import { AuthController } from "../controllers/auth.Controller";
import { UserController } from "../controllers/user.Controller";
import { IAuthController } from "../controllers/Iauth.Controller";
import { IUserController } from "../controllers/Iuser.Controller";

const container = new Container();

//Repositories
container.bind<IAPIUserRepository>("IAPIUserRepository").to(APIUserRepository);

//Services
container.bind<IAuthService>("IAuthService").to(AuthService);
container.bind<IUserService>("IUserService").to(UserService);

//controllers

container.bind<IAuthController>("IAuthController").to(AuthController);
container.bind<IUserController>("IUserController").to(UserController);
export { container };