import { Router } from "express";
import { loginController } from "../controllers/login.controller";
import schemaMiddleware from "../validations/schema.validations";
import { loginSchema } from "../schemas/user.schema";


const loginRoutes: Router = Router();

loginRoutes.post("/login", schemaMiddleware(loginSchema), loginController)


export default loginRoutes;