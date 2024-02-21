import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../providers/userContext';
import { LoginSchema } from './LoginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import contactBook from "../../assets/contactBook.png";
import styles from "./login.module.scss";

export function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(LoginSchema),
    });

    const {loginRequest} = useContext(UserContext);

    const submit = (formData) => {
        loginRequest(formData)
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
                    <div>
                        <h1>Login</h1>
                    </div>
                    <form className={styles.formContainer} onSubmit={handleSubmit(submit)}>
                        <div>
                        <label htmlFor="email">E-mail:</label>
                        <input placeholder='Digite seu email aqui...' type="email" id="email" name="email" {...register('email')} required/>
                        <span>{errors.email?.message}</span> 
                        </div>

                        <div>
                        <label htmlFor="password">Senha:</label>
                        <input placeholder='Digite sua senha aqui...' type="password" id="password" name="password" {...register('senha')} required/>
                        <span>{errors.password?.message}</span>
                        </div>

                        <button type='submit'>
                            Entrar
                        </button>
                    </form>
                    <div className={styles.bttnDiv}>
                        <p>Ainda não possui uma conta?</p>
                        <Link to='/register'>
                        <button>Cadastre-se</button>
                        </Link>
                    </div>
                </section>
            </div>
        </main> 
        </>
    );
}