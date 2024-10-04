import { tDocument, tUpdateDocument } from "../interfaces/document.interface";
import userMock from "./user.mock";

let documents: tDocument[] = [];

const documentMock = {
  document: {
    create: async (data: { name: string; status: string; userId: any }) => {
      const userExists = await userMock.user.findById({ id: data.userId });
      if (!userExists) {
        throw new Error(`User with ID ${data.userId} does not exist.`);
      }

      const newDocument: tDocument = {
        id: documents.length + 1,
        name: data.name,
        status: data.status,
        userId: data.userId,
      };
      documents.push(newDocument);
      return newDocument;
    },
    findByUserId: async (userId: number) => {
      return documents.filter((document) => document.userId === userId);
    },
    findById: async ({ id }: { id: number }) => {
      return documents.find((document) => document.id === id);
    },
    findByIdAndUpdate: async ({
      id,
      data,
    }: {
      id: number;
      data: tUpdateDocument;
    }) => {
      const documentIndex = documents.findIndex(
        (document) => document.id === id
      );
      if (documentIndex === -1) {
        return null;
      }
      const updatedDocument = { ...documents[documentIndex], ...data };
      documents[documentIndex] = updatedDocument;
      return updatedDocument;
    },
    findByIdAndDelete: async ({ id }: { id: number }) => {
      const documentIndex = documents.findIndex(
        (document) => document.id === id
      );
      if (documentIndex === -1) {
        return null;
      }
      const deletedDocument = documents[documentIndex];
      documents = documents.filter((doc) => doc.id !== id);
      return deletedDocument;
    },
  },
};

export default documentMock;
