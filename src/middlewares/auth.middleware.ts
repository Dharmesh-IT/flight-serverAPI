import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
export const authentication = (req: Request, res: Response, next: NextFunction) => {


    const headers = req.headers.authorization;
    if (!headers) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const token = headers.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);

};