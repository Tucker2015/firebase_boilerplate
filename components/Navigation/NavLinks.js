import React from 'react';
import classes from './NavBar.module.css'
import Link from 'next/link'
import { useUser } from '../../firebase/useUser'

const NavLinks = (props) => {

    const { user, logout } = useUser()

    if (user) {
        return (
            <ul>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link href="/liveVideo">
                        <a>Live Video</a>
                    </Link>
                </li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link href="/profile">
                        <a>Profile</a>
                    </Link>
                </li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link href="/">
                        <a onClick={() => logout()}>Logout</a>
                    </Link>
                </li>
            </ul>
        );
    } else
        return (
            <ul>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                {/* <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link href="/auth">
                        <a>Live Video</a>
                    </Link>
                </li> */}
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link href="/auth">
                        <a>Login</a>
                    </Link>
                </li>
            </ul>
        );
}

export default NavLinks;