import React from "react";
import styles from './Container.module.css';


// Responsive container for making website responsive in 3 break points; 

export default function Container({children}){
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}