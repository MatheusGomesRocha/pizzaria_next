import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsFillLockFill } from 'react-icons/bs';

import styles from './styles.module.scss';

export default function Form(props) {
    return(
        <div className={styles.form}>
        <section>
          <h1>{props.register ? 'Vamos Começar' : 'Bem vindo de volta'}</h1>
          <span>{props.register ? 'Já tem uma conta?' : 'Ainda não tem uma conta?'} <a href="#">{props.register ? 'Login' : 'Cadastre-se'}</a></span>

          <div>
            <button>
              <FcGoogle size={20} />
              <span>{props.register ? 'Cadastre com Google' : 'Faça login com Google'}</span>
            </button>
            <button>
              <FaFacebook size={20} color="#fff"/>
              <span>{props.register ? 'Cadastre com Facebook' : 'Faça login com Facebook'}</span>
            </button>
          </div>

          <div>
            <div className={styles.line} />
            <span>ou</span>
            <div className={styles.line} />
          </div>
        </section>

        <form>
          <div className={styles.inputArea}>

            {props.register &&
                <div className={styles.inputLabel}>
                    <label>Nome</label>
                    <div className={styles.inputIcon}>
                        <FaUserAlt size={25}/>
                        <input type="text" placeholder="Matheus" className={styles.input}/>
                    </div>            
                </div>
            }
            
            <div className={styles.inputLabel}>
              <label>Email</label>
              <div className={styles.inputIcon}>
                <MdEmail size={25}/>
                <input type="email" placeholder="user@gmail.com" className={styles.input}/>
              </div>            
            </div>

            <div className={styles.inputLabel}>
              <label>Password</label>
              <div className={styles.inputIcon}>
                <BsFillLockFill size={25}/>
                <input type="password" placeholder="*******" />
              </div>
            </div>

          </div>

          <div className={styles.checkboxArea}>
              <input type="checkbox" />
              <span>
                Eu concordo com os
                <strong style={{color: 'var(--default)'}}> termos de serviço </strong> 
                e 
                <strong style={{color: 'var(--default)'}}> política de privacidade</strong>
              </span>
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    )
}