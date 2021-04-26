import { useState } from 'react';
import styles from './home.module.scss';

export default function Home() {
  const [moveDiv, setMoveDiv] = useState(false);

  return (
    <div className={styles.homeContainer}>

      <div className={styles.form}>
        <section>
          <h1>Vamos Começar</h1>
          <span>Já tem uma conta? <a href="">login</a></span>

          <div>
            <button>
              <span>Cadastre-se com Google</span>
            </button>
            <button>
              <span>Cadastre-se com Facebook</span>
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
            <div>
              <label>Email</label>
              <input type="email" placeholder="user@hotmail.com" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" placeholder="*******" />
            </div>
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" />
            <span>Eu concordo com os termos de serviço da plataforma</span>
          </div>

          <button type="submit">Register</button>
        </form>
      </div>

      <div className={styles.divider} id={moveDiv ? styles.moveDivToRight : styles.moveDivToLeft} onClick={() => setMoveDiv(!moveDiv)}/>
    </div>
  )
}
