import React from "react";
import styles from './Navbar.module.css';

// Importing logo image
import logo from '../Images/Recepielogo.jpg'
import ButtonOne from "../Buttons/ButtonOne/ButtonOne";
import ButtonTwo from "../Buttons/ButtonTwo/ButtonTwo";

export default function Navbar(){
    return (
        <div className={styles.navbar}>
            <div className={styles.nav_left}>
                <img className={styles.logo_img} src={logo} alt="" />
            </div>
            <div className={styles.nav_mid}>
                <ButtonTwo text={'home'}/>
                <ButtonTwo text={'about'}/>
            </div>
            <div className={styles.nav_right}>
                <ButtonOne>log in</ButtonOne>
            </div>
        </div>
    )
}