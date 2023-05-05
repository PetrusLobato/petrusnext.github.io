import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import { IUser } from "../../interface/global";
import { userSchemaResponse } from "../../schemas/user.schema";

const  updateUserService = async (data:IUser, id: string) => {
    
    const userRepository = AppDataSource.getRepository(User);


    const user = await userRepository.findOneBy({
        id:id
    })

    if (!user) {
        throw new AppError("User not exist", 404);
    }
  
    const updateUser =userRepository.create({
        ...user,
        ...data
     })

    await userRepository.save(updateUser);

    const responseUpdate = await  userSchemaResponse.validate(updateUser,
     {
        stripUnknown:true
    })

    return responseUpdate


}
  
export default  updateUserService;
  