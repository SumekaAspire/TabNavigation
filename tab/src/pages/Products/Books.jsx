import React ,{useState, useContext} from 'react'
import useFetch from '../CustomHooks/useFetch';
import { CartContext } from '../../context/CartContext';
import WishlistIcon from '../Wishlist/WishlistIcon';
import ProductModal from "../../Modal/ProductDetailModal";
import SearchBar from '../../components/SearchBar';

const Books = () => {

    const[products,loading,error]= useFetch({url: "https://dummyjson.com/products"});
    const {addToCart} = useContext(CartContext);
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    if(loading) return <h3>Loading</h3>
    if(error) return <h3 style={{color:"red",}}>{error}</h3>

  return (
   <div>
     <h2>Books</h2>
     <SearchBar
      data={Array.isArray(products.products) ? products.products : []}
      searchKey="title"
      renderResults={(filteredProducts)=> (
        <div className="product-alignment">
        {filteredProducts.map((product) => (
          <div 
          key={product.id} 
          className="product-card"
          onClick={() => setSelectedProduct(product)} // open modal
          style={{ cursor: "pointer" }}>

           <div onClick={(e) => e.stopPropagation()}>
              <WishlistIcon product={product} />
            </div>       
            <img src={product.thumbnail} alt={product.title} />
            <h4>{product.title}</h4>
            <p><strong>₹{product.price}</strong></p> 
            <button onClick={(e) => {
                e.stopPropagation(); // prevent modal open
                addToCart(product);
              }}>Add to Cart</button>
          </div>
        ))}
      </div>
      )}
     />
       {/* ProductDetailModal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
   </div>
  )
}

export default Books;