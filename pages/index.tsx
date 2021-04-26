import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsFillLockFill } from 'react-icons/bs';

import styles from './home.module.scss';

export default function Home() {
  const [moveDiv, setMoveDiv] = useState(false);

  return (
    <div className={styles.homeContainer}>

      <div className={styles.form}>
        <section>
          <h1>Vamos Começar</h1>
          <span>Já tem uma conta? <a href="#">Login</a></span>

          <div>
            <button>
              <FcGoogle size={20} />
              <span>Cadastre com Google</span>
            </button>
            <button>
              <FaFacebook size={20} color="#fff"/>
              <span>Cadastre com Facebook</span>
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

      <div className={styles.divider} id={moveDiv ? styles.moveDivToRight : styles.moveDivToLeft} onClick={() => setMoveDiv(!moveDiv)}/>
    </div>
  )
}
