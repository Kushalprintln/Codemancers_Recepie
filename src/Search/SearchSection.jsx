import React, { useContext, useState } from "react";
import styles from './SearchSection.module.css';
import SearchBar from "./SearchBar";
import ButtonOne from "../Buttons/ButtonOne/ButtonOne";
import Filter from "../Filter/Filter";
import SearchContext from "../Context/SearchContext";

export default function SearchSection() {

    const [showFilter, setShowFilter] = useState(false);
    const [exit,setExit] = useState(false);

    function toggleFilter() {
        if(!showFilter){
            setShowFilter(true);
            setExit(false);
        }else{
            setExit(true);
            setTimeout(() => {
                setShowFilter(false);
            }, 500);
        }
    }

    return (
        <>
            <section className={styles.search_section}>
                <SearchBar />
                <ButtonOne fun={toggleFilter}>
                    {!showFilter ? 'show filter' : 'hide filter'}
                </ButtonOne>
            </section>
            {showFilter && <Filter toggle={toggleFilter} exit={exit} setexit={setExit}/>}
        </>
    )
}