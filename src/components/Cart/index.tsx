import Image from 'next/image';
import { BsFillTrashFill } from 'react-icons/bs';

import styles from './styles.module.scss';

export default function Cart() {
    return(
        <div className={styles.cartContainer}>
            <section>
                <h1>Carrinho</h1>

                {/* <p>Seu carrinho está vazio</p> */}

                <div className={styles.hasProducts}>
                    <div className={styles.arrayItem}>
                        <Image 
                            src="/pizza_background.jpg"
                            width={80}
                            height={80}
                            objectFit="cover"
                        />

                        <div>
                            <h2>Mussarela</h2>
                            <span>Tamanho: Média</span>
                            <span>R$ 14.47</span>
                        </div>

                        <section>
                            <button type="button">
                                <BsFillTrashFill color={"#fff"} size={25} />
                            </button>
                        </section>
                    </div>
                </div>

                <div className={styles.deliveryBill}>
                    <span>Taxa de entrega</span>
                    <span>R$ 0,00</span>
                </div>

                <div className={styles.cupomCode}>
                    <span>Tem um código de cupom?</span>
                </div>
            </section>


            <div className={styles.buttonArea}>
                <button type="button">Finalizar pedido</button>
            </div>

        </div>
    )
}