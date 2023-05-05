import { Response, Request } from "express";
import updateUserService from "../../services/user/update.user.service";




export const updateUserController = async (req:Request, res:Response) => {
  
   const user = await updateUserService(req.body, req.params.id)
   return res.status(200).json(user)

}