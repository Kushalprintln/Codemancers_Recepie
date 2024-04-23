import React from "react";
import styles from './ButtonOne.module.css'

export default function ButtonOne({ children, border, fun }) {
    const btnbrd = {
        border: border ? '2px solid' : 'none',
    }

    function handleClick() {
        fun();
    }
    return (
        <button
            style={btnbrd}
            className={styles.btn_one}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}
