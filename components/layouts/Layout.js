import styles from '../../styles/Layout.module.css'
import { Navbar } from './Navbar';

const Layout = ({ children }) => {


    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout