import styles from './home.module.scss';

export default function Home() {
    return(
        <div className={styles.homeContainer}>
            <section>
                <nav className={styles.topNavigator}>
                    <span>Logo Aqui</span>

                    <div>
                        <a href="#">Home</a>
                        <a href="#">Products</a>
                        <a href="#">Contact</a>
                    </div>
                </nav>

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