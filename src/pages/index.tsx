import { useState } from 'react';
import { FaUserCircle, FaMotorcycle } from 'react-icons/fa';
import  { IoIosRestaurant } from 'react-icons/io';

import styles from './home.module.scss';

export default function Home() {
    const[whatMode, setWhatMode] = useState('delivery');

    return(
        <div className={styles.homeContainer}>
            <section>
                <nav className={styles.topNavigator}>
                    <h2>Logo Aqui</h2>

                    <div className={styles.goToAuth}>
                        <div>
                            <FaUserCircle color="#333" size={25} />
                            <span>Fazer login</span>
                        </div>
                        <div>
                            <FaUserCircle color="#333" size={25} />
                            <span>Criar conta</span>
                        </div>
                    </div>
                </nav>

                <div className={styles.bottomForm}>

                    <div className={styles.buttonArea}>
                        <button className={whatMode == 'delivery' ? styles.buttonClicked : undefined} type="button" onClick={() => setWhatMode('delivery')}>
                            <div>
                                <FaMotorcycle color={whatMode === 'delivery' ? '#fe705f' : '#808080'} size={25} />
                            </div>
                            <span>Delivery</span>
                        </button>

                        <button className={whatMode == 'restaurant' ? styles.buttonClicked : undefined} type="button" onClick={() => setWhatMode('restaurant')}>
                            <div>
                                <IoIosRestaurant color={whatMode === 'restaurant' ? '#fe705f' : '#808080'} size={25} />
                            </div>
                            <span>Retirada</span>
                        </button>
                    </div>

                    <div className={styles.formArea}>
                        
                    </div>

                </div>

             
            </section>
        </div>
    )
}