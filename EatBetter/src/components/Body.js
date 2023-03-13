import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));

    return filterData;
};


const Body = () => {

    const [allRestaurants, setAllRestuarants] = useState([]);
    const [filteredRestaurants, setFilteredRestuarants] = useState([]);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestuarants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestuarants(json?.data?.cards[2]?.data?.data?.cards);

    }

    //if allres is empty don't render
    if (!allRestaurants) return null;    //early return

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="serach"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button
                    className="search-button"
                    onClick={() => {
                        const data = filterData(searchText, allRestaurants); //getting fileterd data
                        setFilteredRestuarants(data);                            //updating data
                    }}
                >
                    Search
                </button>
            </div>



            {allRestaurants?.length === 0 ? (<Shimmer />) : (
                <div className="restaurant-list">
                    {filteredRestaurants.map((restaurant) => {
                        return (
                            <Link to={"/restaurant/" + restaurant.data.id}  key = {restaurant.data.id }>
                            <RestaurantCard {...restaurant.data} />
                            </Link>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Body;