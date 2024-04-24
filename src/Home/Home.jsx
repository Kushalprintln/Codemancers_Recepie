import React, { useEffect, useState } from "react";
import styles from './Home.module.css';
import SearchSection from "../Search/SearchSection";
import Main from "../Main/Main";
import SearchContext from "../Context/SearchContext";

export default function Home() {

    const defaultAPI = `https://api.edamam.com/api/recipes/v2?type=public&q=cakes&app_id=f25e046e&app_key=%2036e244e7157b2309aa666e74cdded22f%09`;

    const [search, setSearch] = useState("");
    const [FoodData, setFoodData] = useState([]);
    const [dataApi,setDataApi] = useState(defaultAPI);
   
// getData funtion for getting the data from the backed
    async function getdata() {
        let resp = await fetch(dataApi);
        let data = await resp.json();
        // console.log(data);
        setFoodData(data.hits);
    }

// At the time of mounting getting data and applying scrool even listener;
    useEffect(() => {
        getdata();
        window.addEventListener('scroll', handleScroll); 
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

// handleScroll for infinite scroll functionalltyl
// HAVE NOT APPIED THIS FUNCTION 
// FOR FUTURE USE;
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollY + windowHeight >= documentHeight-1) {
            // console.log('reached end ')
        }
    }

// getting data on the change of api;
//  FILTERS TO BE ADDED IN THE DEPENDENCY ARRAY;

    useEffect(()=>{
        getdata();
    },[dataApi])

    useEffect(() => {
        // using debounce for input search;
        if (search.length >= 3) {
            debounce(()=>{
                setDataApi(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=f25e046e&app_key=%2036e244e7157b2309aa666e74cdded22f%09`);
            }, 1000);
        } else if (search.length === 0) {
            debounce(()=>{
                setDataApi(defaultAPI);
            }, 1000);
        }
    }, [search])

    // ---------CUSTOME DEBOUNE FOR SEARHING-------------
    let prevId;
    function debounce(fun, delay) {
        if (prevId) {
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
                <SearchSection  />
                <Main data={FoodData} />
            </SearchContext.Provider>
        </div>
    )
}