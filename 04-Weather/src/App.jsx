import { useState } from 'react'
import Header from './components/Header'
import Searchbar from './components/Searchbar'
import WeatherList from './components/Weatherlist'
import { SearchProvider,useWeather } from './context'


function App() {
  return (
    <div>
      <SearchProvider>
      <Header/>  
      <Searchbar/> 
      <WeatherList /> 
      </SearchProvider> 
    </div>
  )
}

export default App
