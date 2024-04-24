import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import styles from './Recepie.module.css';
import { LuChefHat } from "react-icons/lu";
import { BiCircleThreeQuarter } from "react-icons/bi";
import { FaChevronLeft } from "react-icons/fa";
import Ingredients from "../Cards/Ingredients";
import ButtonOne from "../Buttons/ButtonOne/ButtonOne";

// ON RECEPIE PAGE ONLY FEW THINGS ARE CHENAGING AS PE THE BACEND DATA 
// IMAGE
// NAME OF DISH
// DIET
// CATAGORY OF FOOD
// INGREDIENT'S LIST
// REST TEXT IS STATIC

export default function Recepie() {
    const location = useLocation();
    const nav = useNavigate();
    const data = location.state.recipe;

    function goback(){
        nav('/');
    }
    
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
                            <LuChefHat size={'1.25em'} /> 4 portions
                        </div>
                        <hr />
                        <div className={styles.time}>
                            <BiCircleThreeQuarter size={'1.25em'} />1h
                        </div>
                    </div>
                    <div className={styles.diet_cat}>
                        <p><span className={styles.label}>Diet :</span>{data.dietLabels}</p>
                        <p><span className={styles.label}>Category :</span>{data.dishType}</p>
                    </div>
                </div>
            </div>
            <div className={styles.about_section}>
                <div className={styles.about_left}>
                    <h1>About this recepie</h1>
                    <br />
                    <p>{data.label} is easy to make {data.dietLabels} {data.dishType}.</p>
                    <br />
                    <p>This easy peasy {data.label} is perfect for the evening craving, you know! when you want and you want it now but you also happen to be on {data.dietLabels} diet.</p>
                    <br />
                    <p>well no confilict here, this is easy, quick and .It pairs nicely with tec, coffee or a cup of milk.</p>
                    <br />
                    <p>you may as well want to go nuts and add some nuts in the batter:) I love to add walnuts or pecans.</p>
                    <br />
                    <p>For to go  kind of time, you can make them muffin size but then the baking temperature tt ime must be reduced to </p>
                    <br />
                    <h1>Instructions</h1>
                    <br />
                    <ol className={styles.instruction_list}>
                        <li>Prehear the oven to 170&deg;C.</li>
                        <br />
                        <li>In a bowl combine eggs, butter, yogurt, cream and erythritol then whisk them together until smooth.</li>
                        <br />
                        <li>Use a sifter to mix the flour, cocoa powder, baking powder and salt then fold them into batter using spatula.</li>
                        <br />
                        <li>Put the batter into the loaf pan.</li>
                        <br />
                        <li>bake at 170&deg;C for 40 min.</li>
                        <br />
                        <li>Let it cool down on a wire rack before enjoying it!</li>
                        <br />
                    </ol>
                    <br />
                    <h1>Note</h1>
                    <br />
                    <ul  className={styles.instruction_list}>
                        <li>Milk and eggs should be at room temperature.</li>
                        <br />
                        <li>Standard size loaf pan is around 24cm X 15cm with a capacity of 1.5-2liters.
                            (You can also use muffin tray)
                        </li>
                        <br />
                    </ul>
                    <ButtonOne fun={goback}> <FaChevronLeft /> All Recepies</ButtonOne>
                </div>
                <div className={styles.about_right}>
                    <Ingredients list={data.ingredientLines} />
                </div>
            </div>
        </div>
    )
}