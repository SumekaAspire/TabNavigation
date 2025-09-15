import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistContext'
import { FaHeart, FaRegHeart } from "react-icons/fa";


const WishlistIcon = ({product}) => {
  const {wishlist, addToWishlist, removeFromWishlist} = useContext(WishlistContext);
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleClick =()=>{
    if(isInWishlist){
        removeFromWishlist(product.id);
    }else{
        addToWishlist(product);
    }
  }

  return (
    <div>
        <span 
        className="wishlist-icon"
        onClick={handleClick}
        title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        >
     
        {isInWishlist ? (<FaHeart color="red" size={20} /> ) : (<FaRegHeart size={20} /> )}
        </span>
    </div>
  )
}

export default WishlistIcon;