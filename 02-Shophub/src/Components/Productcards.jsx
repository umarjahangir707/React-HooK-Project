import React from "react";
function Productcards({product ,setSelectedProduct}){
    return(
        <div className="h-80 w-80 bg-gray-300 m-1 text-xl text-gray-800 flex flex-col">
            <div>  
                <img src={product.image} alt={product.title}  className=" object-cover h-50 w-fit rounded-bl-3xl"/>
            </div>
            <div className="flex items-center justify-between p-1">
                <p>{product.title}</p>
                <p>{product.price}</p>
            </div>
            <div className=" flex justify-center">
                <button className="bg-emerald-900 border-2 border-amber-800 rounded-2xl p-1"
                 onClick={() => setSelectedProduct(product)}                
                >view detail</button>
            </div>
        </div>
    )
}
export default Productcards