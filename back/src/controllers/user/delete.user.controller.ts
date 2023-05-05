import { Response, Request } from "express";
import deleteUsersService from "../../services/user/delete.user.service";




export const deleteUsersController = async (req:Request, res:Response) => {
  
   const user = await deleteUsersService(req.params.id)
   return res.status(204).json(user)

}