import { Router } from "express";
import createDocumentController from "../controllers/documents/createDocument.controller";
import validateBody from "../middlewares/validateBody";
import { documentCreateSchema } from "../schemas/document.schema";
import getDocumentController from "../controllers/documents/getDocument.controller";
import deleteDocumentController from "../controllers/documents/deleteDocument.controller";

import updateDocumentController from "../controllers/documents/updateDocument.controller";
import validateToken from "../middlewares/validateToken.middleware";

const documentRouter = Router();

documentRouter.post(
  "/documents/:id",
  validateBody(documentCreateSchema),
  validateToken,
  createDocumentController
);
documentRouter.get("/documents/:id", getDocumentController);
documentRouter.put("/documents/:id", validateToken, updateDocumentController);
documentRouter.delete(
  "/documents/:id",
  validateToken,
  deleteDocumentController
);

export default documentRouter;
