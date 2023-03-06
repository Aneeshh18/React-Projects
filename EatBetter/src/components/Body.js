import { restaurantList } from "../config";
import { useState } from "react";
import RestaurantCard  from "./RestaurantCard";


function filterData(searchText, restaurants) {
   const filterData = restaurants.filter((restaurant) =>  restaurant.data.name.includes(searchText));

   return filterData;
};


const Body = () => {

    const [restaurants, setRestuarants] = useState(restaurantList);
    const [searchText, setSearchText] = useState();

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
                onClick = {() => {
                    const data = filterData(searchText, restaurants);
                    setRestuarants(data);
                }}
                >    
                    Search
                </button> 
            </div>

            <div className="restaurant-list">
                {restaurants.map((restaurant) => {
                    return (
                        <RestaurantCard {...restaurant.data} key={restaurant.data.id}  />
                    );
                })}
            </div>
        </>
    );
};

export default Body;