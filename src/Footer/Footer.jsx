import React from "react";
import styles from './Footer.module.css';
import { FaHeart } from "react-icons/fa";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p>Made with vue.js, Fauna DB and <FaHeart size={'0.8em'} /> by ttntm</p>
            <p>Created by Kushal Sonkamble</p>
            <p className={styles.small}>&copy; Recepit 2024</p>
        </div>
    )
}