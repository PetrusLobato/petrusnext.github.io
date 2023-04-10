import "express-async-errors";
import express, { Application } from "express";
import loginRoutes from "./routes/login.routes";
import registerRouter from "./routes/register.routes";
import clienteRoute from "./routes/client.routes";
import { globalError } from "./errors/AppError";

const app: Application = express();

app.use(express.json());

app.use("/api", loginRoutes);
app.use("/api", registerRouter);
app.use("/api", clienteRoute);

app.use(globalError);

export default app;
