import styles from '../../styles/Layout.module.css'
import React, { useEffect } from 'react'
import Navbar from '../Navigation/Navbar'

export default function Layout({ children }) {

    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Navbar />
            {children}
        </>
    )
}