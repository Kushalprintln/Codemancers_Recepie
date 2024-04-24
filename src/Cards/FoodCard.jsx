import React from "react";
import styles from './FoodCard.module.css';
import { Link } from "react-router-dom";

// FoodCard Component for displaying all the food items

export default function FoodCard({ data }) {
    return (
        <div className={styles.foodcard}>
            <Link to={'recepie'} state={data} style={{ textDecoration: 'none' }}>
                <img className={styles.food_img} src={data.recipe.image} alt="" />
                <section className={styles.food_info}>
                    <h3>{data.recipe.label}</h3>
                    <p>{data.recipe.dishType}</p>
                </section>
            </Link>
        </div>
    )
}