import "reflect-metadata";
import path from "path";
import "dotenv/config";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource(

    {
        type: "postgres",
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        logging: true,
        synchronize: false,
        entities: [path.join(__dirname, "./entities/**.{js,ts}")], //"__dirname" caminho da minha maquina até o src do projeto.
        migrations: [path.join(__dirname, "./migrations/**.{js,ts}")]
    }
)

export default AppDataSource