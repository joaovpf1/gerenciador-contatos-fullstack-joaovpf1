import { useContext } from 'react';
import { ContactContext } from '../../providers/contactContext';
import newEditIcon from '../../../src/assets/newEditIcon.svg'
import deleteicon from '../../assets/deleteIcon.svg'
import styles from "./contactList.module.scss";


export const ContactList = () => {
    const { deleteContact, setEditingContact, contactsList, setEditModalContactVisible } = useContext(ContactContext);

    const editBttn = (contact) => {
        setEditingContact(contact);
        setEditModalContactVisible(true);
    }

    return (
        <ul className={styles.container}>
            {contactsList && contactsList.map(contact => (
                <li key={contact.email} >
                    <div>
                        <div className={styles.textDiv}>
                            <h2>{contact.nomeCompleto}</h2>
                            <p>E-mail: {contact.email}</p>
                            <p>Telefone: {contact.telefone}</p>
                        </div>
                        <div className={styles.bttnDiv} >
                            <button onClick={() => editBttn(contact)}><img src={newEditIcon}/></button>
                            <button onClick={() => deleteContact(contact.id)}><img src={deleteicon}/></button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}