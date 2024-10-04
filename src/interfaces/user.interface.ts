import { z } from "zod";
import { userCreateSchema, userSchema } from "../schemas/user.schema";

type tUser = z.infer<typeof userSchema>;
type tCreateUser = z.infer<typeof userCreateSchema>;

export { tUser, tCreateUser };
