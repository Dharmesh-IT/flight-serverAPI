import { Request, Response } from "express";
import { authUser } from "../services/auth.Service";

export async function authUserHandler(req: Request, res: Response) {
  try {
    const user = await authUser(req, res);
    res.send({ status: "OK", data: user });
  } catch (err) {

  }

  // const auth = (req, res) => {
  //   const user = authService.authenticate();
  //   res.send({ status: "OK", data: user });
  // };
}


