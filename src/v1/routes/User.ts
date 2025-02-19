import Router, { Request, Response } from "express";

import authMiddleware from "../../middlewares/auth.middleware";
import { UserController } from "../../controllers/user.Controller";
import { container } from "../../config/inversify.config";
const userRouter = Router();

const _userController = container.get<UserController>("IUserController");
userRouter.post("/profile", authMiddleware, async (req, res) => {
  await _userController.getUserProfile(req, res);
});

export default userRouter;
