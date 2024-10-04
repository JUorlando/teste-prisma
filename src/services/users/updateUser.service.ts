import { AppError } from "../../errors";
import { tUser, tUpdateUser } from "../../interfaces/user.interface";
import prismaMock from "../../mocks/mock";

const updateUserService = async (
  payload: tUpdateUser,
  userId: number
): Promise<tUser> => {
  try {
    const user = await prismaMock.user.findById({ id: userId });

    if (!user) {
      throw new AppError("User not found.");
    }

    const updatedUser = { ...user, ...payload };

    await prismaMock.user.findByIdAndUpdate({ id: userId, data: updatedUser });

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
