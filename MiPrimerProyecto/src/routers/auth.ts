import { Router } from "express";
import { registerController, loginController } from "../controllers/auth";
import logMiddleware from "../middleware/log";

const router = Router();
// http://localhost:3001/auth/register|login [POST]
router.post("/register", logMiddleware, registerController);
router.post("/login", logMiddleware, loginController);

export { router };
