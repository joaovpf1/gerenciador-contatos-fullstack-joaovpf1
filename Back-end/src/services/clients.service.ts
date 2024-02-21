import { hash } from "bcryptjs";
import {
  IClients,
  IClientsCreate,
  IClientsRead,
  IClientsReturn,
  IClientsUpdate,
} from "../interface/clients.interface";
import { clientRepo } from "../repositories";
import {
  clientsReadSchema,
  clientsReturnSchema,
} from "../schemas/clients.schema";
import AppError from "../errors/AppErrors.error";

export const clientCreateService = async (
  data: IClientsCreate
): Promise<IClientsReturn> => {
  const { email, nomeCompleto, senha, telefone } = data;

  const foundUser = await clientRepo.findOne({
    where: {
      email,
    },
  });

  if (foundUser) {
    throw new AppError("Email already exists");
  }

  const hashedPassword = await hash(senha, 10);
  const client = clientRepo.create({
    nomeCompleto,
    email,
    senha: hashedPassword,
    telefone,
  });
  await clientRepo.save(client);
  return clientsReturnSchema.parse(client);
};

export const clientReadService = async (): Promise<IClientsRead> => {
  const clients = await clientRepo.find();
  return clientsReadSchema.parse(clients);
};

export const clientReadIdService = async (
  clientId: number
): Promise<IClientsReturn> => {
  const findClient: IClients | null = await clientRepo.findOneBy({
    id: clientId,
  });
  if (!findClient) {
    throw new AppError("Client not found", 404);
  }
  return clientsReturnSchema.parse(findClient);
};

export const updateClientService = async (
  data: IClientsUpdate,
  clientId: number
): Promise<IClientsReturn> => {
  const findClient: IClients | null = await clientRepo.findOneBy({
    id: clientId,
  });
  if (!findClient) {
    throw new AppError("Client not found", 404);
  }
  const clientData: IClients = clientRepo.create({ ...findClient, ...data });
  const updateClient = await clientRepo.save(clientData);
  return clientsReturnSchema.parse(updateClient);
};

export const deleteClientService = async (clientId: number): Promise<void> => {
  const findClient = await clientRepo.findOneBy({ id: clientId });
  if (!findClient) {
    throw new AppError("Client not found", 404);
  }
  await clientRepo.delete(findClient);
};
