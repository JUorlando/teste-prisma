import { AppError } from "../../errors";
import { tUserArray } from "../../interfaces/user.interface";
import userMock from "../../mocks/user.mock";

const getUsersService = async (): Promise<tUserArray> => {
  try {
    const users = await userMock.user.find();

    return users;
  } catch (err: any) {
    console.log(err);
    throw new AppError("An error occurred while listing the users.");
  }
};

export default getUsersService;