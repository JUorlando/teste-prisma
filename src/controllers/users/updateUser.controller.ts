import { Request, Response } from "express";
import updateUserService from "../../services/users/updateUser.service";

const updateUserController = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  const userID = parseInt(id);
  const data = await updateUserService(req.body, userID);

  return res.status(200).json(data);
};

export default updateUserController;
