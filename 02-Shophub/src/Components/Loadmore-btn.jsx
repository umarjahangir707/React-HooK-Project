function Loadmore_btn({ visibleProducts, setVisibleProducts ,set}) {

    if (visibleProducts >= 20) {
        return null;
    }

    return (
        <div className="flex justify-center my-8">
            <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                onClick={() =>
                    setVisibleProducts((prev) => prev + 4)
                }
            >
                Load More
            </button>
        </div>
    );
}

export default Loadmore_btn;