import { CartContextProvider } from '../contexts/CartContext'
import { FormContextProvider } from '../contexts/FormContext'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <FormContextProvider>
        <Component {...pageProps} />
      </FormContextProvider>
    </CartContextProvider>
  )
}

export default MyApp
