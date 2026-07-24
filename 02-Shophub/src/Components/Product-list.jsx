import React, {useState, useEffect } from "react";
import Productcards from "./Productcards";
function Product_list({search , category ,sortby ,visibleProducts,setSelectedProduct}){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        async function fetchproduct(){
            try{
                const response=await fetch("https://fakestoreapi.com/products")
                const data=await response.json();
                console.log(data)
                setProducts(data)
                setLoading(false)
            }
            catch(error) {
                console.log(error)
                setLoading(false)
            }
        }
        fetchproduct();
    },[])   
    if(loading){
        return <h1 className="content-center text-2xl font-bold">Loading...</h1>
    }
    const filteredProducts = products.filter((product) => {
        const matchesSearch =
            product.title.toLowerCase().includes(search.toLowerCase().trim());
        const matchesCategory =
            category === "All" || product.category === category;

        return matchesSearch && matchesCategory;
    });
    const sortedProducts = [...filteredProducts];
        if (sortby === "low-high") {
            sortedProducts.sort((a, b) => a.price - b.price);
        }
        if (sortby === "high-low") {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
            {sortedProducts.slice(0,visibleProducts)
            .map((item) => (
                <Productcards key={item.id} product={item} setSelectedProduct={setSelectedProduct}/>
            ))}
        </div>
    );
    
}
export default Product_list
