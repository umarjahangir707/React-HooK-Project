import { useState } from 'react'
import Header from './Components/Header'
import Filterbar from './Components/Filterbar'
import Loadmore_btn from './Components/Loadmore-btn'
import Product_list from './Components/Product-list'
import Searchbar from './Components/Searchbar'
import ProductModal from './Components/ProductModal'


function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortby,setSortby]=useState("default");
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <> 
    <Header/>
    <Searchbar search={search} setSearch={setSearch}/>
    <Filterbar category={category} setCategory={setCategory} sortby={sortby} setSortby={setSortby} />
    <Product_list search={search} category={category} sortby={sortby} visibleProducts={visibleProducts} setSelectedProduct={setSelectedProduct}/>
    <Loadmore_btn  visibleProducts={visibleProducts}
    setVisibleProducts={setVisibleProducts}/>
    <ProductModal
    selectedProduct={selectedProduct}
    setSelectedProduct={setSelectedProduct}/>
    </>
  )
}

export default App
