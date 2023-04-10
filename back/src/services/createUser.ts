import {AppError} from "../errors/AppError";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entities";
import { IUser, IUserResponse } from "../interface/global";
import { userSchemaResponse } from "../schemas/user.schema";

const createUserService = async (data: IUser): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const userVerify = await userRepository.findOneBy({ email: data.email });

  if (userVerify) {
    throw new AppError("Email already registered", 409);
  }

  let user = userRepository.create(data);

  await userRepository.save(user);

  const userResponse = await userSchemaResponse.validate(user, {
    stripUnknown: true,
  });

  return userResponse;
};

export default createUserService;
