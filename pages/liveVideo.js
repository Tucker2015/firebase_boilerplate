import Link from 'next/link'
import { useUser } from '../firebase/useUser'
import Videojs from '../components/Video/Video.js';
import styles from '../styles/VideoPlayer.module.css'
import Head from 'next/head';

const videoJsOptions = {
    autoplay: true,
    fluid: true,
    controls: true,
    playsinline: true,
    sources: [
        {
            src: 'https://live.mixshare.co.uk:8443/live/0uADklw0Q/index.m3u8',
            type: 'application/x-mpegURL',
        },
    ],
};

const LiveVideo = () => {

    const { user, logout } = useUser()

    if (user) {

        return (
            <div className={styles.container}>
                <Head>
                    <title>Live Event</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>


                <h1> Live Video </h1>
                <div className={styles.videoBox}>
                    <Videojs {...videoJsOptions} />
                </div>



            </div>


        )
    } else

        return (
            <>
                <h1>Please Sign In</h1>
                <p className="btn"><a href="/auth">Log in</a></p>
            </>
        )
}
export default LiveVideo