import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from './RegisterSchema.js';
import { useContext } from 'react';
import { UserContext } from '../../providers/userContext.jsx';
import contactBook from "../../assets/contactBook.png"
import styles from "./register.module.scss"

export function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(RegisterSchema),
    });
    
    const {PostRegister} = useContext(UserContext);

    const submit = (formData) => {
        PostRegister(formData);
    }
    
    
    return (
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
                    <div className=''>
                        <h1>Cadastre-se</h1>
                    </div>
                    <form className={styles.formContainer} onSubmit={handleSubmit(submit)}>
                        <div>
                            <label htmlFor="name">Nome:</label>
                            <input placeholder='Digite aqui seu nome' type="text" id="name" name="name" {...register('nomeCompleto')} required/>
                            <span>{errors.name?.message}</span>
                        </div>

                        <div>
                            <label htmlFor="email">E-mail:</label>
                            <input placeholder='Digite aqui seu email' type="email" id="email" name="email" {...register('email')} required/>
                            <span>{errors.email?.message}</span> 
                        </div>

                        <div>
                            <label htmlFor="password">Senha:</label>
                            <input placeholder='Digite aqui sua senha' type="password" id="password" name="password" {...register('senha')} required/>
                            <span>{errors.password?.message}</span> 
                        </div>

                        <div>
                            <label>Confirmar Senha:</label>
                            <input placeholder='Digite novamente sua senha' type='password' name='confirmPassword' id='confirmPassword' />
                            <span>{errors.password?.message}</span> 
                        </div>

                        <div>
                            <label htmlFor="telefone">Telefone:</label>
                            <input placeholder='Digite seu telefone' type="tel" id="telefone" name="telefone" {...register('telefone')} required/>
                            <span>{errors.telefone?.message}</span>
                        </div>

                        <button type='submit'>
                            Cadastar
                        </button>
                    </form>
                    <div className={styles.bttnDiv}>
                        <Link to='/'>
                        <button>Login</button>
                        </Link>
                    </div>
                </section>
            </div>
        </main> 
        </>
    );
}