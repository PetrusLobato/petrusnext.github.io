import { Response, Request } from "express";
import clienterService from "../../services/cliente/cliente";

export const clienteController = async (req: Request, res: Response) => {
  const cliente = await clienterService(req.body);
  return res.status(201).json(cliente);
};


