import React, { useEffect } from "react";
import WeatherCard from "./WeatherCard";
import { useWeather } from "../context";

function WeatherList(){
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const {city,setCity}=useWeather();
     const {Weather,setWeather}=useWeather();
    useEffect(()=>{
        const getWeather=async()=>{
            try{
                const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
                const data=await response.json();
                console.log(data);
                setWeather(data);
            }catch(erro){
                console.log(error)
            } 
        }
        getWeather();
    },[city])
    return(
        <div>
            <WeatherCard Weather={Weather}/>
        </div>
    )
}
export default WeatherList
