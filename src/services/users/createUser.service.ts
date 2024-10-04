import { tCreateUser, tUser } from "../../interfaces/user.interface";
import { AppError } from "../../errors";
import prismaMock from "../../mocks/mock";

const createUserService = async (payload: tCreateUser): Promise<tUser> => {
  try {
    const userExists = await prismaMock.user.findUnique({ email: payload.email });

    if (userExists) {
      throw new AppError(`The email: "${payload.email}" already exists.`, 409);
    }

    const newUser = await prismaMock.user.create({
      name: payload.name,
      email: payload.email,
      documents: payload.documents,
    });

    return newUser;
  } catch (err: any) {
    console.error(err);
    throw new AppError("An error occurred while creating the user.", 500);
  }
};

export default createUserService;

