import SEO from '../components/SEO'
import Navbar from '../components/Footer'
import Footer from '../components/Footer'
import { NextPage } from 'next'

type AppProps<P = any> = {
  Component: P
  pageProps: P
  router: P
}

const MyApp: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <>
      <SEO path = {router.asPath}/>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
