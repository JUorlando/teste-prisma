import { tDocument } from "../../interfaces/document.interface";
import userMock from "../../mocks/user.mock";
import documentMock from "../../mocks/document.mock";
import { AppError } from "../../errors";

const createDocumentService = async (
  userId: number,
  payload: { name: string; status: string }
): Promise<tDocument> => {
  try {
    if (userId === undefined) {
      throw new AppError("User ID is required.", 400);
    }

    const user = await userMock.user.findById({ id: userId });

    if (!user) {
      throw new AppError(`User with ID: "${userId}" not found.`, 404);
    }

    const newDocument: tDocument = await documentMock.document.create({
      name: payload.name,
      status: payload.status,
      userId: user.id,
    });

    user.documents?.push(newDocument);

    return newDocument;
  } catch (err: any) {
    console.error(err);
    throw new AppError("An error occurred while creating the document.", 500);
  }
};

export default createDocumentService;

