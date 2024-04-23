import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import styles from './Recepie.module.css';
import { LuChefHat } from "react-icons/lu";
import { BiCircleThreeQuarter } from "react-icons/bi";

export default function Recepie() {
    const location = useLocation();
    console.log(location.state)
    const data = location.state.recipe;
    return (
        <div className={styles.about}>
            <div className={styles.info_section}>
                <div className={styles.poster}>
                    <img src={data.image} alt="" />
                </div>
                <div className={styles.info}>
                    <h2>{data.label}</h2>
                    <p>{data.dishType}</p>
                    <div className={styles.portion_time}>
                        <div className={styles.portion}>
                            <LuChefHat size={'1.25em'}/> 4 portions
                        </div>
                        <hr />
                        <div className={styles.time}>
                            <BiCircleThreeQuarter size={'1.25em'}/>1h
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}