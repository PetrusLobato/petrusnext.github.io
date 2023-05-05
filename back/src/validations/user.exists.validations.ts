import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entities";
import { AppError } from "../errors/AppError";



export const userExistsValidation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userRepository = AppDataSource.getRepository(User);
    const findUser = await userRepository.findOneBy({ id: req.params.id });
  
    if (!findUser) {
      throw new AppError("User not found", 404);
    }
    return next();
  };