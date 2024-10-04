import { Request, Response } from "express";
import deleteDocumentService from "../../services/documents/deleteDocument.service";

const deleteDocumentController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const documentId = parseInt(id);
  const userId = req.user.id;

  await deleteDocumentService(userId, documentId);
  res.status(204).send();
};

export default deleteDocumentController;
