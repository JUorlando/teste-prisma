import { tCreateUser, tUser } from "../../interfaces/user.interface";
import { AppError } from "../../errors";
import bcrypt from "bcryptjs";
import userMock from "../../mocks/user.mock";

const createUserService = async (payload: tCreateUser): Promise<tUser> => {
  try {
    const userExists = await userMock.user.findUnique({ email: payload.email });

    if (userExists) {
      throw new AppError(`The email: "${payload.email}" already exists.`, 409);
    }

    const hashedPassword = await bcrypt.hash(payload.password, 10);
    payload.password = hashedPassword

    const newUser = await userMock.user.create({
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
      documents: payload.documents,
    });

    return newUser;
  } catch (err: any) {
    console.error(err);
    throw new AppError("An error occurred while creating the user.", 500);
  }
};

export default createUserService;

