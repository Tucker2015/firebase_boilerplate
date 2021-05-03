import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useUser } from '../firebase/useUser'

export default function Home() {

  const { user, logout } = useUser()

  if (user) {

    return (

      <div className={styles.container}>
        <Head>
          <title>PPV Events</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1>PPV Events</h1>
          <h1>Welcome Back {user.name}</h1>
        </main>
      </div>

    )
  } else

    return (
      <div className={styles.container}>
        <Head>
          <title>PPV Events</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1>PPV Events</h1>
          <h5>Please Sign In</h5>

        </main>
      </div >
    )
}
