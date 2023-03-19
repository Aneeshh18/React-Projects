import { useState, useEffect } from "react";
import {
    swiggy_menu_api_url, IMG_CDN_URL, ITEM_IMG_CDN_URL,
} from "../config";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);

    
    useEffect(() => {
        getRestarurantInfo();
    }, []);

    async function getRestarurantInfo() {
        const data = await fetch(
         swiggy_menu_api_url + resId
        );
        const json = await data.json(); 
        setRestaurant(json?.data);
    }

    return restaurant;
};

export default useRestaurant;
