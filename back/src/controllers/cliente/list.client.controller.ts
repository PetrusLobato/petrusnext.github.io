import { Request, Response } from "express";
import listOneClientService from "../../services/cliente/list.one.cliente";


const listOneClientController = async (req: Request, res: Response) => {
 
  const client = await listOneClientService(req.params.id);
  return res.status(200).json(client);
};

export default listOneClientController;