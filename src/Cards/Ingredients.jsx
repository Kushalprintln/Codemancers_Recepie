import React from "react";
import styles from './Ingredients.module.css';
import { v4 as uuidv4 } from 'uuid';

// Ingredients Cards for displaying all the ingredienst list 
// using In Recipie page;

export default function Ingredients({list}){
    return (
        <div className={styles.ingredients}>
            <h2>Ingredients</h2>
            <br />
            <ul className={styles.ingredients_list}>
                {list.map((ele)=>{
                    let id = uuidv4();
                    return <li key={id}>{ele}</li>
                })}
            </ul>
        </div>
    )
}