import React from "react";
import styles from './ButtonTwo.module.css';

// Using Button Two for home and About;

export default function ButtonTwo({text}){
    return (
        <button className={styles.btn_two}>
            {text}
        </button>
    )
}