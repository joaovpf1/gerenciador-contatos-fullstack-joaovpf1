import AppError from "../errors/AppErrors.error";
import { IContacts, IContactsCreate, IContactsRead, IContactsUpdate } from "../interface/contacts.interface";
import { clientRepo, contactRepo } from "../repositories";
import { contactsReadSchema, contactsSchema } from "../schemas/contacts.schemas";

export const contactCreateService = async (data:IContactsCreate, clientId:number): Promise<IContacts> =>{
    const client = await clientRepo.findOne({
        where: {
            id: clientId
        }
    })

    if (!client) {
        throw new AppError("Client not found", 404)
    }
    const contact = contactRepo.create({
        ...data,
        client
    })

    await contactRepo.save(contact)
    return contactsSchema.parse(contact)
}

export const contactReadService = async (clientId: number): Promise<IContactsRead>=>{
    const client = await clientRepo.findOne(
        {
            where: { id: clientId }, relations: {
                contacts: true
            }
        }
    )
    if (!client) {
        throw new AppError("Client not found", 404)
    }

    return contactsReadSchema.parse(client.contacts)
}



export const contactUpdateService = async (data:IContactsUpdate, contactId: number): Promise<IContacts>=>{
    const contactToUpdate = await contactRepo.findOneBy({ id: contactId })
    if (!contactToUpdate) {
        throw new AppError("Contact not found", 404)
    }
    const updatedContact = contactRepo.create({
        ...contactToUpdate,
        ...data
    })

    await contactRepo.save(updatedContact)
    return contactsSchema.parse(updatedContact)
}

export const contactDeleteService = async (contactId: number): Promise<void>=>{
    const contactToDelete = await contactRepo.findOneBy({ id: contactId })
    if (!contactToDelete) {
        throw new AppError("Contact not found", 404)
    }

    await contactRepo.remove(contactToDelete)
}
