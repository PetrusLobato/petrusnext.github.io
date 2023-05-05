import { Router } from "express";
import { clienteSchema } from "../schemas/client.schema";
import schemaMiddleware from "../validations/schema.validations";
import { clienteController } from "../controllers/cliente/cliente.controller";
import { inspectTokenMiddlewares } from "../validations/token.validations";
import { clientExistsValidation } from "../validations/client.exists.validations";
import listClientController from "../controllers/cliente/list.client.controller";
import updateClientController from "../controllers/cliente/update.client.controller";
import listAllClientsController from "../controllers/cliente/list.all.client.controller";
import deleteClientsController from "../controllers/cliente/delete.client.controller";

const clienteRoute: Router = Router();

clienteRoute.post(
  "/cliente", inspectTokenMiddlewares,
  schemaMiddleware(clienteSchema),
  clienteController
);
clienteRoute.get("/cliente", inspectTokenMiddlewares, listAllClientsController);
clienteRoute.get("/cliente/:id", inspectTokenMiddlewares, clientExistsValidation, listClientController);
clienteRoute.patch("/:id", inspectTokenMiddlewares, clientExistsValidation, updateClientController);
clienteRoute.delete("/:id", inspectTokenMiddlewares, clientExistsValidation, deleteClientsController);

export default clienteRoute;
