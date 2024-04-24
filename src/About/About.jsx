import React from "react";
import styles from './About.module.css';

// About page having the static content of the  website;

export default function About(){
    return (
        <div className={styles.about}>
            <h1>About</h1>
            <br />
            <p>Welcome to <strong>Receptor</strong>, where cooking meets creativity! We're passionate about sharing delicious recipes from around the globe, catering to every palate and skill level. Whether you're a seasoned chef or a kitchen newbie, our collection of recipes offers something for everyone.</p>
            <br />
            <p>At <strong>Receptor</strong>, we believe that cooking is not just about following instructions, but about exploring flavors, experimenting with ingredients, and creating memorable meals. Our goal is to inspire and empower you to unleash your culinary imagination and embark on a flavorful journey with every dish you prepare.</p>
            <br />
            <p>What sets us apart is our commitment to providing detailed recipes accompanied by clear instructions and beautiful imagery. Each recipe is meticulously crafted to ensure success in your kitchen, with step-by-step guidance to help you achieve perfect results every time. From classic comfort foods to innovative twists on traditional favorites, our diverse selection of recipes covers breakfast, lunch, dinner, snacks, and everything in between.</p>
            <br />
            <p>In addition to our extensive recipe collection, we also offer valuable tips, techniques, and kitchen hacks to enhance your cooking experience. Whether you're looking for quick and easy weeknight dinners, elegant dinner party dishes, or indulgent desserts, we've got you covered.</p>
            <br />
            <p>Join us on a culinary adventure as we explore the world of flavors, one recipe at a time. Whether you're cooking for yourself, your family, or entertaining guests, let [Your Website Name] be your trusted companion in the kitchen. Happy cooking!</p>
            <br />
            <h2>More Info</h2>
            <br />
            <p>At <strong>Receptor</strong>, we're more than just a recipe website—we're a community of food enthusiasts dedicated to celebrating the joy of cooking and sharing delicious meals with loved ones. Join us in our culinary journey, and let's create unforgettable dining experiences together.</p>
        </div>
    )
}