import '../styles/globals.css'
// import SEO from '../components/seo'
// import Navbar from '../components/navbar'
// import Footer from '../components/footer'
import { NextPage } from 'next'

type AppProps<P = any> = {
  Component: P
  pageProps: P
  router: P
}

const MyApp: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  return (
    // <SEO path = {router.asPath}/>
    // <Navbar />
    <Component {...pageProps} />
    // <Footer />
  )
}

export default MyApp
