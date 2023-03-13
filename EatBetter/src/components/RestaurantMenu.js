import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {
    swiggy_menu_api_url, IMG_CDN_URL, ITEM_IMG_CDN_URL,
} from "../config";
import Shimmer from "./Shimmer";



const RestaurantMenu = () => {
    const { resId } = useParams(); //Reading Dyanamic URL (call useParams and get value of restaurant id using object destructuring)
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
        console.log(json.data);
    }


    return !restaurant ? (<Shimmer />) : (
        <div className="restaurant-menu">
            <div className="restaurant-summary">
                <img className="restaurant-img" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt={restaurant?.name} />
                <div className="restaurant-summary-details">
                    <h2 className="restaurant-title"> {restaurant?.name}</h2>
                    <p className="restaurant-tags">{restaurant?.cuisines.join(",")}</p>
                    <div className="restaurant-details">
                        <div className="restaurant-rating" style={(restaurant?.avgRating) < 4 ? { backgroundColor: "var(--light-red)" } : (restaurant.avgRating) === "--" ? { backgroundColor: "black", color: "white" } : { color: "blue" }}>
                            <span>{restaurant?.costForTwoMsg}</span>
                            <div>{restaurant?.sla.slaString}</div>
                        </div>
                    </div>
                    <h1> Restaurant Id: {resId} </h1>
                </div>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurant?.menu?.items).map((item) => (
                        <li key={item.id}> {item?.name} </li>
                    ))}
                </ul>
            </div>
        </div>

    );
};

export default RestaurantMenu;

