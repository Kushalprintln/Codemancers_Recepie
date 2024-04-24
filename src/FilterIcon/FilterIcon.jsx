import React, { useContext } from "react";
import styles from './FilterIcon.module.css';
import Icons from "./Icons";
import SearchContext from "../Context/SearchContext";

export default function FilterIcon({name,closeFun}){
    const search_context = useContext(SearchContext);

    function handleClick(){
        search_context.searchRecepie[1](name);
        closeFun();
    }

    return (
        <div className={styles.filtericon} onClick={handleClick}>
            <div className={styles.icon_containter}>
                <Icons name={name}/>
            </div>
            <h5>{name}</h5>
        </div>
    )
}