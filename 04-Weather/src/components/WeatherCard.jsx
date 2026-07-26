import React, { useEffect, useState } from "react";
import { useWeather } from "../context";

function WeatherCard({Weather}){
     if (!Weather || !Weather.sys) {
        return <h2>Loading...</h2>;
    }
    const sunrise = new Date(Weather.sys.sunrise * 1000);
    const sunset = new Date(Weather.sys.sunset * 1000);
    const sunriseTime = sunrise.toLocaleTimeString();
    const sunsetTime = sunset.toLocaleTimeString();
    return(
        <div className="bg-white h-[450px] w-[400px] mt-8 ml-8 p-2">
            <div className="flex items-center justify-between text-black ">
                <div>
                    <h1 className="text-xl">Current Weather</h1>
                </div>
                <div className="gap-2 flex border-2 border-black rounded-l-xl rounded-r-xl p-0.5">
                    <div><button>F</button></div>
                    <div><button>C</button></div>
                </div>
            </div>
            <div className="p-10 pl-20 flex flex-col justify-center">
                <div>
                    <img src="https://images.unsplash.com/photo-1563630381190-77c336ea545a?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sun"
                className="w-28 object-cover h-28 rounded-full mb-3" />
                
                </div>
                <div><h1 className="mb-3 ">{Weather.name}</h1></div>
                <div><p className="font-bold text-4xl">{Weather.sys.country}</p> 
                <h1>{Math.round(Weather.main.temp)}°C</h1>
                <p>Feels Like: {Math.round(Weather.main.feels_like)}°C</p>
                <p>Pressure: {Weather.main.pressure} hPa</p>
                <p>Wind: {Weather.wind.speed} m/s</p>
                <p>🌅 Sunrise: {sunriseTime}</p>
                <p>🌇 Sunset: {sunsetTime}</p>
                </div>   
            </div>
            <div>
                <p className="text-xl text-yellow-400">clear sky</p>
            </div>
        </div>
    )
}
export default WeatherCard