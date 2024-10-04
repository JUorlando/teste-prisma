import { AppError } from "../../errors";
import { tDocumentArray } from "../../interfaces/document.interface";
import documentMock from "../../mocks/document.mock";

const getDocumentService = async (userId: number): Promise<tDocumentArray> => {
  try {
    const userDocuments = await documentMock.document.findByUserId(userId);

    return userDocuments;
  } catch (err: any) {
    console.log(err);
    throw new AppError("An error occurred while listing the documents.");
  }
};

export default getDocumentService;
