import { Request, Response } from "express";
import updateClientService from "../../services/cliente/update.cliente";



const updateClientController = async (req: Request, res: Response) => {

  const updateClient = await updateClientService(req.body, req.params.id);
  return res.status(200).json(updateClient);
};

export default updateClientController;