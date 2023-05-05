import express, { Application } from "express";
import loginRoutes from "./routes/login.routes";
import registerRouter from "./routes/register.routes";
import clienteRoute from "./routes/client.routes";
import { globalError } from "./errors/AppError";
import cors from "cors";
import userRoutes from "./routes/user.routes";

const app: Application = express();

app.use(express.json());

app.use("/api", loginRoutes);
app.use("/api", registerRouter);
app.use("/api", clienteRoute);
app.use("/api", userRoutes);

app.use(globalError);
app.use(cors())


export default app;
