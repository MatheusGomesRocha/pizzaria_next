import { useContext, useState } from 'react';
import Form from '../components/Form';
import { FormContext } from '../contexts/FormContext';

import styles from './home.module.scss';

export default function Home() {
  const [moveDiv, setMoveDiv] = useState(false);

  const {showForm} = useContext(FormContext);

  return (
    <div className={styles.homeContainer}>

      <Form register={true} moveDiv={moveDiv} setMoveDiv={setMoveDiv} />

      <Form login={true} moveDiv={moveDiv} setMoveDiv={setMoveDiv}/>

      <div className={styles.divider} id={showForm == 'login' ? styles.moveDivToLeft : styles.moveDivToRight} onClick={() => setMoveDiv(!moveDiv)}/>
    </div>
  )
}
