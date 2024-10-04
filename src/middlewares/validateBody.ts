import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validateBody = (schemas: AnyZodObject) => {
  return async (req: Request, _: Response, next: NextFunction) => {
    req.body = await schemas.parseAsync(req.body);

    return next();
  };
};

export default validateBody;
