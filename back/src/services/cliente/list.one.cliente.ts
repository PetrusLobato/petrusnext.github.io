import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entities";
import { AppError } from "../../errors/AppError";
import { clienteSchemaResponse } from "../../schemas/client.schema";


const listOneClientService = async (id: string)=> {
    
    const clientRepository = AppDataSource.getRepository(Client);

    const client = await clientRepository.findOneBy({
      id: id,
    });

    if (!client) {
        throw new AppError("client not exist", 404);
    }
  
    const clientResponse = await  clienteSchemaResponse.validate(client, {
      stripUnknown: true,
    });
  
    return clientResponse!;

};
  
  export default listOneClientService;