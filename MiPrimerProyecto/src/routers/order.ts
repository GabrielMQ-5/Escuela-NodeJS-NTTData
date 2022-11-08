import { Router } from "express";
import { getItems } from "../controllers/order";
import logMiddleware from "../middleware/log";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get("/", logMiddleware, checkJwt, getItems);

export { router };
