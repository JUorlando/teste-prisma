import { authSchema } from "../schemas/auth.schema";
import { z } from "zod";

type tAuth = z.infer<typeof authSchema>;

export { tAuth };