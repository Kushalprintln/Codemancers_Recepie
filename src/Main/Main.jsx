import React from "react";
import styles from './Main.module.css'
import FoodCard from "../Cards/FoodCard";
import { v4 as uuidv4 } from 'uuid';

export default function Main({data}){
    return (
        <div className={styles.main}>
            {data.map((ele)=>{
                let id = uuidv4();
                return <FoodCard data={ele} key={id}/>
            })}
        </div>
    )
}