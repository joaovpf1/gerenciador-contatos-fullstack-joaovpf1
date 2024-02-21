import { EditModalSchema } from "./editClientSchema";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from "react";
import { UserContext } from "../../providers/userContext";
import styles from "./editClientModal.module.scss"

export const EditModal = () => {
    const { editingClient, editClientModal, closeClientEditModal } = useContext(UserContext);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(EditModalSchema),
        values: {
            nomeCompleto: editingClient.client.nomeCompleto,
            email: editingClient.client.email,
            telefone: editingClient.client.telefone,
        },
    });
    
    const submit = (formData) => {
        const id = localStorage.getItem('@ID')
        editClientModal(id, formData)
        closeClientEditModal()
    }

    return (
        <div role='dialog' className="dialog">
            <section className={styles.container}>
                
                <div>
                    <h3>Detalhes da conta</h3>
                    <button onClick={()=> closeClientEditModal()}>X</button>
                </div>
                
                <form onSubmit={handleSubmit(submit)}>
                    <div>
                        <label>Nome</label>
                        <input name='nomeCompleto' placeholder='Digite o nome aqui...' type='text'  {...register('nomeCompleto')} />
                        <span>{errors.name?.message}</span>
                    </div>

                    <div>
                        <label>Email</label>
                        <input name='email' placeholder='Digite seu email aqui...' type='email'  {...register('email')} />
                        <span>{errors.telefone?.message}</span>
                    </div>

                    <div>
                        <label>Telefone</label>
                        <input name='telefone' placeholder='Digite seu telefone aqui...' type='tel'  {...register('telefone')} />
                        <span>{errors.telefone?.message}</span>
                    </div>

                    <button type='submit'>Salvar alterações</button>
                </form>
                
            </section>
        </div>
    )
}