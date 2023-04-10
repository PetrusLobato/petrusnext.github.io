import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entities";
import { AppError } from "../errors/AppError";
import { IClient, IClientResponse } from "../interface/global";
import { clienteSchemaResponse } from "../schemas/client.schema";

const clienterService = async (data: IClient): Promise<IClientResponse> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clientVerify = await clientRepository.findOneBy({ email: data.email });


  if (clientVerify) {
    throw new AppError("Contact already exists", 409);
  }

  let createClient = clientRepository.create(data);

  const newCliente = await clientRepository.save(createClient);

  const newClienteResponse = await clienteSchemaResponse.validate(newCliente, {
    stripUnknown: true,
  });

  return newClienteResponse;
};

export default clienterService;
