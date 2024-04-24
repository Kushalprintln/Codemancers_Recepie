import React from "react";
import styles from './Navbar.module.css';

// Importing logo image
import logo from '../Images/Recepielogo.jpg'
import ButtonOne from "../Buttons/ButtonOne/ButtonOne";
import ButtonTwo from "../Buttons/ButtonTwo/ButtonTwo";
import { Link } from "react-router-dom";
// adding check commnet in navbar

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.nav_left}>
                <Link to={''}>
                    <img className={styles.logo_img} src={logo} alt="" />
                </Link>
            </div>
            <div className={styles.nav_mid}>
                <Link to={''}>
                    <ButtonTwo text={'home'} />
                </Link>
                <Link to={'about'}>
                    <ButtonTwo text={'about'} />
                </Link>
            </div>
            <div className={styles.nav_right}>
                <ButtonOne>log in</ButtonOne>
            </div>
        </div>
    )
}