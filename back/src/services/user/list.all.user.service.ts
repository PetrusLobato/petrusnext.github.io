import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { userSchemaResponse } from "../../schemas/user.schema";

const  listAllUsersService = async () => {
    
    const methodRepository = AppDataSource.getRepository(User);

    const allUsers =  await methodRepository.find({
        where:{
            isActive: true
        },
        relations:{
            Clients:true
        }
    });
    

    const responseUsers = userSchemaResponse.validate(allUsers, {
        stripUnknown: true,
      });
    
    return responseUsers;

}
  
export default  listAllUsersService;
  
  