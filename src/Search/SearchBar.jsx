import React, { useContext } from "react";
import styles from './SearchBar.module.css';
import { IoSearchOutline } from "react-icons/io5";
import SearchContext from "../Context/SearchContext";

export default function SearchBar() {
    const search_context = useContext(SearchContext);
    console.log(search_context)

    function handleInput(e) {
        search_context.searchRecepie[1](e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <div className={styles.search_bar}>
            <IoSearchOutline size={'1.2em'} color="#244cac" />
            <form className={styles.search_form}
                action=""
                onSubmit={handleSubmit}
            >
                <input type="text"
                    className={styles.search_input}
                    name="search"
                    id="search"
                    placeholder="Search Term"
                    value={search_context.searchRecepie[0]}
                    onChange={handleInput}
                />
            </form>
        </div>
    )
}