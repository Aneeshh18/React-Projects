import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
// import {_.find} from

const RestaurantMenu = () => {
  const { resId } = useParams(); //Reading Dyanamic URL (call useParams and get value of restaurant id using object destructuring)

  const restaurant = useRestaurant(resId);


  // if (!restaurant) {
  //   return <div>Loading</div>;
  // }

  // const data = restaurant.cards[2].groupedCard.cardGroupMap.REGULAR;
  // return (
  //   <div className="sss">
  //     {data.cards.map((cardData) => {
  //       return (
  //         <div>
  //           <h1>Menu</h1>
  //           {cardData.card.card["@type"] ===
  //           "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //             ? cardData.card.card.itemCards.map((dish) => {
  //               return <p>{dish.card.info.name}</p>
  //               })
  //             : null}
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  // return !restaurant.cards ? (<Shimmer />) : (
  //     <div className="restaurant-menu">
  //         <div className="restaurant-summary">
  //             <img className="restaurant-img" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt={restaurant?.name} />
  //             <div className="restaurant-summary-details">
  //                 <h2 className="restaurant-title"> {restaurant?.name}</h2>
  //                 <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
  //                 <div className="restaurant-details">
  //                     <div className="restaurant-rating" style={(restaurant?.avgRating) < 4 ? { backgroundColor: "var(--light-red)" } : (restaurant.avgRating) === "--" ? { backgroundColor: "black", color: "white" } : { color: "blue" }}>
  //                         <span>{restaurant?.costForTwoMsg}</span>
  //                         <div>{restaurant?.sla?.slaString}</div>
  //                     </div>
  //                 </div>
  //                 <h1> Restaurant Id: {resId} </h1>
  //             </div>
  //         </div>
  //         <div>
  //             <h1>Menu</h1>
  //             <ul>
  //                 {Object.values(restaurant?.menu?.items).map((item) => (
  //                     <li key={item.id}> {item.name} </li>
  //                 ))}
  //             </ul>
  //         </div>
  //     </div>

  // );

  return (!restaurant) ? <Shimmer /> : (
    <div className="bg-slate-50 w-full">
      <div className="font-poppins flex gap-10 flex-wrap justify-center bg-[#171a29] text-white my-10 p-10 ">
        {/* {console.log(restaurant?.data?.cards[0]?.card?.card?.info?.name)} */}
        <img className="w-80 h-52 rounded-sm"
          src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
        <h2 > <span
          className="block font-semibold text-2xl mb-4 max-sm:mt-5 max-sm:ml-4 max-sm:text-sm"
        >{restaurant?.cards[0]?.card?.card?.info?.name}
        </span>
        </h2>
        <h3 className="max-sm:ml-4 max-sm:text-sm" >{restaurant?.cards[0]?.card?.card?.info?.cuisines?.join(", ")}</h3>
        <div className="flex  justify-between gap-12 pt-5 font-semibold text-base mt-7">
          <div className="pr-9 border-r-[1px] border-white">
            <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating} stars</h3>
            <br />
            <div className="text-sm font-extralight">
              {restaurant?.cards[0]?.card?.card?.info?.totalRatingsString}
            </div>
          </div>
          <div className=" pr-9 border-r-[1px] border-white">
            <div>{restaurant?.cards[0]?.card?.card?.info?.sla.slaString}</div>
            <br />
            <div className="text-sm font-extralight">Delivery Time</div>
          </div>
          <div>
            <div>&#8377; {restaurant?.cards[0]?.card?.card?.info?.costForTwo / 100}</div>
            <br />
            <div className="text-sm font-extralight">Cost for Two</div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="bg-white w-2/3 m-auto font-poppins flex p-3 justify-center">
          <h1 className="text-2xl font-bold">Menu: </h1>
          <ul>{
            restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards?.map((item) =>
              <div className="flex  justify-between m-5 p-5 border-b" key={item.card.info.id} >
                <div className="flex gap-3 flex-col max-w-md">
                  <li className="font-poppins font-bold max-sm:text-sm" >{item.card.info.name}</li>
                  <div>&#8377; {item.card.info.price / 100}</div>
                  <div className="text-[#666666] max-sm:mb-2 text-sm max-sm:text-sm">
                    {item.card.info.description}
                  </div>
                </div>
                <div className=" w-40 flex flex-col justify-between items-center gap-3">
                  <img
                    className="w-40 h-auto max-sm:max-w-[100px]  max-sm:aspect-auto"
                    src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId} alt="dish image" />
                </div>
              </div>
            )
          }
          </ul>
        </div>
      </div>
    </div>
  );

};

export default RestaurantMenu;


{/* <div className="flex ">
          <div className="bg-white w-2/3 m-auto font-poppins flex p-3 justify-center">
            <div className="w-full" data-testid="menu">
              {Object.values(restaurant?.menu?.items).map((item) => {
                return (
                  <div
                    className="flex  justify-between m-5 p-5 border-b"
                    key={item.id}
                  >
                    <div className="flex gap-3 flex-col max-w-md">
                      <div className="font-poppins font-bold max-sm:text-sm">
                        {item.name}
                      </div>
                      <div>&#8377; {item.price / 100}</div>
                      <div className="text-[#666666] max-sm:mb-2 text-sm max-sm:text-sm">
                        {item.description}
                      </div>
                    </div>
                    <div className=" w-40 flex flex-col justify-between items-center gap-3">
                      <img
                        className="w-40 h-auto max-sm:max-w-[100px]  max-sm:aspect-auto"
                        src={IMG__MENU_ITEM_CDN_URL + item?.cloudinaryImageId}
                        alt="dish image"
                        onError={(event) =>
                          (event.target.style.display = "none")
                        }
                      />
                      <div className="flex justify-between font-poppins w-20 border bg-slate-50 text-black py-[2px] px-2">
                        <button onClick={() => handleDecreamentFoodItem(item)}>
                          -
                        </button>
                        <span>{getItemCount(item)}</span>
                        <button
                          data-testid="addBtn"
                          onClick={() => handleAddFoodItem(item)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div> */}