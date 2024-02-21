import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EditContactSchema } from './EditContactSchema';
import { ContactContext } from '../../providers/contactContext';
import styles from './editContact.module.scss';

export const EditContactModal = () => {
    const { closeEditModal, editContact, editingContact } = useContext(ContactContext);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(EditContactSchema),
        values: {
            nomeCompleto: editingContact.nomeCompleto,
            email: editingContact.email,
            telefone: editingContact.telefone,
        },
    });

    const submit = (formData) => {
        editContact(formData)
        closeEditModal()
    }

    return (
        <div role='dialog' className="dialog">
            <section className={styles.container}>
                
                    <div >
                        <h3>Detalhes do Contato</h3>
                        <button onClick={()=>closeEditModal()}>x</button>
                    </div>
                

                
                    <form onSubmit={handleSubmit(submit)}>
                        <div>
                            <label>Nome</label>
                            <input name='name' placeholder='Digite aqui o nome' type='text' {...register('nomeCompleto')} />
                            <span>{errors.nomeCompleto?.message}</span>
                        </div>

                        <div>
                            <label>E-mail</label>
                            <input name='email' placeholder='Digite aqui o email' type='email' {...register('email')} />
                            <span>{errors.email?.message}</span>
                        </div>

                        <div>
                            <label>Telefone</label>
                            <input name='telefone' placeholder='Digite aqui o telefone' type='tel' {...register('telefone')} />
                            <span>{errors.email?.message}</span>
                        </div>
                        <button type='submit'>Salvar alterações</button>
                    </form>
                
            </section>
        </div>
    )
}