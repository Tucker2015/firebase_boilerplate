<<<<<<< HEAD
import styles from '../../styles/Layout.module.css'
import { Navbar } from './Navbar';
=======
import React, { useEffect } from 'react'
import Navbar from '../Navigation/Navbar'

export default function Layout({ children }) {
>>>>>>> testing

    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Navbar />
            {children}
        </>
    )
}