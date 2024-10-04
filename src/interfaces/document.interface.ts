import { z } from "zod";
import {
  documentCreateSchema,
  documentSchema,
  documentArraySchema,
  documentUpdateSchema,
} from "../schemas/document.schema";

type tDocument = z.infer<typeof documentSchema>;
type tCreateDocument = z.infer<typeof documentCreateSchema>;
type tDocumentArray = z.infer<typeof documentArraySchema>;
type tUpdateDocument = z.infer<typeof documentUpdateSchema>;

export { tDocument, tCreateDocument, tDocumentArray, tUpdateDocument};