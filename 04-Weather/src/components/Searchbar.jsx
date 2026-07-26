import React from "react";
import {useWeather } from "../context";

function Searchbar(){
    const {city,setCity}=useWeather();
    return(
        <div>
            <input type="text" placeholder="search" className="bg-gray-600 ml-20 w-1/2 text-white mt-8 border-blue-800 p-2 rounded-2xl"
            value={city}
            onChange={(e)=>{setCity(e.target.value)}}
            />
        </div>
    )
}
export default Searchbar
