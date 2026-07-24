import React from "react";
function Searchbar({search,setSearch}){
    function handlesubmit(e){
        setSearch(e.target.value);
    }
    return(
        <div className=" h-20 mt-2 p-5 text-white">
            <div><input type="text"  placeholder="search products..."
            className="bg-amber-400 p-2 rounded-2xl w-90 text-xl"
            value={search}
            onChange={(e)=>{handlesubmit(e)}}
            /></div>

        </div>
    )
}
export default Searchbar
