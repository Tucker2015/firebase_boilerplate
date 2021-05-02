import Link from 'next/link'
import Videojs from './Video.js';
import styles from '../styles/Home.module.css'
import Head from 'next/head';

const videoJsOptions = {
    autoplay: true,
    fluid: true,
    controls: true,
    sources: [
        {
            src: 'https://live.mixshare.co.uk:8443/live/0uADklw0Q/index.m3u8',
            type: 'application/x-mpegURL',
        },
    ],
};

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>PPV Events</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1> Live Video </h1>
                <div className={styles.videoBox}>
                    <Videojs {...videoJsOptions} />
                </div>

            </main>

        </div>


    )
}