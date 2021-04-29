import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsFillLockFill } from 'react-icons/bs';

import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { FormContext } from '../../contexts/FormContext';
import { api } from '../../services/api';
import styles from './styles.module.scss';
import { GetStaticProps } from 'next';

export default function Form(props: any) {
    const {formToShow} = useContext(FormContext);

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');

    const { login, responseApiRegister, userLoginId } = useContext(UserContext);
    
    function handleSubmitRegister(event: any) {
    
      api.post('registerUser', {
        name: name,
        email: email,
        password: password,
        confirm_password: confirmPassword
      }).then(response => {
        const data = response.data;;
        if(data.error) {
          responseApiRegister(data.error, 'error');
        } else {
          responseApiRegister(data.result, 'success');
        }
      })

      event.preventDefault();
    }

    function handleSubmitLogin() {    // Pega os dados com sucesso, porém não atribui a uma variável pois tem que usar Redux Persist
      api.post('login', {
        email: email,
        password: password,
      }).then(response => {
        const data = response.data;;
        if(data.error) {
          responseApiRegister(data.error, 'error');
        } else {
          const result = data.result;
          login(result.id);
        }
      })
    }

    const handleChangeName = (event: any) => {
      setName(event.target.value);
    }

    const handleChangeEmail = (event: any) => {
      setEmail(event.target.value);
    }
    
    const handleChangePassword = (event: any) => {
      setPassword(event.target.value);
    }
    
    const handleChangeConfirmPassword = (event: any) => {
      setConfirmPassword(event.target.value);
    }

    // useEffect(() => {
    //   api.get(`user/${userLoginId}`).then(response => {
    //     console.log(response.data);
    //   })
    // }, [])

    return(
        <div className={styles.form}>
          
          <section>
            <h1>{props.register ? 'Vamos Começar' : 'Bem vindo de volta'}</h1>
            <span>{props.register ? 'Já tem uma conta?' : 'Ainda não tem uma conta?'} <a onClick={props.register ? () => formToShow('login') : () => formToShow('register')}> {props.register ? 'Login' : 'Cadastre-se'}</a></span>

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

          <form method="post" onSubmit={handleSubmitLogin}>
            <div className={styles.inputArea}>
              {props.register &&
                  <div className={styles.inputLabel}>
                      <label>Nome</label>
                      <div className={styles.inputIcon}>
                          <FaUserAlt size={25}/>
                          <input type="text" placeholder="Matheus" value={name} onChange={handleChangeName} name="name" className={styles.input}/>
                      </div>            
                  </div>
              }
              
              <div className={styles.inputLabel}>
                <label>Email</label>
                <div className={styles.inputIcon}>
                  <MdEmail size={25}/>
                  <input type="email" placeholder="user@gmail.com" value={email} onChange={handleChangeEmail} name="email" className={styles.input}/>
                </div>            
              </div>

              <div className={styles.inputLabel}>
                <label>Password</label>
                <div className={styles.inputIcon}>
                  <BsFillLockFill size={25}/>
                  <input type="password" name="password" value={password} onChange={handleChangePassword} placeholder="*******" />
                </div>
              </div>

              {props.register &&
                <div className={styles.inputLabel}>
                  <label>Confirm Password</label>
                  <div className={styles.inputIcon}>
                    <BsFillLockFill size={25}/>
                    <input type="password" name="confirm_password" value={confirmPassword} onChange={handleChangeConfirmPassword} placeholder="*******" />
                  </div>
                </div>
              }

            </div>

            {props.register &&
              <div className={styles.checkboxArea}>
                  <input type="checkbox" />
                  <span>
                      Eu concordo com os
                      <strong style={{color: 'var(--default)'}}> termos de serviço </strong> 
                      e 
                      <strong style={{color: 'var(--default)'}}> política de privacidade</strong>
                  </span>
              </div>
            }

            <button type="submit">{props.register ? 'Register' : 'Login'}</button>
          </form>
        </div>
    )
}

