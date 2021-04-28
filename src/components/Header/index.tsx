import { FaUserCircle } from 'react-icons/fa';

import styles from './styles.module.scss';

export default function Header({screen}: any) {
    return(
        <nav id={screen === 'products' ? styles.lessPadding : undefined} className={styles.topNavigator}>
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
    )
} 