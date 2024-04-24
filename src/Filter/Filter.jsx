import React, { useContext, useState } from "react";
import styles from './Filter.module.css';
import { RxCross1 } from "react-icons/rx";
import ButtonOne from "../Buttons/ButtonOne/ButtonOne";
import FilterRow from "./FilterRow";
import FilterIcon from "../FilterIcon/FilterIcon";
import SearchContext from "../Context/SearchContext";

export default function Filter({ toggle, exit }) {

    const search_context = useContext(SearchContext);

    // For Closing of filter check SearchSection component;s
    function handleClose() {
        toggle();
    }

    function clearFilter(){
        search_context.searchRecepie[1]('');
        toggle();
    }

    return (
        <div className={!exit ? styles.filter : styles.exit}>
            <span className={styles.close_filter} onClick={handleClose}>
                <RxCross1 strokeWidth={2} color="#244cac" />
            </span>
            <div className={styles.filter_heading}>
                <h3>Filter Section</h3>
            </div>
            <FilterRow heading={'category'}>
                <FilterIcon name={'bread'} closeFun={handleClose} />
                <FilterIcon name={'salad'} closeFun={handleClose} />
                <FilterIcon name={'dessert'} closeFun={handleClose} />
                <FilterIcon name={'drink'} closeFun={handleClose} />
                <FilterIcon name={'main'} closeFun={handleClose} />
                <FilterIcon name={'snacks'} closeFun={handleClose} />
                <FilterIcon name={'soup'} closeFun={handleClose} />
                <FilterIcon name={'pastry'} closeFun={handleClose} />
            </FilterRow>
            <FilterRow heading={'diet'}>
                <FilterIcon name={'vegan'} closeFun={handleClose}/>
                <FilterIcon name={'vegetarian'} closeFun={handleClose}/>
            </FilterRow>
            <div className={styles.button_section}>
                <ButtonOne border={true} fun={clearFilter}>clear filter</ButtonOne>
                <ButtonOne border={true} fun={handleClose}>close</ButtonOne>
            </div>
        </div>
    )
}