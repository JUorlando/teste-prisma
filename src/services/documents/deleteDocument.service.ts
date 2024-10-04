import documentMock from "../../mocks/document.mock";
import { AppError } from "../../errors";

const deleteDocumentService = async (userId: number, documentId: number) => {
  try {
    const document = await documentMock.document.findById({ id: documentId });

    if (!document) {
      throw new AppError("Document not found.", 404);
    }

    if (document.userId !== userId) {
      throw new AppError(
        "You do not have permission to delete this document.",
        403
      );
    }

    const deletedDocument = await documentMock.document.findByIdAndDelete({
      id: documentId,
    });

    if (!deletedDocument) {
      throw new AppError("Error deleting the document.", 500);
    }
  } catch (err: any) {
    console.error(err);
    throw new AppError(
      err.message || "An error occurred while deleting the document.",
      err.statusCode || 500
    );
  }
};

export default deleteDocumentService;
