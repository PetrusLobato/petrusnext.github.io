import { Response, Request } from "express";
import listUserService from "../../services/user/list.user.service";




export const listUserController = async (req:Request, res:Response) => {
  
    const users = await listUserService(req.params.id);
    return res.status(200).json(users);

}