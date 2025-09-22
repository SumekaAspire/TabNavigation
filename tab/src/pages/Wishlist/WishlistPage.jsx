import React,{useState, useContext, useCallback} from 'react'
import { WishlistContext } from '../../context/WishlistContext'
import { CartContext } from '../../context/CartContext';
import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";
import "../../css/HomePage.css";

const WishlistPage = () => {
   
    const {wishlist, removeFromWishlist} = useContext(WishlistContext);
    const {addToCart} = useContext(CartContext);

    const handleAddToCart =useCallback((product)=> {
        addToCart(product);
        removeFromWishlist(product.id); //remove from wishlist
    })

    if(wishlist.length === 0) {
        return <h2>Your Wishlist is empty...</h2>
    }


  return (
    <div>
        <h2>Your WishList!!</h2>
        <div className='product-alignment'> 
          {wishlist.map((product) =>(
         <div key ={product.id}className='product-card'>
            <span className='wishlist-icon' onClick={() => removeFromWishlist(product.id)} title="Remove from Wishlist">
                <FaTrash size={18} color="red"/>
            </span>
            <img src={product.image} alt={product.title}/>
            <h4>{product.title}</h4>
            <p><strong>₹{product.price}</strong></p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
               
         </div>  
          )
        )}
        </div>
    </div>
  )
}

export default WishlistPage