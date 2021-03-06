import { useState } from 'react';
import { FaMotorcycle } from 'react-icons/fa';
import { IoIosRestaurant } from 'react-icons/io';
import { RiSendPlaneLine } from 'react-icons/ri';
import Image from 'next/image';

import styles from './home.module.scss';
import Header from '../components/Header';

export default function Home() {
    const[whatMode, setWhatMode] = useState('delivery');

    return(
        <div className={styles.homeContainer}>
            <section>
                <Header />

                <div className={styles.bottomForm}>

                    <div className={styles.buttonArea}>
                        <button className={whatMode === 'delivery' ? styles.buttonClicked : undefined} type="button" onClick={() => setWhatMode('delivery')}>
                            <div>
                                <FaMotorcycle color={whatMode === 'delivery' ? '#fe705f' : '#808080'} size={25} />
                            </div>
                            <span>Delivery</span>
                        </button>

                        <button className={whatMode === 'restaurant' ? styles.buttonClicked : undefined} type="button" onClick={() => setWhatMode('restaurant')}>
                            <div>
                                <IoIosRestaurant color={whatMode === 'restaurant' ? '#fe705f' : '#808080'} size={25} />
                            </div>
                            <span>Retirada</span>
                        </button>
                    </div>

                    <div className={styles.formArea}>
                        <h2>Deliverys sem contato</h2>
                        <p>Para garantir a segurança de nossos clientes e entregadores, todas as nossas entregas serão realizadas sem contato. <a href="">Leia Mais</a></p>

                        <span>{whatMode === 'delivery' ? 'Onde você quer a sua pizza?' : 'Digite sua localização para encontrar uma Pizza Hut nas proximidades'}</span>

                        <h3>Insira o seu CEP e número para encontrarmos a loja mais próxima de você.</h3>

                        <form>
                            <input type="text" placeholder={whatMode === 'delivery' ? 'CEP' : 'CEP, endereço ou cidade'} />
                            {whatMode === 'delivery' ? <input type="text" placeholder="Insiria o número da casa/prédio" /> : undefined}
                            <button type="submit">Buscar</button>

                            <div>
                                <RiSendPlaneLine color="#fe705f" size={20} />
                                <span>Usar minha localização atual?</span>
                            </div>
                        </form>
                    </div>

                </div>
            </section>

            <main>
                <section>
                    <div>
                        <div className={styles.line} />
                        <h2>Nossas ofertas mais populares</h2>
                        <div className={styles.line} />
                    </div>

                    <a href="/products" type="button">Ver Cardápio</a>

                    <Image
                        src="/pizza_background.jpg"
                        width={1200}
                        height={500}
                        objectFit="cover"
                    />
                </section>
            </main>

            <footer>
                <span>© Copyright by Pizza Hut</span>
                <span>Copy made with ❤️ by Matheus Gomes</span>
            </footer>
        </div>
    )
}