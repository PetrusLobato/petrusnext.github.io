import app from "./app";
import AppDataSource from "./database";

(async () => {

    await AppDataSource.initialize().then(() => {
        console.log("DataBase Postegre conectado");

        app.listen(3000, () => {
        console.log("Servidor executando em porta 3000");

    })  
    }).catch((err) => {
        console.error("Error during DataSource initialization", err)
    })
    
})()