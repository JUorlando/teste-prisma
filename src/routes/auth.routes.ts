import { Router } from "express";
import authController from "../controllers/auth";
import { authSchema } from "../schemas/auth.schema";
import validateBody from "../middlewares/validateBody";

const authRouter = Router();

authRouter.post("/auth", validateBody(authSchema), authController);

export default authRouter;
