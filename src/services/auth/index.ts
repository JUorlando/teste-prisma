import jwt from "jsonwebtoken";
import { AppError } from "../../errors";
import { tAuth } from "../../interfaces/auth.interface";
import { tUser } from "../../interfaces/user.interface";
import userMock from "../../mocks/user.mock";
import bcrypt from "bcryptjs";

const authService = async (
  payload: tAuth
): Promise<{ user: Omit<tUser, "password">; token: string }> => {
  try {
    const { SECRET_KEY } = process.env;

    if (!SECRET_KEY) {
      throw new AppError("ENV Jwt was not informed.");
    }

    const { email, password } = payload;

    const user = await userMock.user.findUnique({ email });

    if (!user) {
      throw new AppError("Invalid credentials.");
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new AppError("Invalid credentials.");
    }

    const { id, name, documents } = user;
    const token = jwt.sign({ id }, SECRET_KEY!, {
      expiresIn: "24h",
    });

    return { user: { id, name, email, documents }, token };
  } catch (err: any) {
    console.log(err);
    throw new AppError("An error occurred during user authentication.");
  }
};

export default authService;
