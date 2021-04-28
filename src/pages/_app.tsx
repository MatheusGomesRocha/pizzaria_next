import Cart from '../components/Cart'
import { CartContextProvider } from '../contexts/CartContext'
import { FormContextProvider } from '../contexts/FormContext'
import '../styles/globals.scss'
import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <FormContextProvider>
        <div className={styles.wrapper}>
          {/* <Cart /> */}

          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </FormContextProvider>
    </CartContextProvider>
  )
}

export default MyApp
