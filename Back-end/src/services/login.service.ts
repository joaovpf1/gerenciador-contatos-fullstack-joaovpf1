import { clientRepo } from "../repositories";
import AppError from "../errors/AppErrors.error";
import { IClientsLogin, ILoginResult, ILoginReturn } from "../interface/clients.interface";
import { compare } from "bcryptjs";
import  jwt  from "jsonwebtoken";

export const loginService = async (email:string, senha:string): Promise<ILoginResult> => {
    //const { email, senha } = data
        const foundClient = await clientRepo.findOne({
            where: {
                email
            }
        })

        if (!foundClient) {
            throw new AppError("Invalid credentials", 401)
        }

        const PasswordMatch = await compare(senha, foundClient.senha)

        if (!PasswordMatch) {
            throw new AppError("Invalid credentials", 401)
        }

        const token = jwt.sign({ userName: foundClient.nomeCompleto }, process.env.SECRET_KEY!, { expiresIn: "1h", subject: foundClient.id.toString() })
        return {token}
}
