import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { hubApi } from "../service/api";
import { createContext, useContext, useEffect } from 'react';
import { useState } from 'react';
import { ContactContext } from "./contactContext";

export const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children })=>{
    const [client, setClient] = useState(null);
    const { setContactsList} = useContext(ContactContext)
    // const [email, setEmail] = useState(null);
    // const [tel, setTel] = useState(null);
    const [isEditClientModalVisible, setEditClientModalVisible] = useState(false);
    const [isDeleteClientModalVisible, setDeleteClientModalVisible] = useState(false);
    const [editingClient, setEditingClient] = useState(null)

    const navigate = useNavigate();

    const closeClientDeleteModal = () => {
        setDeleteClientModalVisible(false)
    }

    const closeClientEditModal = () => {
        setEditClientModalVisible(false);
    }

    const PostRegister = async (formData) => {
        try {
            await hubApi.post('/clients', formData);
            navigate('/');
            toast.success('Cadastro realizado com sucesso.');
        } catch (error) {
            console.log(error)
            if (error.response.status >= 400) {
                toast.error('Algo deu errado, tenta novamente.')
            }
        }
    }

    const loginRequest = async (formData) => {
        try {
            const { data } = await hubApi.post('/login', formData);
            localStorage.setItem('@TOKEN', data.token.token);
            setClient(data.client);
            localStorage.setItem('@ID', data.client.id);
            localStorage.setItem('@CLIENT', JSON.stringify(data))
            toast.success('Login feito com sucesso, você será redirecionado(a) para a homepage')
            navigate('/homepage');
                
            const contacts  = await hubApi.get('/contacts', {
            headers: {
            Authorization: `Bearer ${data.token.token}`,
            },
            });
            setContactsList(contacts.data)
            
            } catch (error) {
            console.log(error)
            if (error.response.status >= 400) {
                toast.error('E-mail ou senha incorretos.')
            }
        }
    }

    const homePageLogout = () => {
        setClient(null);
        localStorage.clear();
        navigate('/');
    }

    useEffect(() => {
        const token = localStorage.getItem('@TOKEN');
        console.log(token)
        const id = localStorage.getItem('@ID');
        const autoLogin = async () => {
            try {
                const { data } = await hubApi.get(`/clients/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setClient(data);
                navigate('/homepage');
            } catch (error) {
                console.log(error)
            }
        }


        if (token) {
            autoLogin();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const editClientModal =  async(clientId, formData)=>{
        const token = localStorage.getItem('@TOKEN');
        try {
            const {data} = await hubApi.patch(`/clients/${clientId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setEditingClient(data)
            toast.success('Conta alterada com sucesso, favor relogar.')
            homePageLogout()
        } catch (error) {
            console.log(error)
        }
    }

    const deleteClient = async (clientId)=>{
        const token = localStorage.getItem('@TOKEN');
        try {
            await hubApi.delete(`/clients/${clientId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success('Conta deletada com sucesso.')
            navigate("/")
        } catch (error) {
            console.log(error)
            toast.error('Algo deu errado, tente novamente mais tarde.')
        }
    }

    return (
        <UserContext.Provider value={{ client, setClient, PostRegister, loginRequest, homePageLogout, deleteClient, editClientModal, closeClientDeleteModal, closeClientEditModal, setEditingClient, setDeleteClientModalVisible, setEditClientModalVisible, isEditClientModalVisible, isDeleteClientModalVisible, editingClient}}>
            {children}
        </UserContext.Provider>
    )
}