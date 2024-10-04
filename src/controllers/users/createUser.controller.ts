import { Request, Response } from "express";
import createUserService from "../../services/users/createUser.service";

const createUserController = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await createUserService(req.body);
    res.status(201).json(data);
  } catch (err: any) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

export default createUserController;

