import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {



  return (

    <div className={styles.container}>
      <Head>
        <title>PPV Events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>PPV Events</h1>
        <h5>Please Login to Continue</h5>
        <p className="btn"><a href="/auth">Log in</a></p>
      </main>

    </div>
  )
}
