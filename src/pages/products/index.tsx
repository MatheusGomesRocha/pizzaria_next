import { useState } from 'react';
import Cart from '../../components/Cart';
import styles from './styles.module.scss';

export default function Products() {
    const [category, setCategory] = useState('pizza');

    return(
        <div className={styles.productsContainer}>
            <Cart />
            
            <div className={styles.header} />

            <ul>
                <li className={category === 'promotion' ? styles.isClicked : undefined} onClick={() => setCategory('promotion')}>Promoções</li>
                <li className={category === 'pizza' ? styles.isClicked : undefined} onClick={() => setCategory('pizza')}>Pizzas</li>
                <li className={category === 'entrance' ? styles.isClicked : undefined} onClick={() => setCategory('entrance')}>Entradas</li>
                <li className={category === 'dessert' ? styles.isClicked : undefined} onClick={() => setCategory('dessert')}>Sobremesas</li>
                <li className={category === 'drink' ? styles.isClicked : undefined} onClick={() => setCategory('drink')}>Bebidas</li>
            </ul>
        </div>  
    )
}