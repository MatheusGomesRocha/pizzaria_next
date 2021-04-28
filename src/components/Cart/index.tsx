import styles from './styles.module.scss';

export default function Cart() {
    return(
        <div className={styles.cartContainer}>
            <section>
                <h1>Carrinho</h1>

                <p>Seu carrinho está vazio</p>

                <div>
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