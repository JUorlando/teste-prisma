import { z } from "zod";
import { documentSchema } from "./document.schema";

const userSchema = z.object({
  id: z.number().optional(),
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string(),
  documents: z.array(documentSchema),
});

const userCreateSchema = userSchema.omit({ id: true });

const userArraySchema = userSchema.array();

const userUpdateSchema = userCreateSchema.partial();

export { userCreateSchema, userSchema, userArraySchema, userUpdateSchema };
