import { Request, Response } from "express";
import deleteClientsService from "../../services/cliente/delete.client";


const deleteClientsController = async (req: Request, res: Response) => {
  
  const deleteClient = await deleteClientsService(req.params.id);
  return res.status(204).json(deleteClient);
};

export default deleteClientsController;