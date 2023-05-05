import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entities";
import { AppError } from "../../errors/AppError";
import { IClient } from "../../interface/global";
import { clienteSchemaResponse } from "../../schemas/client.schema";

const updateClientService = async (data: IClient, id: string) => {
    
    const clientRepository = AppDataSource.getRepository(Client);


    const client = await clientRepository.findOneBy({
        id:id
    })

    if (!client) {
        throw new AppError("client not exist", 404);
    }
  
    const updateclient =clientRepository.create({
        ...client,
        ...data
     })

    await clientRepository.save(updateclient);

    const responseUpdate = await  clienteSchemaResponse.validate(updateclient,
     {
        stripUnknown:true
    })

    return responseUpdate
};
  
export default updateClientService;