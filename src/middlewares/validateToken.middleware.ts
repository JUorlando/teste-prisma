import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError, JwtPayload } from "jsonwebtoken";
import { AppError } from "../errors";

const validateToken = async (req: Request, _: Response, next: NextFunction) => {
  try {
    const { SECRET_KEY } = process.env;

    if (!SECRET_KEY) {
      throw new AppError("ENV Jwt was not informed.");
    }

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new AppError("No token provided.", 401);
    }

    const parts = authHeader.split(" ");

    if (!(parts.length === 2)) {
      throw new AppError("Token error.", 401);
    }

    const [schema, token] = parts;

    if (!/^Bearer$/i.test(schema)) {
      throw new AppError("Token malformatted.", 401);
    }

    const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;

    req.user = {
      id: decoded.id,
    };

    return next();
  } catch (err: any) {
    console.log(err);

    if (err instanceof AppError) {
      throw err;
    } else if (err instanceof JsonWebTokenError) {
      throw new AppError(err.message, 401);
    } else {
      throw new AppError("An error occurred during user authentication.");
    }
  }
};

export default validateToken;
