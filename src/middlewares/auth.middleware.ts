import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    console.log("Auth middleware triggered");

    try {
        const header = req.headers.authorization;
        if (!header) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }

        const token = header.split(" ")[1];
        if (!token) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }

        const decode = jwt.verify(token, process.env.JWT_SECRETKEY as string);
        if (!decode) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }

        console.log("Token decoded:", decode);

        (req as any).user = decode;
        next();
    } catch (error) {
        if (error instanceof Error) {
            res.status(401).json({ message: "Unauthorized", error: error.message });
        }
        else { res.status(401).json({ message: "Unauthorized", error: "Unknown error" }); }
    }
};

export default authMiddleware;
