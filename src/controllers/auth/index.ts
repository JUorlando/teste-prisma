import { Request, Response } from "express";
import authService from "../../services/auth";

const authController = async (req: Request, res: Response): Promise<any> => {
  const data = await authService(req.body);

  return res.status(200).json(data);
};

export default authController;