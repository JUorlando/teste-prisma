import { z } from "zod";

const authSchema = z.object({
  email: z.string().email("Email invalid"),
  password: z.string(),
});

export { authSchema };