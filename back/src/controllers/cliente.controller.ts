import { Response, Request } from "express";
import clienterService from "../services/cliente";
import listclienteService from "../services/list.cliente";




export const clienteController = async (req:Request, res:Response) => {
  
   const cliente = await clienterService(req.body)
   return res.status(201).json(cliente)

}


export const listclienteController =async (req:Request,res:Response) => {
    const client = await listclienteService()
    return res.status(200).json(client)
}
