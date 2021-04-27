import styles from './home.module.scss';
import Image from 'next/image';

export default function Home() {
    return(
        <div className={styles.homeContainer}>
            <section>
                <div className={styles.bottom}>
                    <div>
                        <h1>Pizza Hut</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus.</p>
                        <button type="button">Pedir agora</button>
                    </div>
                </div>
            </section>
        </div>
    )
}