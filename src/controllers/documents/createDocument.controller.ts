import { Request, Response } from "express";
import createDocumentService from "../../services/documents/createDocument.service";

const createDocumentController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const userId = parseInt(id);
  const { name, status } = req.body;

  try {
    const newDocument = await createDocumentService(userId, {
      name,
      status,
    });
    res.status(201).json(newDocument);
  } catch (err: any) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

export default createDocumentController;
