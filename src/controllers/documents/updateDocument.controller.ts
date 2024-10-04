import { Request, Response } from "express";
import updateDocumentService from "../../services/documents/updateDocument.service";

const updateDocumentController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const documentId = parseInt(id);
  const userId = req.user.id;
  const updateData = req.body;

  const updatedDocument = await updateDocumentService(
    userId,
    documentId,
    updateData
  );
  res.status(200).json(updatedDocument);
};

export default updateDocumentController;
