import React, { useContext, useState } from "react";
import useFetch from "../CustomHooks/useFetch";
import { CartContext } from "../../context/CartContext";
import WishlistIcon from "../Wishlist/WishlistIcon";
import ProductModal from "../../Modal/ProductDetailModal";

const Clothing = () => {
  const [products, loading, error] = useFetch({ url: "https://fakestoreapi.com/products" });
  const { addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");

  if (loading) return <h3>Loading</h3>;
  if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

  
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Clothing</h2>

      {/* Search box */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 8, width: "30%", margin: "20px",  }}
      />

      <div className="product-alignment">
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => setSelectedProduct(product)} // open modal
              style={{ cursor: "pointer" }}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <WishlistIcon product={product} />
              </div>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>
                <strong>₹{product.price}</strong>
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent modal open
                  addToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>

      {/* ProductDetailModal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default Clothing;










// import React ,{useContext} from 'react'
// import useFetch from '../CustomHooks/useFetch';
// import { CartContext } from '../../context/CartContext';
// import WishlistIcon from '../Wishlist/WishlistIcon';

// const Clothing = () => {

//     const[products,loading,error]= useFetch({url: "https://fakestoreapi.com/products"});
//     const {addToCart} = useContext(CartContext);
    
//     if(loading) return <h3>Loading</h3>
//     if(error) return <h3 style={{color:"red",}}>{error}</h3>

//   return (
//    <div>
//      <h2>Clothing</h2>
//      <div className="product-alignment">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <WishlistIcon product={product}/>
//             <img src={product.image} alt={product.title} />
//             <h4>{product.title}</h4>
//             <p><strong>₹{product.price}</strong></p> 
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//    </div>
//   )
// }

// export default Clothing;