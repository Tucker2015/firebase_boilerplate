import '../styles/global.css'
import 'video.js/dist/video-js.css'
import Layout from '../components/layouts/Layout'

function MyApp({ Component, pageProps }) {

  return <Layout><Component {...pageProps} /></Layout>

}

export default MyApp
