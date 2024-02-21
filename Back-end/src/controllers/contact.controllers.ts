import { Request, Response } from "express";
import { contactCreateService, contactDeleteService, contactReadService, contactUpdateService } from "../services/contacts.service";
import { IContacts, IContactsRead } from "../interface/contacts.interface";


export const contactCreateController = async (req: Request,
    res: Response
  ): Promise<Response> => {
    const contactId = res.locals.contactId
    const contact: IContacts = await contactCreateService(req.body, contactId);
    return res.status(201).json(contact);
}

export const contactReadController = async (req: Request,
    res: Response
  ): Promise<Response> => {
    const contactId = res.locals.contactId
    const contact: IContactsRead = await contactReadService(contactId);
    return res.status(200).json(contact);
}

export const contactUpdateController = async (req: Request,
    res: Response
  ): Promise<Response> => {
    const contactId = Number(req.params.id)
    const contact: IContacts = await contactUpdateService(req.body, contactId);
    return res.status(200).json(contact);
}

export const contactDeleteController = async (req: Request,
    res: Response
  ): Promise<Response> => {
    const contactId = Number(req.params.id)
    await contactDeleteService(contactId);
    return res.status(204).json();
}