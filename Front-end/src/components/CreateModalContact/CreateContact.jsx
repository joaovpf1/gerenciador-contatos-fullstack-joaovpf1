import { useForm } from 'react-hook-form';
import { CreateContactSchema} from './CreateContactSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { ContactContext } from '../../providers/contactContext';
import styles from './createContact.module.scss'

export const CreateContactModal = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(CreateContactSchema),
    });

    const { closeCreateModal, createContact } = useContext(ContactContext);

    const submit = (formData) => {
        createContact(formData);
        closeCreateModal();
    }

    return (
        <div role='dialog' className="dialog" >
            <section className={styles.container}>
                
                    <div >
                        <h3>Criar contato</h3>
                        <button onClick={closeCreateModal}>x</button>
                    </div>
                

                
                    <form onSubmit={handleSubmit(submit)} noValidate>
                        <div>
                            <label>Nome</label>
                            <input name='name' placeholder='Digite aqui o nome' type='text' {...register('nomeCompleto')} />
                            <span>{errors.nomeCompleto?.message}</span>
                        </div>

                        <div>
                            <label>email</label>
                            <input name='email' placeholder='Digite aqui o email' type='email' {...register('email')} />
                            <span>{errors.email?.message}</span>
                        </div>

                        <div>
                            <label>Telefone</label>
                            <input name='telefone' placeholder='Digite aqui o telefone' type='tel' {...register('telefone')} />
                            <span>{errors.telefone?.message}</span>
                        </div>

                        <button type='submit'>Salvar contato</button>
                    </form>
                
            </section>
        </div>
    )
}