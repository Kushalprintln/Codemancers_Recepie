import React from "react";
import styles from './SearchBar.module.css';
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar() {
    return (
        <div className={styles.search_bar}>
            <IoSearchOutline size={'1.2em'} color="#244cac"/>
            <form className={styles.search_form} action="">
                <input type="text"
                    className={styles.search_input}
                    name="search"
                    id="search"
                    placeholder="Search Term"
                />
            </form>
        </div>
    )
}