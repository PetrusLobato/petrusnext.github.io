import { Router } from "express";
import { clienteSchema } from "../schemas/client.schema";
import schemaMiddleware from "../validations/schema.validations";
import { clienteController } from "../controllers/cliente.controller";



const clienteRoute: Router = Router();

clienteRoute.post("/cliente", schemaMiddleware(clienteSchema), clienteController)


export default clienteRoute;