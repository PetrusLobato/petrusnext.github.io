import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { userSchemaResponse } from "../../schemas/user.schema";

const  listUserService = async (id: string) => {
    
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({
      id: id,
    });
  
    const userResponse = await userSchemaResponse.validate(user, {
      stripUnknown: true,
    });
  
    return userResponse!;


}
  
export default  listUserService;
  