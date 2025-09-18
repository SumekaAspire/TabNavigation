import React, { useContext, useCallback,useMemo } from 'react'
import { WishlistContext } from '../../context/WishlistContext'
import { FaHeart, FaRegHeart } from "react-icons/fa";


const WishlistIcon = React.memo(({product}) => {
  const {wishlist, addToWishlist, removeFromWishlist} = useContext(WishlistContext);
  const isInWishlist = useMemo(
    () => wishlist.some((item) => item.id === product.id),[wishlist,product.id]
  );

  const handleClick =useCallback(()=> {
    if(isInWishlist){
        removeFromWishlist(product.id);
    }else{
        addToWishlist(product);
    }
  
  },[isInWishlist,product,addToWishlist,removeFromWishlist])

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
})

export default WishlistIcon;