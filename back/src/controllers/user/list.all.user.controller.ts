import { Response, Request } from "express";
import listAllUsersService from "../../services/user/list.all.user.service";




export const listAllUsersController = async (req:Request, res:Response) => {
  
   const user = await listAllUsersService()
   return res.status(200).json(user)

}
