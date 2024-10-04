import { AppError } from "../../errors";
import { tUserArray } from "../../interfaces/user.interface";
import prismaMock from "../../mocks/mock";

const getUsersService = async (): Promise<tUserArray> => {
  try {
    const users = await prismaMock.user.find();

    return users;
  } catch (err: any) {
    console.log(err);
    throw new AppError("An error occurred while listing the users.");
  }
};

export default getUsersService;