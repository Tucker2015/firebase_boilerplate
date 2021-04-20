import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {



  return (

    <div className={styles.container}>


      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Kevin's Firebase Demo</h1>
        <h5>Please Login to Continue</h5>
        <p className="btn"><a href="/auth">Log in</a></p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
