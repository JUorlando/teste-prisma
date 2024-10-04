import documentMock from "../../mocks/document.mock";
import { AppError } from "../../errors";

const updateDocumentService = async (
  userId: number,
  documentId: number,
  updateData: any
) => {
  try {
    const document = await documentMock.document.findById({ id: documentId });

    if (!document) {
      throw new AppError("Document not found.", 404);
    }

    if (document.userId !== userId) {
      throw new AppError("Not permitted.", 403);
    }

    const updatedDocument = await documentMock.document.findByIdAndUpdate({
      id: documentId,
      data: updateData,
    });

    return updatedDocument;
  } catch (err: any) {
    if (err instanceof AppError) {
      throw err;
    } else {
      console.log(err);
      throw new AppError("An error occurred while updating the document.");
    }
  }
};

export default updateDocumentService;
