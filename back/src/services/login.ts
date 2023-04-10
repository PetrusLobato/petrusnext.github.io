import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import {AppError} from "../errors/appError";
import { ILoginResponse, Ilogin } from "../interface/global";
import { User } from "../entities/user.entities";
import { AppDataSource } from "../data-source";

const loginService = async ({
  email,
  password,
}: Ilogin): Promise<ILoginResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email: email });

  if (!user) {
    throw new AppError("Wrong email/password", 403);
  }
  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Wrong email/password", 403);
  }

  const token = jwt.sign({}, process.env.SECRET_KEY!, {
    subject: user.id,
    expiresIn: "24h",
  });

  return { token };
};

export default loginService;
