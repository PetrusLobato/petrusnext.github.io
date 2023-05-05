import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entities";
import { AppError } from "../../errors/AppError";


const deleteClientsService = async (id: string) => {

  const methodRepository = AppDataSource.getRepository(Client);

  const client = await methodRepository.findOneBy({id:id})

    if (!client) {
        throw new AppError("client not exist", 404);
    }

    if (!client.isActive) {
        throw new AppError("client is already inactive", 400);
    }

    client.isActive = false

    await methodRepository.save(client)


    return {}


};

export default deleteClientsService;