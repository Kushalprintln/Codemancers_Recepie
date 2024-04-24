import React from "react";
import styles from './ButtonOne.module.css'

// ButtonOne using for login, filter
// Inside filter using clear bordered button of same style

export default function ButtonOne({ children, border, fun }) {

    // border boolen for giver border to the button else no border
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
