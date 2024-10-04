import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import validateBody from "../middlewares/validateBody";
import { userCreateSchema } from "../schemas/user.schema";
import getUsersController from "../controllers/users/getUsers.controller";
import updateUserController from "../controllers/users/updateUser.controller";

const userRouter = Router();

userRouter.post("/users", validateBody(userCreateSchema), createUserController);
userRouter.get("/users", getUsersController);
userRouter.put("/users/:id", updateUserController)

export default userRouter;
