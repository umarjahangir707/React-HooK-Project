import React from "react";
function ProductModal({
    selectedProduct,
    setSelectedProduct
}) {

    if (!selectedProduct)
        return null;

    return (

        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

            <div className="bg-white p-6 rounded-lg w-[500px]">

                <img
                    src={selectedProduct.image}
                    className="h-60 mx-auto"
                />

                <h2>{selectedProduct.title}</h2>

                <p>${selectedProduct.price}</p>

                <p>{selectedProduct.category}</p>

                <p>{selectedProduct.description}</p>

                <button
                    onClick={() =>
                        setSelectedProduct(null)
                    }
                >
                    Close
                </button>

            </div>

        </div>
    );
}

export default ProductModal;
