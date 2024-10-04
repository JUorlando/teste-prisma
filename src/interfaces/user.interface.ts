import { z } from "zod";
import {
  userCreateSchema,
  userSchema,
  userArraySchema,
  userUpdateSchema,
} from "../schemas/user.schema";

type tUser = z.infer<typeof userSchema>;
type tCreateUser = z.infer<typeof userCreateSchema>;
type tUserArray = z.infer<typeof userArraySchema>;
type tUpdateUser = z.infer<typeof userUpdateSchema>;

export { tUser, tCreateUser, tUserArray, tUpdateUser};
