import { Request, Response } from "express";
import ResultJson from "../models/ResultJson";

import { logger } from "../utils/logger/logger";
import { inject, injectable } from "inversify";
import { IUserService } from "../services/IUser.Service";
import { IUserController } from "./Iuser.Controller";

@injectable()
export class UserController implements IUserController {
    private _userService: IUserService;

    constructor(@inject("IUserService") userService: IUserService) {
        this._userService = userService;
    }

    async getUserProfile(req: Request, res: Response) {
        const result = new ResultJson();
        try {
            const { username } = req.body;

            const userProfile = await this._userService.getUserProfile(username);
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

            logger.error('Error fetching users:', error);

            return res.status(500).json({
                message: "Internal Server Error"
            });
        }

    }
}