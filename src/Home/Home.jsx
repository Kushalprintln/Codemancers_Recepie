import React from "react";
import styles from './Home.module.css';
import SearchSection from "../Search/SearchSection";
import Main from "../Main/Main";

export default function Home(){
    return (
        <div className={styles.home}>
            <SearchSection/>
            <Main/>
        </div>
    )
}