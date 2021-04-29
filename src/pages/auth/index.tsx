import { useContext, useState } from 'react';
import Form from '../../components/Form';
import { FormContext } from '../../contexts/FormContext';
import { UserContext } from '../../contexts/UserContext';

import styles from './styles.module.scss';

export default function Home() {
  const [moveDiv, setMoveDiv] = useState(false);

  const {showForm} = useContext(FormContext);
  const {responseApi, responseType} = useContext(UserContext);

  return (
    <div className={styles.homeContainer}>
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
    </div>
  )
}
