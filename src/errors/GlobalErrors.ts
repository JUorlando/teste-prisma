import { NextFunction, Request, Response } from "express";
import { AppError } from "."; // Certifique-se de que o caminho está correto
import { ZodError } from "zod";

const globalErrors = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  if (err instanceof ZodError) {
    return res.status(409).json({
      message: "Validation error",
      issues: err.issues,
    });
  }

  console.error(err);

  // Para erros internos
  return res.status(500).json({ message: "Internal server error" });
};

export default globalErrors;

