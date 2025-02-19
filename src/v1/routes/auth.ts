import Router, { Request, Response } from "express";
import { AuthController } from "../../controllers/auth.Controller";
import { container } from '../../config/inversify.config';
import { IAuthController } from "../../controllers/Iauth.Controller";

const authRouter = Router();
authRouter.get("/healthcheck", (req: Request, res: Response) => {
    res.sendStatus(200);

});
const authController = container.get<IAuthController>("IAuthController");
authRouter.post("/login", async (req, res) => {
    await authController.authenticate(req, res);
});

// const authController = require("../../controllers/auth.Controller");

// router.post("/", authController.auth);



export default authRouter;
