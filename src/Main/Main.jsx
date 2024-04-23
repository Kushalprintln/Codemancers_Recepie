import React from "react";
import styles from './Main.module.css'
import FoodCard from "../Cards/FoodCard";
import loader from '../Images/loader.gif'
import { v4 as uuidv4 } from 'uuid';

export default function Main({data}){
    return (
        <div className={data.length !==0 ?styles.main :styles.main_blank}>
            {data.length !==0 ? data.map((ele)=>{
                let id = uuidv4();
                return <FoodCard data={ele} key={id}/>
            }):
            <img src={loader} alt="" />
        }

        </div>
    )
}