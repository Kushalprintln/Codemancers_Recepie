import React from "react";
import styles from './FoodCard.module.css';

export default function FoodCard({data}){
    return (
        <div className={styles.foodcard}>
            <img className={styles.food_img} src={data.recipe.image} alt="" />
            <section className={styles.food_info}>
                <h3>{data.recipe.label}</h3>
                <p>{data.recipe.dishType}</p>
            </section>
        </div>
    )
}