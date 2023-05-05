import { Client } from "pg";
import { AppDataSource } from "../../data-source";
import { IClientResponse } from "../../interface/global";
import { listClient } from "../../schemas/client.schema";

const listclienteService = async (): Promise<IClientResponse[] | undefined> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clientelist = await clientRepository.find();

  const clientsResponse = await listClient.validate(clientelist, {
    stripUnknown: true,
  });

  return clientsResponse;
};

export default listclienteService;
