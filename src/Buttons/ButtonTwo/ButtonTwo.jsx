import React from "react";
import styles from './ButtonTwo.module.css';

export default function ButtonTwo({text}){
    return (
        <button className={styles.btn_two}>
            {text}
        </button>
    )
}