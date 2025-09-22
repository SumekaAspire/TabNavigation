import React, { createContext, useEffect, useReducer, useState } from 'react'

export const WishlistContext = createContext();

const wishlistReducer =(state, action) =>{

    switch(action.type){
        case "ADD_TO_WISHLIST":
            
        if(state.find(item => item.id === action.payload.id)){
            return state;
        }
        return [...state, action.payload];

        case "REMOVE_FROM_WISHLIST":
            return state.filter(item =>item.id !== action.payload);

        case "RESET":
            return [];
        default:
            return state;
    }
}

export const WishlistProvider =({children})=>{

    //load from localStorage initially
    const initiailWishlist=() => {
    try {
      const savedWishlist = localStorage.getItem("wishlist");
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch (error) {
      console.error("Invalid wishlist data in localStorage", error);
      localStorage.removeItem("wishlist"); // reset bad data
      return [];
    }
  };

  const[wishlist, dispatch] = useReducer(wishlistReducer,[], initiailWishlist)
   
  //save to localStorage whenever wishlist changes
    useEffect(() =>{
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
  
    },[wishlist]);

//Action disptchers

const addToWishlist =(product)=>{
 dispatch({type:"ADD_TO_WISHLIST", payload: product});
}

const removeFromWishlist = (productId) =>{
    dispatch({type: "REMOVE_FROM_WISHLIST", payload: productId});
}
const resetWishlist =()=>{dispatch({type:"RESET"})}

  return (
  <WishlistContext.Provider value={{wishlist, addToWishlist, removeFromWishlist, resetWishlist}} >
   {children}
  </WishlistContext.Provider>
  )
}


















// import React, { createContext, useEffect, useState } from 'react'

// export const WishlistContext = createContext();

// export const WishlistProvider =({children})=>{

//     //load from localStorage initially
//     const [wishlist, setWishlist] = useState(() => {
//     try {
//       const savedWishlist = localStorage.getItem("wishlist");
//       return savedWishlist ? JSON.parse(savedWishlist) : [];
//     } catch (error) {
//       console.error("Invalid wishlist data in localStorage", error);
//       localStorage.removeItem("wishlist"); // reset bad data
//       return [];
//     }
//   });

//     //save to localStorage whenever wishlist changes
//     useEffect(() =>{
//         localStorage.setItem("wishlist", JSON.stringify(wishlist));
  
//     },[wishlist]);


//     const addToWishlist =(product)=>{
//         if(!wishlist.find((item) => item.id === product.id)){
//             setWishlist([...wishlist, product]);
//         }
//     }

//     const removeFromWishlist =(productId)=>{
//        setWishlist(wishlist.filter((item) => item.id !== productId));
//     }


//   return (
//   <WishlistContext.Provider value={{wishlist, addToWishlist, removeFromWishlist}} >
//    {children}
//   </WishlistContext.Provider>
//   )
// }
