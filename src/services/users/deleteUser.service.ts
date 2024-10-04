import { AppError } from "../../errors";
import userMock from "../../mocks/user.mock";

const deleteUserService = async (userId: number) => {
  try {
    const user = await userMock.user.findByIdAndDelete({ id: userId });

    if (!user) {
      throw new AppError("User not found.", 404);
    }
  } catch (err: any) {
    console.log(err);
    if (err instanceof AppError) {
      throw err;
    } else {
      throw new AppError("An error occurred while deleting the User.");
    }
  }
};

export default deleteUserService;
