import { useContext } from "react";
import { UserContext } from "../../providers/userContext";
import { EditModal } from "../EditClientModal/editClientModal";
import { DeleteModal } from "../DeleteClientModal/deleteClientModal";
import { CreateContactModal } from "../CreateModalContact/CreateContact";
import { EditContactModal } from "../EditModalContact/EditContact";
import { ContactList } from "../ContactsList/ContactList";
import { ContactContext } from "../../providers/contactContext";
import contactImg from "../../assets/contactIcon.png"
import contactBook from "../../assets/contactBook.png"
import styles from "./home.module.scss";

export function HomePage(){
    const { client, homePageLogout, setEditingClient, setDeleteClientModalVisible, setEditClientModalVisible, isEditClientModalVisible, isDeleteClientModalVisible, } = useContext(UserContext);

    const {setCreateModalContactVisible, editModalContactVisible, createModalContactVisible} =useContext(ContactContext)

    const editClientBttn = ()=>{
        const data = localStorage.getItem('@CLIENT')
        setEditingClient(JSON.parse(data))
        setEditClientModalVisible(true)
    }

    const deleteClientBttn = ()=>{
        setDeleteClientModalVisible(true)
    }
    console.log(client)

    return client &&(
        <>
        <header>
            <div>
                <img src={contactBook} alt="Livro de contatos" />
            </div>

            <div>
                <h2>Gerenciador de Contatos</h2>
            </div>
        </header>
        <main>
            <div> 
                <section className={styles.container}>
                    <img className={styles.contactIcon}  src={contactImg} alt="Contact icon"/>
                    <div className={styles.titleDiv}>
                        <h1>
                            {client.nomeCompleto}

                        </h1>
                        <h3>E-mail: {client.email}</h3>
                        <h3>Telefone: {client.telefone}</h3>
                    </div>
                    <div className={styles.bttnsDiv}>
                        <button onClick={() => homePageLogout()}>Sair</button>
                        <button onClick={() => editClientBttn()}>Editar conta</button>
                        <button onClick={()=> deleteClientBttn()}>Excluir conta</button>
                    </div>
                </section>
                <section className={styles.contactsContainer}>
                    <div className={styles.headerDiv}>
                        <h1>Contatos:</h1>
                        <button onClick={() => setCreateModalContactVisible(true)}>Adicionar contatos</button>
                    </div>
                    {<ContactList/>}
                </section>
            </div>

            {isEditClientModalVisible ? <EditModal/> : null}
            {isDeleteClientModalVisible ? <DeleteModal/> : null}
            {createModalContactVisible ? <CreateContactModal/> : null}
            {editModalContactVisible ? <EditContactModal/> : null}
        </main>   
        </>
    )
}