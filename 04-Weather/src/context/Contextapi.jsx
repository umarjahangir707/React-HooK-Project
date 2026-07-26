import { createContext ,useContext, useState } from "react";
import { useSearch } from "../../../03-Movi-App/src/Context";

export const SearchContext=createContext();

export const SearchProvider=({children})=>{
    const [city,setCity]=useState("London")
    const [Weather,setWeather]=useState(null)
    return(
        <SearchContext.Provider value={{city,setCity,Weather,setWeather}}>
            {children}
        </SearchContext.Provider>
    )

}
export const useWeather=()=>{return useContext(SearchContext)}
