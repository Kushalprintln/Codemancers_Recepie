import React from "react";
import styles from './FilterIcon.module.css';
import Icons from "./Icons";

export default function FilterIcon({name}){
    return (
        <div className={styles.filtericon}>
            <div className={styles.icon_containter}>
                <Icons name={name}/>
            </div>
            <h5>{name}</h5>
        </div>
    )
}