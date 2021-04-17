import SEO from '../components/SEO'
import '../styles/globals.css'

function MyApp({Component, pageProps}) {
  return (
    <>
      <SEO />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
