import { Request, Response } from "express";
import { IClientsReturn, ILoginReturn } from "../interface/clients.interface";
import { loginService } from "../services/login.service";
import { clientRepo } from "../repositories";

export const loginController = async (req: Request,
  res: Response
): Promise<Response> => {
  const { email, senha} = req.body;
  const client: IClientsReturn | null = await clientRepo.findOne({ where: { email } });

  if (!client) {
  return res.status(404).json({ error: 'Cliente não encontrado' });
  }
  try {
  const token: ILoginReturn = await loginService(email, senha);
  return res.status(200).json({ token, client });
  } catch (error) {
  return res.status(401).json({ error: 'Falha na autenticação' });
  }
}