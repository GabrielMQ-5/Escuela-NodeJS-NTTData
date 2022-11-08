import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth";

const registerController = async ({ body }: Request, res: Response) => {
  const responseRegister = await registerUser(body);
  res.send(responseRegister);
};

const loginController = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });

  if (responseUser === "INCORRECT_PASSWORD") {
    res.status(403);
  }
  res.send(responseUser);
};

export { registerController, loginController };
