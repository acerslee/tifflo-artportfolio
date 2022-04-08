import { NextPage } from 'next'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { createGlobalStyle } from 'styled-components'
import '../custom.scss'

type AppProps<P = any> = {
  Component: P
  pageProps: P
  router: P
}

const GlobalStyle = createGlobalStyle`
  body: {
    margin: 0;
    padding: 0;
  }
  * {
    font-family: Arial;
  }
`

const MyApp: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <>
      <SEO path = {router.asPath}/>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
