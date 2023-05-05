import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";


const  deleteUsersService = async (id: string) => {

    const methodRepository = AppDataSource.getRepository(User);

    const user = await methodRepository.findOneBy({
        id:id
    })

    if (!user) {
        throw new AppError("User not exist", 404);
    }

    if (!user.isActive) {
        throw new AppError("User is already inactive", 400);
    }

    user.isActive = false

    // await methodRepository.softRemove(user);
    await methodRepository.save(user)


    return {}
}
  
export default  deleteUsersService;
  