import styles from '../../styles/Layout.module.css'


const Layout = ({ children }) => {


    return (
        <>
            <header className={styles.container}>
                <h3 className={styles.bannerHeader}>Banner</h3>
                <ul className={styles.list}>
                    <li>Test</li>
                    <li>Home</li>
                    <li>Test</li>
                    <li>Test</li>
                </ul>
            </header>
            {children}
        </>
    )
}

export default Layout