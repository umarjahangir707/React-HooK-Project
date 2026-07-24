import React from "react";
function Header(){
    return(
        <>
        <div className="bg-emerald-800 h-17 text-white flex items-center justify-between rounded-b-sm p-1.5">
            <div><h1>My store</h1></div>
            <div className="flex  pr-2.5 gap-3.5">
                <p>Home</p>
                <button className="border-2 border-amber-950 bg-black rounded-2xl pl-1 pr-1">Cart : 0</button>
            </div>

        </div>
        </>
    )
}
export default Header