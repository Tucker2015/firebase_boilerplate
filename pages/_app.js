<<<<<<< HEAD
import '../styles/main.css'
import '../styles/globals.css'
=======
import '../styles/global.css'
import 'video.js/dist/video-js.css'
>>>>>>> testing
import Layout from '../components/layouts/Layout'

function MyApp({ Component, pageProps }) {

  return <Layout><Component {...pageProps} /></Layout>

}

export default MyApp
