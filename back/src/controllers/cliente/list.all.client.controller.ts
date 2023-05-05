import { Request, Response } from "express";
import listclienteService from "../../services/cliente/list.cliente";


const listAllClientsController = async (
  req: Request,
  res: Response
) => {
  
  const clients = await listclienteService();
  return res.status(200).json(clients);
};

export default listAllClientsController;