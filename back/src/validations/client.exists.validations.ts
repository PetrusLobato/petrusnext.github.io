import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/AppError";
import { Client } from "../entities/client.entities";



export const userExistsValidation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userRepository = AppDataSource.getRepository(Client);
    const findClient = await userRepository.findOneBy({ id: req.params.id });
  
    if (!findClient) {
      throw new AppError("User not found", 404);
    }
    return next();
  };