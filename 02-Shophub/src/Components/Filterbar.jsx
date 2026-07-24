import React from "react";

function Filterbar({ category, setCategory,sortby,setSortby }) {

    function handleChange(e) {
        setCategory(e.target.value);
        setSortby(e.target.value)
    }

    return (
        <div className="h-10 flex items-center justify-around text-white">
            <div className="bg-amber-950 p-1 rounded-xl">
                <select
                    className="bg-amber-950 p-1"
                    value={category}
                    onChange={handleChange}
                >
                    <option value="All">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select>
            </div>

            <div className="bg-amber-950 p-1 rounded-xl">
                <select onChange={handleChange} value={sortby} className="bg-amber-950 p-1">
                    <option value="default">Default</option>
                    <option value="low-high">Price: Low to High</option>
                    <option value="high-low">Price: High to Low</option>
                </select>
            </div>

        </div>
    );
}

export default Filterbar;