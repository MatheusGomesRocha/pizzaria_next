import { useState } from 'react';
import Form from '../components/Form';

import styles from './home.module.scss';

export default function Home() {
  const [moveDiv, setMoveDiv] = useState(false);

  return (
    <div className={styles.homeContainer}>

      <Form register={true} />

      <div className={styles.divider} id={moveDiv ? styles.moveDivToRight : styles.moveDivToLeft} onClick={() => setMoveDiv(!moveDiv)}/>
    </div>
  )
}
