import { Request, Response } from "express";
import getDocumentService from "../../services/documents/getDocument.service";

const getDocumentController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const userId = parseInt(id);

  try {
    const userDocuments = await getDocumentService(userId);
    res.status(200).json(userDocuments);
  } catch (err: any) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

export default getDocumentController;
