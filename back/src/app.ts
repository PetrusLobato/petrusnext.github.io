import express from "express";
import loginRoutes from "./routes/login.routes"
import registerRouter from "./routes/register.routes"



const app = express()

app.use(express.json());

app.use("api/", loginRoutes );
app.use("api/", registerRouter);



export default app