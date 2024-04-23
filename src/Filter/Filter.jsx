import React from "react";
import styles from './Filter.module.css';
import { RxCross1 } from "react-icons/rx";
import ButtonOne from "../Buttons/ButtonOne/ButtonOne";
import FilterRow from "./FilterRow";
import FilterIcon from "../FilterIcon/FilterIcon";

export default function Filter({ setShowFilter }) {

    const close = () => {
        setShowFilter(false);
    }

    return (
        <div className={styles.filter}>
            <span className={styles.close_filter} onClick={close}>
                <RxCross1 strokeWidth={2} color="#244cac" />
            </span>
            <div className={styles.filter_heading}>
                <h3>Filter Section</h3>
            </div>
            <FilterRow heading={'category'}>
                <FilterIcon name={'bread'}/>
                <FilterIcon name={'salad'}/>
                <FilterIcon name={'dessert'}/>
                <FilterIcon name={'drink'}/>
                <FilterIcon name={'main'}/>
                <FilterIcon name={'snacks'}/>
                <FilterIcon name={'soup'}/>
                <FilterIcon name={'pastry'}/>
            </FilterRow>
            <FilterRow heading={'diet'}>
                <FilterIcon name={'vegan'}/>
                <FilterIcon name={'vegetarian'}/>
            </FilterRow>
            <div className={styles.button_section}>
                <ButtonOne border={true}>clear filter</ButtonOne>
                <ButtonOne border={true} fun={close}>close</ButtonOne>
            </div>
        </div>
    )
}