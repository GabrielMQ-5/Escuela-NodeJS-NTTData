import { NextFunction, Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
import { verifyToken } from "../utils/jwt.handler";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verifyToken(`${jwt}`) as { id: string };

    if (!isUser) {
      res.status(401);
      res.send("INVALID_JWT");
    } else {
      req.user = isUser;
      next();
    }
  } catch (err) {
    console.log("Error checkJwt", checkJwt, err);
    res.status(400);
    res.send("INVALID_SESSION");
  }
};

export { checkJwt };
