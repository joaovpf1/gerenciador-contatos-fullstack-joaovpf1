import { createContext, useEffect } from "react";
import { hubApi } from "../service/api";
import { toast } from "react-toastify";
import { useState } from 'react';

export const ContactContext = createContext({});

// eslint-disable-next-line react/prop-types
export const ContactProvider = ({children})=>{
    const [contactsList, setContactsList] = useState([])
    const [editingContact, setEditingContact] = useState(null)
    const [editModalContactVisible, setEditModalContactVisible] = useState(false)
    const [createModalContactVisible, setCreateModalContactVisible] = useState(false)


    const closeCreateModal = () => {
        setCreateModalContactVisible(false)
    }

    const closeEditModal = () => {
        setEditModalContactVisible(false);
        setEditingContact(null)
    }

    useEffect(()=>{
        const token = localStorage.getItem('@TOKEN');
        // const client = localStorage.getItem('@CLIENT');
        // console.log(client)
        // if(client && client.contacts){
        //     setContactsList([...client.contacts])
        // }

        const getContacts = async ()=>{
            try {
                const { data } = await hubApi.get('/contacts', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setContactsList(data)
            } catch (error) {
                console.log(error)
            } 
        }
        getContacts()
    },[])

    const createContact = async (formData) => {
        const token = localStorage.getItem('@TOKEN');
        try {
            const { data } = await hubApi.post('/contacts', formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setContactsList([...contactsList, data])
            toast.success('Contato criado com sucesso.')
        } catch (error) {
            if (error.response.status == 401) {
                toast.error('Tecnologia já cadastrada.')
            } else {
                toast.error('Houve algum erro, tente novamente')
                console.log(error)
            }
        }
    }

    const deleteContact = async (id) => {
        const token = localStorage.getItem('@TOKEN');
        try {
            await hubApi.delete(`/contacts/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const newContactsList = contactsList.filter(contact => contact.id !== id);
            setContactsList(newContactsList)
            toast.success('Contato deletada com sucesso.')
        } catch (error) {
            console.log(error)
        }
    }

    const editContact = async (formData) => {
        const token = localStorage.getItem('@TOKEN');
        try {
            const { data } = await hubApi.patch(`/contacts/${editingContact.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            const newContactsList = contactsList.map(contact => {
                if (contact.id === editingContact.id) {
                    return data;
                } else {
                    return contact
                }
            })
            setContactsList(newContactsList)
            setEditingContact(null)
            toast.success('Tecnologia alterada com sucesso.')
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <ContactContext.Provider value={{createContact, setContactsList, contactsList, deleteContact, editContact, closeCreateModal, closeEditModal, editModalContactVisible, createModalContactVisible, setEditingContact, setEditModalContactVisible, setCreateModalContactVisible, editingContact}}>
            {children}
        </ContactContext.Provider>
    )
}