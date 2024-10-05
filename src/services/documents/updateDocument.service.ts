import documentMock from "../../mocks/document.mock";
import userMock from "../../mocks/user.mock";
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

    const user = await userMock.user.findById({ id: userId });

    if (!user) {
      throw new AppError("User not found.", 404);
    }

    const userDocuments = user.documents ?? []

    let documentIndex = user.documents?.findIndex(
      (doc) => doc.id === documentId
    );

    if (documentIndex === undefined || documentIndex === -1) {
      throw new AppError("Document not found in user's documents.", 404);
    }

    userDocuments[documentIndex] = { ...userDocuments[documentIndex], ...updateData };

    await userMock.user.findByIdAndUpdate({
      id: userId,
      data: { documents: user.documents },
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
