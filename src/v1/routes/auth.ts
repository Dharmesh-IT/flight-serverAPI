import express, { Request, Response } from "express";
import { authUserHandler } from "../../controllers/auth.Controller";


const authRouter = express.Router();
authRouter.get("/healthcheck", (req: Request, res: Response) => {
    res.sendStatus(200);

});

authRouter.post("/login", authUserHandler);

// const authController = require("../../controllers/auth.Controller");

// router.post("/", authController.auth);



export default authRouter;
