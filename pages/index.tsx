import { useState } from 'react';
import styles from './home.module.scss';

export default function Home() {
  const [moveDiv, setMoveDiv] = useState(false);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.divider} id={moveDiv ? styles.moveDivToRight : styles.moveDivToLeft} onClick={() => setMoveDiv(!moveDiv)}/>
      <form></form>
    </div>
  )
}
