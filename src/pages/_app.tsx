import Cart from '../components/Cart'
import { CartContextProvider } from '../contexts/CartContext'
import { FormContextProvider } from '../contexts/FormContext'
import '../styles/globals.scss'
import styles from '../styles/app.module.scss';
import { UserContextProvider } from '../contexts/UserContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <FormContextProvider>

          <Component {...pageProps} />

        </FormContextProvider>
      </CartContextProvider>
    </UserContextProvider>
  )
}

export default MyApp
