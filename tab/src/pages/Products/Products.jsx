import axios from 'axios';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import "../../css/HomePage.css";
import { CartContext } from '../../context/CartContext';
import {FaRegHeart, FaHeart } from "react-icons/fa"; 
import { WishlistContext } from '../../context/WishlistContext';
import ProductModal from "../../Modal/ProductDetailModal";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {addToCart} = useContext(CartContext);
  const { wishlist, addToWishlist, removeFromWishlist } =  useContext(WishlistContext);
  const [selectedProduct, setSelectedProduct] = useState(null);


  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setError(null);
      } catch (err) {
        setError("Something went wrong while fetching products.");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);


  const handleAddToCart = useCallback((e, product) => {
      e.stopPropagation();//prevent open modal
      addToCart(product);
    }, [addToCart]);
  
    const handleSelectProduct = useCallback((product) => {
      setSelectedProduct(product);
    }, []);
  
    const handleCloseModal = useCallback(() => {
      setSelectedProduct(null);
    }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2 style={{ color: 'red' }}>{error}</h2>;

  return (
    <div>
      <h2>All Products</h2>
      <div className="product-alignment">
        {products.map((product) => {
        const isWishlisted = wishlist.some((item) => item.id === product.id);
         return(
             <div 
               key={product.id}
               className="product-card"
               onClick={() => handleSelectProduct(product)} // open modal
               style={{ cursor: "pointer" }}> 
          
            {/* <FaRegHeart size={18}/> */}
           <span
                className="wishlist-icon"
                onClick={(e) =>{
                  e.stopPropagation();
                  isWishlisted
                    ? removeFromWishlist(product.id)
                    : addToWishlist(product)
                }
                }
              >
                {isWishlisted ? (
                  <FaHeart color="red" size={20} />
                ) : (
                  <FaRegHeart size={20} />
                )}
              </span>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p><strong>₹{product.price}</strong></p> 
            {/* strong - screen readers and seo friendly */}
            <button onClick={(e) => handleAddToCart(e,product)}>Add to Cart</button>
          </div>
         )
      
})}
      </div>
      {/* ProductDetailModal */}
      <ProductModal
        product={selectedProduct}
        onClose={handleCloseModal}
      />
      <br /><br />
    </div>
  );
};

export default Products;