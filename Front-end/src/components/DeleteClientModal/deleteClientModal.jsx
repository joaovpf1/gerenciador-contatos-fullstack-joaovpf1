import { useContext } from "react";
import { UserContext } from "../../providers/userContext";
import styles from './deleteClientModal.module.scss'

export const DeleteModal = () => {
    const { closeClientDeleteModal, deleteClient } = useContext(UserContext);

    const submit = (id) => {
        // const id = localStorage.getItem('@ID')
        deleteClient(id)
        closeClientDeleteModal()
    }

    return (
        <div role='dialog' className="dialog" >
            <section className={styles.container}>
                <div className={styles.titleDiv}>
                    <h3>Tem certeza que quer deletar a sua conta?</h3>
                    {/* <button onClick={()=>closeClientDeleteModal()}>x</button> */}
                </div>

                <div >
                    <button onClick={() => submit(localStorage.getItem('@ID'))}>Sim</button>
                    <button onClick={()=>closeClientDeleteModal()}>Não</button>
                </div>
            </section>
        </div>
    )
}