import React from "react";
function Header(){
    return(
        <div className="h-20 w-full flex items-center justify-center gap-[960px]">
            <div>
                <h1 className="font-bold text-2xl text-white">React Weather App</h1>
            </div>
            <div>
                <img src="https://media.istockphoto.com/id/491701259/photo/blue-sky-with-sun.jpg?s=1024x1024&w=is&k=20&c=25PGqBoS0T8lNfSJNxXcK48aSR62iSWw69CBxVBM4jw=" alt="weather" 
                className="w-16 object-cover rounded-l-2xl  rounded-r-2xl h-10"
                />
            </div>
        </div>
    )
}
export default Header