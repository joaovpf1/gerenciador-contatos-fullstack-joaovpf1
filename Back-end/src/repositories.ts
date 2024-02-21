import { Repository } from "typeorm"
import { AppDataSource } from "./data-source"
import { Client } from "./entities/clients.entity"
import { Contact } from "./entities/contacts.entity"

export const clientRepo: Repository<Client> = AppDataSource.getRepository(Client)
export const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)