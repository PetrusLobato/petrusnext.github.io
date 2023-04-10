import { Router } from "express";import { createUserController } from "../controllers/create.controller";
import schemaMiddleware from "../validations/schema.validations";
import { userSchema } from "../schemas/user.schema";

const registerRouter:Router = Router();

registerRouter.post("/register", schemaMiddleware(userSchema), createUserController)


export default registerRouter;