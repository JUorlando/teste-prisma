import { z } from "zod";

const documentSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  status: z.string(),
  userId: z.number(),
});

const documentArraySchema = documentSchema.array();

const documentCreateSchema = documentSchema.omit({ id: true, userId: true});

const documentUpdateSchema = documentCreateSchema.partial();

export {documentArraySchema, documentCreateSchema, documentSchema, documentUpdateSchema}