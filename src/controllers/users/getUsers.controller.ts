import { Request, Response } from "express";
import getUsersService from "../../services/users/getUsers.service";

const getUsersController = async (_: Request, res: Response): Promise<any> => {
  const data = await getUsersService();

  return res.status(200).json(data);
};

export default getUsersController;
