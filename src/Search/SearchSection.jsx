import React, { useState } from "react";
import styles from './SearchSection.module.css';
import SearchBar from "./SearchBar";
import ButtonOne from "../Buttons/ButtonOne/ButtonOne";
import Filter from "../Filter/Filter";

export default function SearchSection() {
    const [showFilter, setShowFilter] = useState(false);

    function toggleFilter() {
        setShowFilter(prev => !prev);
    }

    return (
        <>
            <section className={styles.search_section}>
                <SearchBar />
                <ButtonOne fun={toggleFilter}>
                    {!showFilter ? 'show filter' : 'hide filter'}
                </ButtonOne>
            </section>
            {showFilter && <Filter setShowFilter={setShowFilter} />}
        </>
    )
}