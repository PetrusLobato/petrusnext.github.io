import { Router } from "express";import { createUserController } from "../controllers/create.controller";

const registerRouter = Router();

registerRouter.post("register", createUserController)


export default registerRouter;