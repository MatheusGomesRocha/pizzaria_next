import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiFillCaretDown } from 'react-icons/ai';

import Cart from '../../components/Cart';
import Header from '../../components/Header';
import styles from './styles.module.scss';
import { GetStaticProps } from 'next';
import { api } from '../../services/api';

type Product = {
    id: string;
    img: string;
    name: string;
    description: string;
    price: string;
    time: string;
}

type Products = {
    products: Product[];
}

export default function Products({products}: Products) {
    const [category, setCategory] = useState('pizza');

    const array = [
        {id: 1, img: '/pizza_background.jpg', name: 'Mussarela', description: 'Parmesão, exclusiva mussarela Pizza Hut, rodelas de tomates, orégano e alho.', price: 29.40},
        {id: 2, img: '/pizza_background.jpg', name: 'Mussarela', description: 'Mussarela Pizza Hut, tiras de requeijão e alho.', price: 14.90},
        {id: 3, img: '/pizza_background.jpg', name: 'Mussarela', description: 'Muitas fatias de pepperoni servidas sobre uma camada de mussarela e cobertas por tiras de requeijão.', price: 22.00},
        {id: 4, img: '/pizza_background.jpg', name: 'Mussarela', description: 'Deliciosas fatias de calabresa acompanhadas de cebola, mussarela especial Pizza Hut e tiras de requeijão.', price: 18.50},
        {id: 5, img: '/pizza_background.jpg', name: 'Mussarela', description: 'Queijo mussarela servido sobre molho de tomates especial Pizza Hut.', price: 19.70},
        {id: 6, img: '/pizza_background.jpg', name: 'Mussarela', description: 'Calabresa acompanhada de cebola, azeitonas verdes e mussarela', price: 12.50},
        {id: 7, img: '/pizza_background.jpg', name: 'Mussarela', description: 'Exclusiva mussarela Pizza Hut coberta com tomates fatiados com um toque de manjericão', price: 35.90},
        {id: 8, img: '/pizza_background.jpg', name: 'Mussarela', description: 'Muitas fatias de pepperoni (salame especial condimentado com páprica) servidas sobre mussarela e de molho de tomate.', price: 25.40},
        {id: 9, img: '/pizza_background.jpg', name: 'Mussarela', description: 'Frango desfiado, exclusiva mussarela Pizza Hut e requeijão cremoso', price: 29.90},
        {id: 10, img: '/pizza_background.jpg', name: 'Mussarela', description: 'Molho de tomate, frango desfiado temperado, milhos selecionados, tiras de requeijão e a exclusiva mussarela Pizza Hut.', price: 32.40},
    ];

    return(
        <div className={styles.productsContainer}>
            <Cart />
            

            <Header screen="products" />

                <ul>
                    <li className={category === 'promotion' ? styles.isClicked : undefined} onClick={() => setCategory('promotion')}>Promoções</li>
                    <li className={category === 'pizza' ? styles.isClicked : undefined} onClick={() => setCategory('pizza')}>Pizzas</li>
                    <li className={category === 'entrance' ? styles.isClicked : undefined} onClick={() => setCategory('entrance')}>Entradas</li>
                    <li className={category === 'dessert' ? styles.isClicked : undefined} onClick={() => setCategory('dessert')}>Sobremesas</li>
                    <li className={category === 'drink' ? styles.isClicked : undefined} onClick={() => setCategory('drink')}>Bebidas</li>
                </ul>

                <main className={styles.main}>
                    <div className={styles.arrayContainer}>
                        {products.map(product => {
                            return(
                                <div key={product.id}>
                                    <img
                                        src={`http://localhost:8000/storage/media/images/${product.img}`}
                                    />
                                    <section>
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                    </section>

                                    <form>
                                        <span>Escolha o tamanho</span>
                                        <div className={styles.customSelect}>
                                            <span>Pequena (4 pedaços)</span>
                                            <AiFillCaretDown size={16} color="#333" />

                                            <select>
                                                <option value="S">Pequena (4 pedaços)</option>
                                                <option value="M">Medium (6 pedaços)</option>
                                                <option value="L">Large (8 pedaços)</option>
                                            </select>
                                        </div>

                                        <button type="submit">
                                            <span>Adicionar</span>
                                            <span>R$ {product.price}</span>
                                        </button>
                                    </form>
                                </div>
                            )
                        })}
                    </div>
                </main>
        </div>  
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('products');
    
    const result = await data.result;

    const products = result.map((product: Product) => {
      return {
        id: product.id,
        img: product.img,
        name: product.name,
        description: product.description,
        price: product.price,
        time: product.time
      }
    })

    return {
      props: {
        products,
      },
      revalidate: 60 * 60 * 24,     // 24 horas
    }
  }