import { Router } from "express";
import { clienteSchema } from "../schemas/client.schema";
import schemaMiddleware from "../validations/schema.validations";
import { clienteController } from "../controllers/cliente/cliente.controller";

const clienteRoute: Router = Router();

clienteRoute.post(
  "/cliente",
  schemaMiddleware(clienteSchema),
  clienteController
);
clienteRoute.get("/cliente");
clienteRoute.get("/cliente/:id");
clienteRoute.patch("/:id");
clienteRoute.delete("/:id");

export default clienteRoute;
