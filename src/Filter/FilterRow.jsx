import React from "react";
import styles from './FilterRow.module.css';

export default function FilterRow({children,heading}){
    return (
        <div className={styles.filter_row}>
            <h3 className={styles.row_heading}>{heading}</h3>
            <div className={styles.icon_container}>
                {children}
            </div>
        </div>
    )
}