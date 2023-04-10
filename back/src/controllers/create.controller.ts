import { Response, Request } from "express";
import createUserService from "../services/createUser";



export const createUserController = async (req:Request, res:Response) => {
  
   const user = await createUserService(req.body)
   return res.status(201).json(user)

}

