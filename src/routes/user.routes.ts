import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import validateBody from "../middlewares/validateBody";
import { userCreateSchema } from "../schemas/user.schema";
import getUsersController from "../controllers/users/getUsers.controller";

const userRouter = Router();

userRouter.post("/users", validateBody(userCreateSchema), createUserController);
userRouter.get("/users", getUsersController);

export default userRouter;
