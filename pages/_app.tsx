import { FormContextProvider } from '../contexts/FormContext'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <FormContextProvider>
      <Component {...pageProps} />
    </FormContextProvider>
  )
}

export default MyApp
