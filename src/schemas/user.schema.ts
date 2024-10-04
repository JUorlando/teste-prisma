import { z } from "zod";

const documentSchema = z.object({
  name: z.string(),
  status: z.string(),
});

const userSchema = z.object({
  id: z.number().optional(),
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  documents: z.array(documentSchema),
});

const userCreateSchema = userSchema.omit({ id: true });

const userArraySchema = userSchema.array();

const userUpdateSchema = userCreateSchema.partial();

export { userCreateSchema, userSchema, userArraySchema, userUpdateSchema };
