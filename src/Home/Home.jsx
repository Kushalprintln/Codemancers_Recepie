import React, { useEffect, useState } from "react";
import styles from './Home.module.css';
import SearchSection from "../Search/SearchSection";
import Main from "../Main/Main";
import SearchContext from "../Context/SearchContext";

export default function Home() {

    const [search, setSearch] = useState("");
    const [FoodData, setFoodData] = useState([]);


    async function getdata() {
        const searchUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${search ? search :'curd'}&app_id=f25e046e&app_key=%2036e244e7157b2309aa666e74cdded22f%09`
        let resp = await fetch(searchUrl);
        let data = await resp.json();
        // console.log(data.hits)
        setFoodData(data.hits);
    }

    useEffect(() => {
        getdata();
    }, [])

    useEffect(() => {
        if(search.length >= 3){
            debounce(getdata,1000);
        }else if(search.length === 0){
            getdata();
        }
    }, [search])

    let prevId;
    function debounce(fun,delay){
        if(prevId){
            clearTimeout(prevId);
        }
        prevId = setTimeout(() => {
            fun();
        }, delay);
    }

    return (
        <div className={styles.home}>
            <SearchContext.Provider
                value={{
                    searchRecepie: [search, setSearch]
                }}>
                <SearchSection />
                <Main data={FoodData} />
            </SearchContext.Provider>
        </div>
    )
}