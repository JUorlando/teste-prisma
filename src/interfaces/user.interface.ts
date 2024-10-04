import { z } from "zod";
import {
  userCreateSchema,
  userSchema,
  userArraySchema,
} from "../schemas/user.schema";

type tUser = z.infer<typeof userSchema>;
type tCreateUser = z.infer<typeof userCreateSchema>;
type tUserArray = z.infer<typeof userArraySchema>;

export { tUser, tCreateUser, tUserArray };
