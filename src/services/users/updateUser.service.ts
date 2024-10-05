import { AppError } from "../../errors";
import { tUpdateUser } from "../../interfaces/user.interface";
import userMock from "../../mocks/user.mock";

const updateUserService = async (
  payload: tUpdateUser,
  userId: number
): Promise<tUpdateUser> => {
  try {
    const user = await userMock.user.findById({ id: userId });

    if (!user) {
      throw new AppError("User not found.");
    }

    const updatedUser = { ...user, ...payload };

    await userMock.user.findByIdAndUpdate({ id: userId, data: updatedUser });

    return updatedUser;
  } catch (err: any) {
    if (err instanceof AppError) {
      throw err;
    } else {
      console.log(err);
      throw new AppError("An error occurred while updating the user.");
    }
  }
};

export default updateUserService;
