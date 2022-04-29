import { NextPage } from 'next'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
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
  #__next {
    position: relative;
    min-height: 100vh;
  }
`

const theme = {
  colors: {
    lightOrange: '#FFD276',
  },
}

const MyApp: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <>
      <SEO path = {router.asPath}/>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
