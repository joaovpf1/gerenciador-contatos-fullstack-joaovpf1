import { Request, Response } from "express";
import { IClientsRead, IClientsReturn } from "../interface/clients.interface";
import { clientCreateService, clientReadIdService, clientReadService, deleteClientService, updateClientService } from "../services/clients.service";

export const clientCreateController = async (req: Request,
    res: Response
  ): Promise<Response> => {
    const client: IClientsReturn = await clientCreateService(req.body);
    return res.status(201).json(client);
}

export const readClientController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const client: IClientsRead = await clientReadService();
    return res.status(200).json(client);
};

export const readClientIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId = Number(req.params.id)
  const foundClient: IClientsReturn = await clientReadIdService(clientId);
  return res.status(201).json(foundClient);
};

export const updateClientController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const clientId = Number(req.params.id)
    const newInfo: IClientsReturn = await updateClientService(req.body, clientId);
    return res.status(200).json(newInfo);
};

export const deleteClientController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const clientId = Number(req.params.id)
    await deleteClientService(clientId);
    return res.status(204).json();
};
  