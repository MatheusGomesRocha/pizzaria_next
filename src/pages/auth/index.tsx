import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router'


import Form from '../../components/Form';
import { FormContext } from '../../contexts/FormContext';
import { UserContext } from '../../contexts/UserContext';
import styles from './styles.module.scss';

export default function Home() {
  const [moveDiv, setMoveDiv] = useState(false);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const {showForm} = useContext(FormContext);
  const {responseApi, responseType, userLoginId} = useContext(UserContext);

  useEffect(() => {
    if(userLoginId != 0) {    
      router.push('/');
    }

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className={styles.homeContainer}>
      {loading ? 
        <p>Carregando...</p>
      :
        <>
          {responseApi && 
            <div id={responseType === 'error' ? styles.error : styles.success} className={styles.customResponse}>
              <span>{responseType === 'error' ? 'ERROR:' : 'SUCCESS:'} {responseApi}</span>
            </div>
          }
            
          <Form register={true} moveDiv={moveDiv} setMoveDiv={setMoveDiv} />

          <Form login={true} moveDiv={moveDiv} setMoveDiv={setMoveDiv}/>

          <div className={styles.divider} id={showForm == 'login' ? styles.moveDivToLeft : styles.moveDivToRight} onClick={() => setMoveDiv(!moveDiv)}>
            <img src="/auth.svg" />
          </div>
        </>
      }
    </div>
  )
}
