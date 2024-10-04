import { Request, Response } from "express";
import deleteUserService from "../../services/users/deleteUser.service";

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params;
  const userId = parseInt(id);
  await deleteUserService(userId);

  return res.status(204).json();
};

export default deleteUserController;
