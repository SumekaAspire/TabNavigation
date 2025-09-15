import React, { createContext, useEffect, useState } from 'react'

export const WishlistContext = createContext();

export const WishlistProvider =({children})=>{

    //load from localStorage initially
    const [wishlist, setWishlist] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem("wishlist");
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch (error) {
      console.error("Invalid wishlist data in localStorage", error);
      localStorage.removeItem("wishlist"); // reset bad data
      return [];
    }
  });

    //save to localStorage whenever wishlist changes
    useEffect(() =>{
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
  
    },[wishlist]);


    const addToWishlist =(product)=>{
        if(!wishlist.find((item) => item.id === product.id)){
            setWishlist([...wishlist, product]);
        }
    }

    const removeFromWishlist =(productId)=>{
       setWishlist(wishlist.filter((item) => item.id !== productId));
    }


  return (
  <WishlistContext.Provider value={{wishlist, addToWishlist, removeFromWishlist}} >
   {children}
  </WishlistContext.Provider>
  )
}
