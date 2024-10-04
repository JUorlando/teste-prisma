import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import validateBody from "../middlewares/validateBody";
import { userCreateSchema } from "../schemas/user.schema";

const userRouter = Router();

userRouter.post("/users", validateBody(userCreateSchema), createUserController);

export default userRouter;
