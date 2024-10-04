import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import validateBody from "../middlewares/validateBody";
import { userCreateSchema } from "../schemas/user.schema";
import getUsersController from "../controllers/users/getUsers.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import validateToken from "../middlewares/validateToken.middleware";

const userRouter = Router();

userRouter.post("/users", validateBody(userCreateSchema), createUserController);
userRouter.get("/users", getUsersController);
userRouter.put("/users/:id", validateToken, updateUserController);
userRouter.delete("/users/:id", validateToken, deleteUserController);

export default userRouter;
